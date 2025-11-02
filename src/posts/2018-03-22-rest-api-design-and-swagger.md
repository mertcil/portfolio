---
title: "REST API Design and Swagger: Building Self-Documenting APIs"
date: "2018-03-22"
author: "Mevlüt Mert Çİl"
category: "API Design"
tags: ["rest", "api", "swagger", "openapi", "documentation"]
excerpt: "Best practices for designing RESTful APIs and leveraging Swagger/OpenAPI, contract testing, governance, developer portals, and lifecycle management."
---

# REST API Design and Swagger: Building Self-Documenting APIs

REST APIs are the backbone of modern software systems. After designing multiple APIs across different projects, I've learned that great API design is about clarity, consistency, and documentation.

Start with the consumer in mind. Define use cases, error scenarios, and data shapes collaboratively before writing code. When teams agree on contracts early, implementation becomes straightforward and integrations go live faster.

## REST Principles

```
GET    /api/v1/customers        → List all customers
GET    /api/v1/customers/{id}   → Get specific customer
POST   /api/v1/customers        → Create customer
PUT    /api/v1/customers/{id}   → Update customer
DELETE /api/v1/customers/{id}   → Delete customer
```

## Swagger/OpenAPI Definition

```yaml
openapi: 3.0.0
info:
  title: Customer API
  version: 1.0.0

paths:
  /customers:
    get:
      summary: List all customers
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [active, inactive]
      responses:
        '200':
          description: List of customers
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Customer'

components:
  schemas:
    Customer:
      type: object
      required: [id, name, email]
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string
          format: email
        status:
          type: string
          enum: [active, inactive]
```

## Spring REST Controller with Swagger

```java
@RestController
@RequestMapping("/api/v1/customers")
@Tag(name = "Customers", description = "Customer management API")
public class CustomerController {

    @GetMapping
    @Operation(summary = "List all customers", description = "Retrieve a paginated list of customers")
    public ResponseEntity<Page<CustomerDTO>> listCustomers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @Parameter(description = "Filter by status") @RequestParam(required = false) String status) {
        return ResponseEntity.ok(customerService.findAll(page, size, status));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get customer by ID")
    public ResponseEntity<CustomerDTO> getCustomer(
            @Parameter(description = "Customer ID") @PathVariable Long id) {
        return ResponseEntity.ok(customerService.findById(id));
    }

    @PostMapping
    @Operation(summary = "Create new customer")
    @ApiResponse(responseCode = "201", description = "Customer created successfully")
    public ResponseEntity<CustomerDTO> createCustomer(
            @Valid @RequestBody CreateCustomerRequest request) {
        CustomerDTO customer = customerService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(customer);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update customer")
    public ResponseEntity<CustomerDTO> updateCustomer(
            @PathVariable Long id,
            @Valid @RequestBody UpdateCustomerRequest request) {
        return ResponseEntity.ok(customerService.update(id, request));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete customer")
    @ApiResponse(responseCode = "204", description = "Customer deleted successfully")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        customerService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
```

## Error Handling in APIs

```java
@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException e) {
        ErrorResponse error = ErrorResponse.builder()
            .code("CUSTOMER_NOT_FOUND")
            .message(e.getMessage())
            .timestamp(LocalDateTime.now())
            .build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException e) {
        List<String> errors = e.getBindingResult()
            .getAllErrors()
            .stream()
            .map(ObjectError::getDefaultMessage)
            .collect(Collectors.toList());

        ErrorResponse error = ErrorResponse.builder()
            .code("VALIDATION_ERROR")
            .message("Validation failed")
            .details(errors)
            .timestamp(LocalDateTime.now())
            .build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}
```

## Pagination and Filtering

```java
@Service
public class CustomerService {
    @Autowired
    private CustomerRepository repository;

    public Page<CustomerDTO> findAll(int page, int size, String status) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());

        Page<Customer> customers;
        if (status != null) {
            customers = repository.findByStatus(status, pageable);
        } else {
            customers = repository.findAll(pageable);
        }

        return customers.map(this::toDTO);
    }
}
```

## Versioning

```java
// Version in URL
@GetMapping("/v1/customers")
public ResponseEntity<List<CustomerDTOV1>> listV1() { }

@GetMapping("/v2/customers")
public ResponseEntity<List<CustomerDTOV2>> listV2() { }

// Version in header
@GetMapping("/customers")
public ResponseEntity<?> list(@RequestHeader("API-Version") String version) {
    if ("2".equals(version)) {
        return ResponseEntity.ok(v2Data);
    }
    return ResponseEntity.ok(v1Data);
}
```

## Best Practices

1. **Use nouns for resources** - `/customers`, not `/getCustomers`
2. **Use HTTP methods correctly** - GET is read-only, POST creates, PUT updates
3. **Return appropriate status codes** - 200, 201, 400, 404, 500
4. **Include pagination** - Always paginate large result sets
5. **Document everything** - Swagger/OpenAPI handles this
6. **Version your APIs** - Breaking changes need versions
7. **Validate input** - Never trust client data

Swagger transformed how we build APIs—from writing documentation manually to generating it automatically from annotations. This keeps documentation always in sync with implementation.

## Contract Testing and Mock Servers

Combine OpenAPI specs with mock servers like Prism or WireMock so frontend teams can build against realistic responses while backends evolve. Add contract tests to CI that validate responses against the spec, ensuring changes do not break consumers silently. This collaboration pattern reduces integration bugs and accelerates delivery.

## Developer Experience and Governance

Well-designed APIs come with a welcoming developer experience. Publish your OpenAPI specs to a developer portal, include code samples in multiple languages, and document rate limits plus authentication flows clearly. Establish an API style guide that covers naming conventions, pagination formats, and standard error payloads. Governance ensures consistency across services, making the entire platform feel cohesive to internal and external consumers alike.

## Lifecycle Management and Version Strategy

APIs evolve. Plan deprecation policies from the start—announce changes, offer migration guides, and provide sandbox environments for testing. Use semantic versioning in OpenAPI specs, but keep public URLs stable whenever possible. Batching breaking changes into predictable release trains reduces churn for consumers.

Monitor usage analytics to understand which endpoints drive value. Sunsetting underused APIs frees resources for investments elsewhere. Pair analytics with consumer feedback channels to prioritize enhancements that improve developer satisfaction and product impact.
