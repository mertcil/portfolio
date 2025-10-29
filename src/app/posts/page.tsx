import Link from 'next/link'
import { getAllPostsMetadata } from '@/lib/posts'

const containerStyles = {
  padding: '3rem 1.5rem',
  maxWidth: '900px',
  margin: '0 auto',
}

const titleStyles = {
  fontSize: '2.5rem',
  fontWeight: '600',
  color: '#1e3a8a',
  marginBottom: '1.5rem',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  letterSpacing: '-1px',
  margin: 0,
}

const descriptionStyles = {
  fontSize: '1.1rem',
  fontWeight: '400',
  color: '#1e3a8a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  lineHeight: '1.6',
  letterSpacing: '0.2px',
  marginBottom: '2rem',
}

const postsListStyles = {
  display: 'grid',
  gap: '1.5rem',
  listStyle: 'none',
  padding: 0,
  margin: 0,
}

const postCardStyles = {
  display: 'block',
  padding: '1.5rem',
  background: '#ffffff',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  color: 'inherit',
}

const postTitleStyles = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#1e3a8a',
  margin: '0 0 0.5rem 0',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
}

const postMetaStyles = {
  fontSize: '0.85rem',
  color: '#666666',
  marginBottom: '0.75rem',
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
}

const postExcerptStyles = {
  fontSize: '0.95rem',
  color: '#1e3a8a',
  lineHeight: '1.6',
  margin: 0,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
}

const categoryBadgeStyles = {
  display: 'inline-block',
  padding: '0.25rem 0.75rem',
  background: '#2563eb',
  color: '#ffffff',
  borderRadius: '20px',
  fontSize: '0.75rem',
  fontWeight: '500',
  marginLeft: 'auto',
}

const tagsListStyles = {
  display: 'flex',
  gap: '0.5rem',
  marginTop: '0.75rem',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  margin: '0.75rem 0 0 0',
}

const tagStyles = {
  fontSize: '0.75rem',
  padding: '0.25rem 0.5rem',
  background: '#f0f0f0',
  color: '#1e3a8a',
  borderRadius: '3px',
}

export default function PostsPage() {
  const posts = getAllPostsMetadata()

  return (
    <div style={containerStyles as any}>
      <h1 style={titleStyles as any}>Blog Posts</h1>
      <p style={descriptionStyles as any}>
        Exploring software engineering trends, best practices, and lessons learned from building systems at scale.
        {posts.length} articles spanning 2015 to 2025.
      </p>

      <div style={postsListStyles as any}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} style={postCardStyles as any}>
            <div style={postMetaStyles as any}>
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span style={categoryBadgeStyles as any}>{post.category}</span>
            </div>
            <h2 style={postTitleStyles as any}>{post.title}</h2>
            <p style={postExcerptStyles as any}>{post.excerpt}</p>
            {post.tags.length > 0 && (
              <ul style={tagsListStyles as any}>
                {post.tags.slice(0, 3).map((tag) => (
                  <li key={tag} style={tagStyles as any}>#{tag}</li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
