'use client'

import Link from 'next/link'
import { styled } from '@mui/material/styles'

const PageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '2.5rem 0 4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.75rem',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
}))

const PostPanel = styled('article')(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(255,255,255,0.06)'
    : theme.palette.background.paper,
  borderRadius: '18px',
  border: `1px solid ${theme.palette.divider}`,
  padding: '2.5rem 3rem',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 20px 44px rgba(0, 0, 0, 0.3)'
    : '0 20px 44px rgba(30, 58, 138, 0.12)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
}))

const PostHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  paddingBottom: '1.75rem',
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const PostTitle = styled('h1')(({ theme }) => ({
  fontSize: '2.35rem',
  fontWeight: 700,
  letterSpacing: '-1px',
  margin: 0,
  color: theme.palette.text.primary,
}))

const MetaRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.25rem',
  fontSize: '0.9rem',
  color: theme.palette.text.secondary,
}))

const TagsList = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.6rem',
  listStyle: 'none',
  padding: 0,
  margin: 0,
})

const TagItem = styled('li')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '0.35rem 0.7rem',
  borderRadius: '999px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(33, 150, 243, 0.15)'
    : '#e0f2fe',
  color: theme.palette.mode === 'dark'
    ? theme.palette.primary.light
    : theme.palette.primary.dark,
}))

const MarkdownContent = styled('div')(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.8,
  color: theme.palette.text.primary,

  '& h2': {
    fontSize: '1.8rem',
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  '& h3': {
    fontSize: '1.4rem',
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
  },
  '& p': {
    marginBottom: '1rem',
    lineHeight: 1.8,
    color: theme.palette.text.primary,
  },
  '& ul, & ol': {
    marginBottom: '1rem',
    paddingLeft: '1.5rem',
    color: theme.palette.text.primary,
  },
  '& li': {
    marginBottom: '0.5rem',
    lineHeight: 1.8,
  },
  '& code': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.1)'
      : 'rgba(0,0,0,0.06)',
    padding: '0.2rem 0.45rem',
    borderRadius: '4px',
    fontFamily: "'Courier New', monospace",
    fontSize: '0.9em',
    color: theme.palette.mode === 'dark' ? '#f687b3' : '#d63384',
  },
  '& pre': {
    background: theme.palette.mode === 'dark' ? '#0f172a' : '#f8fafc',
    color: theme.palette.mode === 'dark' ? '#e2e8f0' : '#1e293b',
    padding: '1.25rem',
    borderRadius: '12px',
    overflow: 'auto',
    marginBottom: '1.75rem',
    fontFamily: "'Courier New', monospace",
    fontSize: '0.9rem',
    lineHeight: 1.6,
    border: theme.palette.mode === 'dark' ? 'none' : `1px solid ${theme.palette.divider}`,
  },
  '& pre code': {
    background: 'transparent',
    padding: 0,
    color: 'inherit',
  },
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: '1rem',
    marginLeft: 0,
    marginBottom: '1rem',
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.mode === 'dark' ? '#ffffff' : theme.palette.primary.dark,
    },
  },
  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1.75rem',
    fontSize: '0.9rem',
  },
  '& th, & td': {
    padding: '0.75rem',
    textAlign: 'left',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '& th': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.06)'
      : 'rgba(0,0,0,0.03)',
    fontWeight: 600,
  },
  '& tr:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.06)'
      : 'rgba(0,0,0,0.02)',
  },
}))

const BackLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '0.95rem',
  fontWeight: 500,
  color: theme.palette.primary.main,
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.mode === 'dark' ? '#ffffff' : theme.palette.primary.dark,
  },
}))

const FooterNav = styled('div')(({ theme }) => ({
  marginTop: '1rem',
  paddingTop: '1.5rem',
  borderTop: `1px solid ${theme.palette.divider}`,
}))

interface PostContentProps {
  title: string
  date: string
  author?: string
  category?: string
  tags?: string[]
  htmlContent: string
}

export default function PostContent({
  title,
  date,
  author,
  category,
  tags,
  htmlContent,
}: PostContentProps) {
  return (
    <PageContainer>
      <BackLink href="/posts">
        ← Back to posts
      </BackLink>

      <PostPanel>
        <PostHeader>
          <PostTitle>{title}</PostTitle>
          <MetaRow>
            <span>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {author ? <span>By {author}</span> : null}
            {category ? <span>{category}</span> : null}
          </MetaRow>
          {tags?.length ? (
            <TagsList>
              {tags.map((tag) => (
                <TagItem key={tag}>#{tag}</TagItem>
              ))}
            </TagsList>
          ) : null}
        </PostHeader>

        <MarkdownContent
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <FooterNav>
          <BackLink href="/posts">
            ← Back to all posts
          </BackLink>
        </FooterNav>
      </PostPanel>
    </PageContainer>
  )
}
