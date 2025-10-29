---
title: "React Server Components: The Future of Full-Stack React"
date: "2023-05-14"
author: "Mevlüt Mert Çİl"
category: "Frontend Framework"
tags: ["react", "server-components", "nextjs", "architecture"]
excerpt: "React Server Components enable direct database access from components, changing how we build full-stack React applications."
---

# React Server Components: The Future of Full-Stack React

React Server Components (RSC) represent a paradigm shift. They run only on the server and never send component code to the browser.

## Server Component Example

```javascript
// app/posts/page.tsx (Server Component)
import { Post } from '@/components/post';
import { db } from '@/lib/db';

export default async function PostsPage() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="posts-container">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
```

## Client Component Interactivity

```javascript
// components/post-actions.tsx
'use client';

import { useState } from 'react';

export function PostActions({ postId }) {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'} Like
    </button>
  );
}
```

RSC eliminate waterfall requests, reduce bundle size, and enable secure database access from components.
