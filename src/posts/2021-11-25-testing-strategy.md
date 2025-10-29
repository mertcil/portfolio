---
title: "Testing Strategy: Unit, Integration, and E2E Tests"
date: "2021-11-25"
author: "Mevlüt Mert Çİl"
category: "QA & Testing"
tags: ["testing", "junit", "jest", "automation"]
excerpt: "Comprehensive testing strategies from unit tests to end-to-end testing, ensuring code quality and reliability."
---

# Testing Strategy: Unit, Integration, and E2E Tests

Quality software requires quality testing. The test pyramid shows where to focus effort for maximum coverage with minimal maintenance burden.

## Unit Tests with Jest

```javascript
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  test('should create user with valid data', () => {
    const user = service.createUser({ name: 'John', email: 'john@example.com' });
    expect(user.id).toBeDefined();
    expect(user.name).toBe('John');
  });

  test('should throw error for invalid email', () => {
    expect(() => {
      service.createUser({ name: 'John', email: 'invalid' });
    }).toThrow('Invalid email');
  });
});
```

## Integration Tests

```java
@SpringBootTest
public class UserServiceIntegrationTest {
  @Autowired
  private UserService userService;

  @Autowired
  private UserRepository repository;

  @Test
  public void testCreateAndRetrieveUser() {
    User user = userService.createUser(new CreateUserRequest("John", "john@example.com"));
    assertNotNull(user.getId());

    User retrieved = repository.findById(user.getId()).orElseThrow();
    assertEquals("John", retrieved.getName());
  }
}
```

## E2E Tests with Selenium

```java
public class UserJourneyTest {
  @Test
  public void userRegistrationFlow() {
    WebDriver driver = new ChromeDriver();
    driver.get("http://localhost:3000/register");

    driver.findElement(By.id("name")).sendKeys("John");
    driver.findElement(By.id("email")).sendKeys("john@example.com");
    driver.findElement(By.id("submit")).click();

    String message = driver.findElement(By.className("success")).getText();
    assertEquals("Registration successful!", message);

    driver.quit();
  }
}
```

Testing pyramid: 70% unit tests, 20% integration tests, 10% E2E tests for optimal ROI.
