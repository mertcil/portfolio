'use client'

import { styled } from '@mui/material/styles'

const FooterElement = styled('footer')({
  backgroundColor: 'transparent',
  padding: '1rem 0', // py-4
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
})

const FooterInner = styled('div')({
  container: 'auto',
  margin: '0 auto',
  padding: '0 1.5rem', // px-6
  textAlign: 'center',
})

const FooterText = styled('p')({
  color: '#ffffff',
  margin: 0,
})

export default function Footer() {
  return (
    <FooterElement>
      <FooterInner>
        <FooterText>© 2025 Mevlüt Mert ÇİL. All rights reserved.</FooterText>
      </FooterInner>
    </FooterElement>
  )
}
