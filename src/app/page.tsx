"use client"

import { styled } from '@mui/material/styles'

const Wrapper = styled('div')(({ theme }) => ({
  maxWidth: '48rem',
  margin: '0 auto',
  padding: '5rem 1.5rem',
  display: 'flex',
  justifyContent: 'center',
}))

const Section = styled('section')(({ theme }) => ({
  maxWidth: '48rem',
  textAlign: 'center',
  margin: '0 auto',
}))

const Title = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: '1.5rem',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  letterSpacing: '-1px',
}))

const Subtitle = styled('p')(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  marginBottom: '2rem',
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.6,
  letterSpacing: '0.2px',
}))

export default function Home() {
  return (
    <Wrapper>
      <Section>
        <Title>
          Hi, I'm <span>Mevlut Mert CIL</span>
        </Title>
        <Subtitle>
          Full Stack Software Developer passionate about building scalable enterprise applications.
        </Subtitle>
      </Section>
    </Wrapper>
  )
}
