---
title: "Spring MVC Best Practices: Building Scalable Java Web Applications"
date: "2017-02-08"
author: "Mevlüt Mert Çİl"
category: "Web Development"
tags: ["spring", "java", "mvc", "best-practices", "architecture"]
excerpt: "Best practices for building robust, secure, observable, and well-governed Java web applications with Spring MVC."
---

# Spring MVC Best Practices: Building Scalable Java Web Applications

Spring Framework has become the de-facto standard for Java enterprise development. After building multiple Spring MVC applications, I want to share patterns and practices that lead to maintainable, scalable systems.

Discipline around layering, configuration, and testing keeps Spring projects from devolving into monolithic controllers and tangled dependencies. Treat the framework as an enabler—not as a shortcut around sound architecture.

## Architecture Overview

```
Request → Controller → Service → Repository → Database
  ↓           ↓          ↓          ↓
 HTTP      Business    Domain    Persistence
```

## 1. Separation of Concerns

### Bad: Fat Controller

```java
@Controller
public class OrderController {
    @PostMapping("/order")
    public String createOrder(OrderForm form) {
        // Database logic
        Order order = new Order();
        order.setCustomerName(form.getName());

        // Validation
        if (order.getAmount() < 0) return "error";

        // Complex business logic
        order.setTaxAmount(order.getAmount() * 0.18);

        // Saving
        orderRepository.save(order);
        return "success";
    }
}
```

### Good: Thin Controller

```java
@Controller
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/order")
    public String createOrder(@Valid OrderForm form) {
        Order order = orderService.createOrder(form);
        return "success";
    }
}

@Service
public class OrderService {
    @Autowired
    private OrderRepository repository;
    @Autowired
    private TaxCalculationService taxService;

    public Order createOrder(OrderForm form) {
        Order order = Order.fromForm(form);
        order.setTaxAmount(taxService.calculate(order));
        return repository.save(order);
    }
}
```

## 2. Dependency Injection

Always use constructor injection for required dependencies:

```java
@Service
public class ReportService {
    private final DatabaseService dbService;
    private final CacheService cacheService;

    // Constructor injection - dependencies are explicit
    public ReportService(DatabaseService dbService, CacheService cacheService) {
        this.dbService = dbService;
        this.cacheService = cacheService;
    }

    public Report generateReport(Long reportId) {
        // Implementation
    }
}
```

## 3. Data Persistence with Hibernate

```java
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);

    @Query("SELECT p FROM Product p WHERE p.price > :minPrice AND p.active = true")
    List<Product> findActiveProductsAbovePrice(@Param("minPrice") BigDecimal minPrice);
}

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
```

## 4. Exception Handling

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException e) {
        ErrorResponse error = new ErrorResponse("NOT_FOUND", e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorResponse> handleValidation(ValidationException e) {
        ErrorResponse error = new ErrorResponse("VALIDATION_ERROR", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}
```

## 5. Testing

```java
@WebMvcTest(OrderController.class)
public class OrderControllerTest {
    @MockBean
    private OrderService orderService;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testCreateOrder() throws Exception {
        Order mockOrder = new Order();
        when(orderService.createOrder(any())).thenReturn(mockOrder);

        mockMvc.perform(post("/order")
                .param("name", "Test"))
                .andExpect(status().isOk());

        verify(orderService).createOrder(any());
    }
}
```

## 6. Configuration Management

```java
@Configuration
public class AppConfig {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        return mapper;
    }
}
```

## 7. Performance Considerations

- Use `@Transactional(readOnly = true)` for read operations
- Implement pagination for large result sets
- Cache frequently accessed data
- Use database indexes appropriately
- Monitor N+1 query problems

## Key Takeaways

1. Controllers should be thin
2. Services contain business logic
3. Repositories handle data access
4. Constructor injection over field injection
5. Test your components
6. Handle errors gracefully

Spring's flexibility requires discipline, but following these practices ensures maintainable code at scale.

## Observability and Security

Instrument controllers and services with Micrometer to capture request latency, error rates, and downstream dependency health. Feed metrics into Prometheus or CloudWatch and surface dashboards that on-call engineers rely on daily. Combine structured logging with correlation IDs so cross-service traces are easy to follow.

Security should be considered from day zero. Apply Spring Security with method-level annotations, configure CORS policies explicitly, and validate inputs with Bean Validation annotations. For external integrations, rotate secrets via environment variables or vaults, and sanitize all outbound logs to avoid leaking sensitive data.

## Deployment Discipline and Documentation

Automate builds with Gradle or Maven, run unit and integration tests in CI, and use containers or buildpacks for consistent deployments. Capture configuration details in README files and maintain ADRs for major architectural choices. When teams share context openly, Spring MVC applications remain approachable even as they scale to dozens of services and contributors.

## Modern Tooling and Ecosystem Integration

Spring keeps evolving. Explore WebFlux for reactive use cases, Spring Native for ahead-of-time compilation, and Spring Cloud for distributed patterns. Integrate with observability stacks (Micrometer → Prometheus/Grafana) and leverage Spring Boot actuators to expose health checks and metrics. Keeping an eye on the ecosystem lets you adopt innovations without compromising stability.

## Mentorship and Team Practices

Pair programming, code walkthroughs, and guild meetings disseminate Spring knowledge across teams. Encourage junior engineers to present brown-bag sessions on new features or patterns. Document conventions—naming, package layout, exception handling—so new services align with organizational norms. Culture amplifies tooling; together they ensure Spring MVC projects stay nimble over the long haul.
