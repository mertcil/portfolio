---
title: "Docker Containerization: Building Portable Applications"
date: "2018-09-05"
author: "Mevlüt Mert Çİl"
category: "DevOps"
tags: ["docker", "containers", "devops", "infrastructure"]
excerpt: "Docker revolutionized deployment by containerizing applications with their complete dependencies."
---

# Docker Containerization: Building Portable Applications

Docker solved a fundamental problem: "It works on my machine." Containers ensure consistent environments from development to production.

## Dockerfile Basics

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

## Multi-Stage Builds

```dockerfile
# Build stage
FROM node:16 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Production stage
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

## Docker Compose

```yaml
version: '3.9'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:14
    environment:
      - POSTGRES_PASSWORD=password
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

Docker containerization enabled DevOps culture, continuous deployment, and infrastructure as code.
