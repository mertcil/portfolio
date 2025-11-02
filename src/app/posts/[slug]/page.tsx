import Link from 'next/link'
import type { CSSProperties } from 'react'
import { getPostBySlug, getSlugs, renderMarkdownToHtml } from '@/lib/posts'
import { notFound } from 'next/navigation'

const pageContainerStyles: CSSProperties = {
  width: '100%',
  padding: '2.5rem 0 4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.75rem',
  color: '#1e3a8a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
}

const postPanelStyles: CSSProperties = {
  background: '#ffffff',
  borderRadius: '18px',
  border: '2px solid #e5e7eb',
  padding: '2.5rem 3rem',
  boxShadow: '0 20px 44px rgba(15, 23, 42, 0.12)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
}

const postHeaderStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  paddingBottom: '1.75rem',
  borderBottom: '1px solid #e2e8f0',
}

const postTitleStyles: CSSProperties = {
  fontSize: '2.35rem',
  fontWeight: 700,
  letterSpacing: '-1px',
  margin: 0,
}

const metaRowStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.25rem',
  fontSize: '0.9rem',
  color: '#475569',
}

const tagsListStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.6rem',
  listStyle: 'none',
  padding: 0,
  margin: 0,
}

const tagItemStyles: CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '0.35rem 0.7rem',
  borderRadius: '999px',
  background: '#e0f2fe',
  color: '#1e3a8a',
}

const markdownContentStyles: CSSProperties = {
  fontSize: '1rem',
  lineHeight: 1.8,
  color: '#334155',
}

const globalStyles = `
  .back-link {
    display: inline-flex;
    align-items: center;
    font-size: 0.95rem;
    font-weight: 500;
    color: #2563eb;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .back-link:hover {
    color: #1e3a8a;
  }

  .markdown-content h2 { font-size: 1.8rem; font-weight: 600; color: #1e3a8a; margin-top: 2rem; margin-bottom: 1rem; }
  .markdown-content h3 { font-size: 1.4rem; font-weight: 600; color: #1e3a8a; margin-top: 1.5rem; margin-bottom: 0.75rem; }
  .markdown-content p { margin-bottom: 1rem; line-height: 1.8; }
  .markdown-content ul, .markdown-content ol { margin-bottom: 1rem; padding-left: 1.5rem; }
  .markdown-content li { margin-bottom: 0.5rem; line-height: 1.8; }
  .markdown-content code { background: #f1f5f9; padding: 0.2rem 0.45rem; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 0.9em; color: #d63384; }
  .markdown-content pre { background: #0f172a; color: #e2e8f0; padding: 1.25rem; border-radius: 12px; overflow-x: auto; margin-bottom: 1.75rem; font-family: 'Courier New', monospace; font-size: 0.9rem; line-height: 1.6; }
  .markdown-content pre code { background: transparent; padding: 0; color: inherit; }
  .markdown-content blockquote { border-left: 4px solid #2563eb; padding-left: 1rem; margin-left: 0; margin-bottom: 1rem; color: #475569; font-style: italic; }
  .markdown-content a { color: #2563eb; text-decoration: underline; }
  .markdown-content a:hover { color: #1e3a8a; }
  .markdown-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.75rem; font-size: 0.9rem; }
  .markdown-content th, .markdown-content td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #e2e8f0; }
  .markdown-content th { background: #f8fafc; font-weight: 600; }
  .markdown-content tr:hover { background: #f1f5f9; }
`

const footerNavStyles: CSSProperties = {
  marginTop: '1rem',
  paddingTop: '1.5rem',
  borderTop: '1px solid #e2e8f0',
}

export async function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }))
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const htmlContent = await renderMarkdownToHtml(post.content, slug)

  return (
    <>
      <style>{globalStyles}</style>
      <div style={pageContainerStyles}>
        <Link href="/posts" className="back-link">
          ← Back to posts
        </Link>

        <article style={postPanelStyles}>
          <header style={postHeaderStyles}>
            <h1 style={postTitleStyles}>{post.title}</h1>
            <div style={metaRowStyles}>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {post.author ? <span>By {post.author}</span> : null}
              {post.category ? <span>{post.category}</span> : null}
            </div>
            {post.tags?.length ? (
              <ul style={tagsListStyles}>
                {post.tags.map((tag) => (
                  <li key={tag} style={tagItemStyles}>#{tag}</li>
                ))}
              </ul>
            ) : null}
          </header>

          <div
            className="markdown-content"
            style={markdownContentStyles}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <div style={footerNavStyles}>
            <Link href="/posts" className="back-link">
              ← Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}
