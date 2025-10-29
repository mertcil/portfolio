---
title: "Next.js and Server-Side Rendering: Building Modern Web Applications"
date: "2022-08-22"
author: "Mevlüt Mert Çİl"
category: "Frontend Framework"
tags: ["nextjs", "ssr", "ssg", "performance"]
excerpt: "Next.js enables server-side rendering, static generation, and full-stack development with React."
---

# Next.js and Server-Side Rendering: Building Modern Web Applications

Next.js revolutionized React development by providing server-side rendering, static site generation, and API routes out of the box.

## Static Generation

```javascript
// pages/posts/[id].tsx
export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => ({ params: { id: post.id } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return { props: { post }, revalidate: 3600 };
}

export default function Post({ post }) {
  return <article>{post.content}</article>;
}
```

## API Routes

```javascript
// pages/api/users/[id].ts
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const user = await getUser(req.query.id);
    res.status(200).json(user);
  }
}
```

Next.js combines frontend and backend in one seamless framework, dramatically improving developer experience.
