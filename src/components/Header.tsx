'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Caveat } from 'next/font/google'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const navScript = Caveat({ subsets: ['latin'], weight: '700' })

const HeaderElement = styled('header')({
  width: '100%',
  position: 'relative',
  backgroundColor: 'transparent',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
})

const Nav = styled('nav')({
  width: '100%',
  padding: '1rem 1.5rem', // px-6 py-4
})

const NavWrapper = styled(Box)({
  maxWidth: '80rem', // max-w-5xl
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
})

const BrandLink = styled(Link)({
  fontSize: '1.5rem', // text-2xl
  fontWeight: '600',
  color: '#1e3a8a',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  letterSpacing: '-0.5px',
  '&:hover': {
    color: '#2563eb',
  },
})

const IconLink = styled(Link)({
  color: '#1e3a8a',
  textDecoration: 'none',
  marginLeft: '0.75rem', // gap-3
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#2563eb',
  },
})

const IconAnchor = styled('a')({
  color: '#1e3a8a',
  textDecoration: 'none',
  marginLeft: '0.75rem', // gap-3
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#2563eb',
  },
})

const NavList = styled('ul')({
  marginLeft: 'auto',
  marginTop: 0,
  marginBottom: 0,
  marginRight: 0,
  display: 'flex',
  gap: '2rem', // gap-8
  alignItems: 'center',
  fontSize: '0.95rem', // smaller, more professional size
  fontWeight: '500',
  listStyle: 'none',
  padding: 0,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  letterSpacing: '0.3px',
})

const NavLink = styled(Link)({
  fontWeight: '500',
  color: '#1e3a8a',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  fontSize: '0.95rem',
  letterSpacing: '0.3px',
  '&:hover': {
    color: '#2563eb',
  },
})

export default function Header() {
  const pathname = usePathname()

  const brand = { name: 'M. Mert ÇİL', href: '/' }
  const navLinks = [
    { name: 'posts', href: '/posts' },
    { name: 'resume', href: '/resume' },
    { name: 'work', href: '/work' },
    { name: 'documents', href: '/documents' },
    { name: 'contact', href: '/contact' },
  ]

  return (
    <HeaderElement>
      <Nav>
        <NavWrapper>
          <BrandLink href={brand.href} style={{ ...navScript.style }}>
            {brand.name}
          </BrandLink>
          <IconAnchor href="#" aria-label="LinkedIn" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1.5rem', width: '1.5rem' }}>
              <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9V24H.5V8.5zM8.5 8.5h4.7v2.1h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24h-4.9v-6.8c0-1.6 0-3.7-2.2-3.7-2.2 0-2.5 1.7-2.5 3.6V24H8.5V8.5z"/>
            </svg>
          </IconAnchor>
          <IconLink href="/contact" aria-label="Contact" title="Contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1.5rem', width: '1.5rem' }}>
              <path d="M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm16 12V8.24l-7.4 5.14a2 2 0 0 1-2.2 0L3 8.24V18h17z"/>
            </svg>
          </IconLink>
          <NavList style={{ ...navScript.style }}>
            {navLinks.map(item => (
              <li key={item.href}>
                <NavLink href={item.href}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </NavList>
        </NavWrapper>
      </Nav>
    </HeaderElement>
  )
}
