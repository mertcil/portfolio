'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

const ErrorContainer = styled('div')({
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  textAlign: 'center',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
})

const ErrorIcon = styled('div')({
  fontSize: '4rem',
  marginBottom: '1.5rem',
})

const ErrorTitle = styled('h1')({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#1e3a8a',
  marginBottom: '1rem',
})

const ErrorMessage = styled('p')({
  fontSize: '1.125rem',
  color: '#475569',
  marginBottom: '2rem',
  maxWidth: '600px',
  lineHeight: 1.6,
})

const ButtonGroup = styled('div')({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

const ErrorButton = styled('button')({
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  fontWeight: 600,
  color: '#ffffff',
  background: '#2563eb',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: '#1e3a8a',
  },
})

const PostsLink = styled(Link)({
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  fontWeight: 600,
  color: '#2563eb',
  background: '#ffffff',
  border: '2px solid #2563eb',
  borderRadius: '8px',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '#2563eb',
    color: '#ffffff',
  },
})

export default function PostError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Post detail error:', error)
  }, [error])

  return (
    <ErrorContainer>
      <ErrorIcon>📄</ErrorIcon>
      <ErrorTitle>Error Loading Post</ErrorTitle>
      <ErrorMessage>
        We encountered an issue while loading this blog post.
        The post might be corrupted or temporarily unavailable.
        Please try again or browse other posts.
      </ErrorMessage>
      <ButtonGroup>
        <ErrorButton onClick={reset}>
          Try again
        </ErrorButton>
        <PostsLink href="/posts">
          View All Posts
        </PostsLink>
      </ButtonGroup>
    </ErrorContainer>
  )
}
