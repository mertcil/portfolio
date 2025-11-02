'use client'

import { styled } from '@mui/material/styles'
import Link from 'next/link'

type PostMeta = {
  title: string
  excerpt: string
  slug: string
  date: string
  category?: string
  tags?: string[]
}

type PostsLayoutProps = {
  posts: PostMeta[]
}

const PageContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  minHeight: '60vh',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  color: '#1e3a8a',
})

const PostsList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

const PostCard = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: '1.75rem',
  background: '#f8fafc',
  borderRadius: '16px',
  border: '1px solid #e5e7eb',
  textDecoration: 'none',
  color: '#1e3a8a',
  transition: 'all 0.3s ease',

  '&:hover': {
    borderColor: '#1e3a8a',
    background: '#ffffff',
    boxShadow: '0 14px 36px rgba(30, 58, 138, 0.18)',
    transform: 'translateY(-4px)',
  },
})

const PostMetaRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  flexWrap: 'wrap',
  fontSize: '0.85rem',
  color: '#475569',
})

const CategoryBadge = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.3rem 0.8rem',
  borderRadius: '999px',
  background: '#1e3a8a',
  color: '#ffffff',
  fontSize: '0.75rem',
  fontWeight: 600,
})

const PostTitle = styled('h3')({
  fontSize: '1.35rem',
  fontWeight: 700,
  margin: 0,
  color: '#1e3a8a',
})

const PostExcerpt = styled('p')({
  fontSize: '0.95rem',
  margin: 0,
  lineHeight: 1.7,
  color: '#334155',
})

const TagList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

const TagBadge = styled('span')({
  fontSize: '0.75rem',
  padding: '0.3rem 0.65rem',
  borderRadius: '999px',
  background: '#e0f2fe',
  color: '#1e3a8a',
  fontWeight: 600,
})

const EmptyState = styled('div')({
  padding: '3rem 2rem',
  textAlign: 'center',
  borderRadius: '16px',
  border: '1px dashed #cbd5f5',
  background: '#f8fafc',
  color: '#475569',
  fontSize: '1rem',
})

export default function PostsLayout({ posts }: PostsLayoutProps) {
  const formattedDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  if (posts.length === 0) {
    return (
      <PageContainer>
        <EmptyState>
          Nothing to read just yet. I’m steadily polishing drafts and will share them here when they feel ready.
        </EmptyState>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PostsList>
        {posts.map((post) => (
          <PostCard key={post.slug} href={`/posts/${post.slug}`}>
            <PostMetaRow>
              <span>{formattedDate(post.date)}</span>
              {post.category ? <CategoryBadge>{post.category}</CategoryBadge> : null}
            </PostMetaRow>
            <PostTitle>{post.title}</PostTitle>
            <PostExcerpt>{post.excerpt}</PostExcerpt>

            {(post.tags ?? []).length > 0 ? (
              <TagList>
                {(post.tags ?? []).slice(0, 4).map((tag) => (
                  <TagBadge key={tag}>#{tag}</TagBadge>
                ))}
              </TagList>
            ) : null}
          </PostCard>
        ))}
      </PostsList>
    </PageContainer>
  )
}
