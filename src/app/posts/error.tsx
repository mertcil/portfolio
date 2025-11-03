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

const HomeLink = styled(Link)({
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

export default function PostsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Posts page error:', error)
  }, [error])

  return (
    <ErrorContainer>
      <ErrorTitle>Error Loading Posts</ErrorTitle>
      <ErrorMessage>
        We encountered an issue while loading the blog posts.
        This could be a temporary problem. Please try again or return to the home page.
      </ErrorMessage>
      <ButtonGroup>
        <ErrorButton onClick={reset}>
          Try again
        </ErrorButton>
        <HomeLink href="/">
          Go to Home
        </HomeLink>
      </ButtonGroup>
    </ErrorContainer>
  )
}
