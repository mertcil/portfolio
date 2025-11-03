'use client'

import { useEffect } from 'react'
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
  fontSize: '3rem',
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

const ErrorDetails = styled('details')({
  marginTop: '2rem',
  padding: '1rem',
  background: '#f8fafc',
  borderRadius: '8px',
  maxWidth: '600px',
  textAlign: 'left',
  fontSize: '0.875rem',
  color: '#64748b',
})

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <ErrorContainer>
      <ErrorTitle>Something went wrong!</ErrorTitle>
      <ErrorMessage>
        We apologize for the inconvenience. An unexpected error has occurred.
        Please try again or contact support if the problem persists.
      </ErrorMessage>
      <ErrorButton onClick={reset}>
        Try again
      </ErrorButton>
      {process.env.NODE_ENV === 'development' && (
        <ErrorDetails>
          <summary>Error details (development only)</summary>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {error.message}
            {error.digest && `\nDigest: ${error.digest}`}
          </pre>
        </ErrorDetails>
      )}
    </ErrorContainer>
  )
}
