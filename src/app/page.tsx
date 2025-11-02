'use client'

import { styled } from '@mui/material/styles'

const Wrapper = styled('div')({
  maxWidth: '48rem', // max-w-3xl
  margin: '0 auto',
  padding: '5rem 1.5rem', // px-6 py-20
  display: 'flex',
  justifyContent: 'center',
})

const Section = styled('section')({
  maxWidth: '48rem', // max-w-3xl
  textAlign: 'center',
  margin: '0 auto',
})

const Title = styled('h1')({
  fontSize: '2.5rem', // slightly smaller, more professional
  fontWeight: '600',
  marginBottom: '1.5rem', // mb-6
  color: '#1e3a8a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  letterSpacing: '-1px',
})

const Subtitle = styled('p')({
  fontSize: '1.1rem', // smaller, more professional
  fontWeight: '400',
  color: '#1e3a8a',
  marginBottom: '2rem', // mb-8
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  lineHeight: '1.6',
  letterSpacing: '0.2px',
})

export default function Home() {
  return (
    <Wrapper>
      <Section>
        <Title>
          Hi, I'm <span>Mevlüt Mert ÇİL</span>
        </Title>
        <Subtitle>
          Full Stack Software Developer passionate about building scalable enterprise applications.
        </Subtitle>
      </Section>
    </Wrapper>
  )
}
