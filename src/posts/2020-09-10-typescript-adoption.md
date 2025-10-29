---
title: "TypeScript Adoption: From JavaScript to Strongly Typed Systems"
date: "2020-09-10"
author: "Mevlüt Mert Çİl"
category: "Frontend Development"
tags: ["typescript", "javascript", "types", "tooling"]
excerpt: "Why and how to adopt TypeScript in JavaScript projects, benefits and challenges of static typing."
---

# TypeScript Adoption: From JavaScript to Strongly Typed Systems

JavaScript's flexibility is both a blessing and a curse. TypeScript adds the structure and safety that large codebases need while maintaining JavaScript's expressiveness.

## Type Basics

```typescript
// Primitive types
const name: string = "John";
const age: number = 25;
const active: boolean = true;

// Union types
type Status = "active" | "inactive" | "pending";
const userStatus: Status = "active";

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional
  readonly createdAt: Date; // Readonly
}

// Classes with types
class UserService {
  getUser(id: number): User | null {
    // Implementation
    return null;
  }
}
```

## Generic Types

```typescript
interface ApiResponse<T> {
  status: number;
  data: T;
  message: string;
}

interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}
```

## Advanced Patterns

```typescript
// Discriminated unions
type Result<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function handleResult<T>(result: Result<T>) {
  if (result.status === 'success') {
    console.log(result.data);
  } else {
    console.error(result.error);
  }
}

// Utility types
type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type UserKeys = keyof User;
```

Migration to TypeScript improves code reliability, enables better tooling, and catches errors at compile time rather than runtime.
