'use client'

import { styled } from '@mui/material/styles'

const Container = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: '3rem 1.5rem',
}))

const Title = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: '600',
  color: theme.palette.text.primary,
  marginBottom: '1rem',
  fontFamily: theme.typography.fontFamily,
  letterSpacing: '-1px',
}))

const Message = styled('p')(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: '400',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  lineHeight: '1.6',
  letterSpacing: '0.2px',
}))

export default function Documents() {
  return (
    <Container>
      <Title>Documents</Title>
      <Message>This page is under construction.</Message>
      <Message>Important documents and resources will be available here!</Message>
    </Container>
  )
}
