'use client'

import { styled } from '@mui/material/styles'

const Container = styled('div')({
  textAlign: 'center',
  padding: '3rem 1.5rem',
})

const Title = styled('h1')({
  fontSize: '2.5rem',
  fontWeight: '600',
  color: '#1e3a8a',
  marginBottom: '1rem',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  letterSpacing: '-1px',
})

const Message = styled('p')({
  fontSize: '1.1rem',
  fontWeight: '400',
  color: '#1e3a8a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  lineHeight: '1.6',
  letterSpacing: '0.2px',
})

export default function Contact() {
  return (
    <Container>
      <Title>Contact</Title>
      <Message>🚧 This page is under construction.</Message>
      <Message>Get in touch soon! Contact form and details coming soon!</Message>
    </Container>
  )
}
