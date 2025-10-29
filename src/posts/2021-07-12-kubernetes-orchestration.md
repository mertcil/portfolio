---
title: "Kubernetes Orchestration: Managing Container Fleets"
date: "2021-07-12"
author: "Mevlüt Mert Çİl"
category: "DevOps"
tags: ["kubernetes", "containers", "orchestration", "devops"]
excerpt: "Managing containers at scale with Kubernetes, deployments, services, and cluster management."
---

# Kubernetes Orchestration: Managing Container Fleets

Kubernetes automates deployment, scaling, and operation of containers across clusters. Learning Kubernetes is essential for modern infrastructure.

## Kubernetes Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-server
  template:
    metadata:
      labels:
        app: api-server
    spec:
      containers:
      - name: api
        image: myapp:1.0
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: connection-string
```

## Service Exposure

```yaml
apiVersion: v1
kind: Service
metadata:
  name: api-service
spec:
  selector:
    app: api-server
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

Kubernetes is complex but powerful—essential for managing containerized applications at enterprise scale.
