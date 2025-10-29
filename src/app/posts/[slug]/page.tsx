import Link from 'next/link'
import { getPostBySlug, getSlugs, renderMarkdownToHtml } from '@/lib/posts'
import { notFound } from 'next/navigation'

const containerStyles: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '3rem 1.5rem',
}

const backLinkStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  color: '#2563eb',
  textDecoration: 'none',
  marginBottom: '2rem',
  fontSize: '0.95rem',
  fontWeight: '500',
  transition: 'color 0.3s ease',
}

const headerStyles: React.CSSProperties = {
  marginBottom: '2rem',
  borderBottom: '1px solid #e0e0e0',
  paddingBottom: '2rem',
}

const titleStyles: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: '600',
  color: '#1e3a8a',
  margin: '0 0 1rem 0',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  letterSpacing: '-1px',
}

const metaStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  fontSize: '0.9rem',
  color: '#666666',
  flexWrap: 'wrap',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
}

const tagsListStyles: React.CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  marginTop: '1rem',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  margin: '1rem 0 0 0',
}

const tagStyles: React.CSSProperties = {
  fontSize: '0.75rem',
  padding: '0.25rem 0.5rem',
  background: '#f0f0f0',
  color: '#1e3a8a',
  borderRadius: '3px',
}

const contentStyles: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.8',
  color: '#1e3a8a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
}

const contentClass = `
  .markdown-content h2 { font-size: 1.8rem; font-weight: 600; color: #1e3a8a; margin-top: 2rem; margin-bottom: 1rem; }
  .markdown-content h3 { font-size: 1.4rem; font-weight: 600; color: #1e3a8a; margin-top: 1.5rem; margin-bottom: 0.75rem; }
  .markdown-content p { margin-bottom: 1rem; line-height: 1.8; }
  .markdown-content ul, .markdown-content ol { margin-bottom: 1rem; padding-left: 1.5rem; }
  .markdown-content li { margin-bottom: 0.5rem; line-height: 1.8; }
  .markdown-content code { background: #f5f5f5; padding: 0.2rem 0.4rem; border-radius: 3px; font-family: 'Courier New', monospace; font-size: 0.9em; color: #d63384; }
  .markdown-content pre { background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 6px; overflow: auto; margin-bottom: 1.5rem; font-family: 'Courier New', monospace; font-size: 0.85rem; line-height: 1.6; }
  .markdown-content pre code { background: transparent; padding: 0; color: #d4d4d4; }
  .markdown-content blockquote { border-left: 4px solid #2563eb; padding-left: 1rem; margin-left: 0; margin-bottom: 1rem; color: #666666; font-style: italic; }
  .markdown-content a { color: #2563eb; text-decoration: underline; }
  .markdown-content a:hover { color: #1e3a8a; }
  .markdown-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.9rem; }
  .markdown-content th, .markdown-content td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #e0e0e0; }
  .markdown-content th { background: #f5f5f5; font-weight: 600; }
  .markdown-content tr:hover { background: #f9f9f9; }
`

export async function generateStaticParams() {
  return getSlugs().map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const htmlContent = await renderMarkdownToHtml(post.content, slug)

  return (
    <>
      <style>{contentClass}</style>
      <div style={containerStyles}>
        <Link href="/posts" style={backLinkStyles}>
          ← Back to posts
        </Link>

        <div style={headerStyles}>
          <h1 style={titleStyles}>{post.title}</h1>
          <div style={metaStyles}>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>By {post.author}</span>
            <span>{post.category}</span>
          </div>
          {post.tags.length > 0 && (
            <ul style={tagsListStyles}>
              {post.tags.map(tag => (
                <li key={tag} style={tagStyles}>#{tag}</li>
              ))}
            </ul>
          )}
        </div>

        <div
          className="markdown-content"
          style={contentStyles}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0' }}>
          <Link href="/posts" style={backLinkStyles}>
            ← Back to all posts
          </Link>
        </div>
      </div>
    </>
  )
}
