---
title: "Observability and Monitoring: Seeing Your Systems in Production"
date: "2023-01-30"
author: "Mevlüt Mert Çİ"
category: "Infrastructure"
tags: ["observability", "monitoring", "logging", "tracing"]
excerpt: "Implementing comprehensive observability through logging, metrics, and distributed tracing."
---

# Observability and Monitoring: Seeing Your Systems in Production

Observability answers: "What's happening in my system?" It's built on three pillars: logs, metrics, and traces.

## Structured Logging

```typescript
import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

logger.info('User registered', {
  userId: user.id,
  email: user.email,
  timestamp: new Date().toISOString()
});
```

## Metrics Collection

```javascript
const prometheus = require('prom-client');

const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 5, 15, 50, 100, 500]
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    httpRequestDuration
      .labels(req.method, req.route.path, res.statusCode)
      .observe(duration);
  });
  next();
});
```

## Distributed Tracing

```javascript
const opentelemetry = require('@opentelemetry/api');
const trace = opentelemetry.trace.getTracer('app');

async function processOrder(orderId) {
  const span = trace.startSpan('processOrder');
  span.setAttributes({ orderId });

  try {
    const span2 = trace.startSpan('validateOrder');
    // validation logic
    span2.end();

    const span3 = trace.startSpan('processPayment');
    // payment logic
    span3.end();
  } finally {
    span.end();
  }
}
```

Observability enables rapid problem diagnosis and continuous improvement in production systems.
