"use client"

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

const PageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  minHeight: '60vh',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
}))

const PostsList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

const PostCard = styled(Link)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: '1.75rem',
  background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  borderRadius: '16px',
  border: `1px solid ${theme.palette.divider}`,
  textDecoration: 'none',
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : '#0f172a',
  transition: 'all 0.3s ease',

  '&:hover': {
    borderColor: theme.palette.primary.dark,
    background: theme.palette.background.paper,
    boxShadow: theme.palette.mode === 'dark'
      ? '0 14px 36px rgba(0, 0, 0, 0.4)'
      : '0 14px 36px rgba(30, 58, 138, 0.18)',
    transform: 'translateY(-4px)',
  },
}))

const PostMetaRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  flexWrap: 'wrap',
  fontSize: '0.85rem',
  color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#475569',
}))

const CategoryBadge = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.3rem 0.8rem',
  borderRadius: '999px',
  background: theme.palette.primary.dark,
  color: theme.palette.background.paper,
  fontSize: '0.75rem',
  fontWeight: 600,
}))

const PostTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.35rem',
  fontWeight: 700,
  margin: 0,
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : '#0f172a',
}))

const PostExcerpt = styled('p')(({ theme }) => ({
  fontSize: '0.95rem',
  margin: 0,
  lineHeight: 1.7,
  color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#334155',
}))

const TagList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

const TagBadge = styled('span')(({ theme }) => ({
  fontSize: '0.75rem',
  padding: '0.3rem 0.65rem',
  borderRadius: '999px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(33, 150, 243, 0.15)'
    : '#e0f2fe',
  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  fontWeight: 600,
}))

const EmptyState = styled('div')(({ theme }) => ({
  padding: '3rem 2rem',
  textAlign: 'center',
  borderRadius: '16px',
  border: `1px dashed ${theme.palette.divider}`,
  background: theme.palette.background.default,
  color: theme.palette.text.secondary,
  fontSize: '1rem',
}))

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
          Nothing to read just yet. I'm steadily polishing drafts and will share them here when they feel ready.
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
