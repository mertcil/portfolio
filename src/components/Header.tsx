'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from '@mui/material/styles'

const Nav = styled('nav')({
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: 50,
  background: 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,64,175,0.88) 100%)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  padding: '1.05rem 2rem',
  boxShadow: '0 25px 65px rgba(15, 23, 42, 0.45)',
  backdropFilter: 'blur(16px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.75rem',
  borderRadius: '16px',
  border: '1px solid rgba(148, 163, 184, 0.28)',
  margin: 0,
  boxSizing: 'border-box',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 32px 80px rgba(15, 23, 42, 0.5)',
  },
})

const BrandLink = styled(Link)({
  fontSize: '1.3rem',
  fontWeight: 700,
  color: '#e0f2fe',
  textDecoration: 'none',
  letterSpacing: '-0.6px',
  transition: 'color 0.25s ease',

  '&:hover': {
    color: '#94a3ff',
  },
})

const NavList = styled('ul')({
  marginLeft: 'auto',
  marginTop: 0,
  marginBottom: 0,
  marginRight: 0,
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
})

const NavItem = styled('li')({
  margin: 0,
})

const NavLinkButton = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ isActive }) => ({
  display: 'inline-block',
  padding: '0.6rem 1.2rem',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: isActive ? '#0f172a' : '#e2e8f0',
  background: isActive
    ? 'linear-gradient(135deg, #93c5fd 0%, #e0f2fe 100%)'
    : 'rgba(148, 163, 184, 0.18)',
  border: isActive ? '1px solid rgba(148, 163, 184, 0.35)' : '1px solid rgba(148, 163, 184, 0.15)',
  borderRadius: '999px',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  letterSpacing: '0.5px',
  cursor: 'pointer',

  '&:hover': {
    background: 'linear-gradient(135deg, #93c5fd 0%, #e0f2fe 100%)',
    color: '#0f172a',
    transform: 'translateY(-1px) scale(1.02)',
    boxShadow: '0 6px 18px rgba(148, 163, 184, 0.35)',
  },
}))

const IconGroup = styled('div')({
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
})

const IconButton = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  background: 'rgba(148, 163, 184, 0.18)',
  border: '1px solid rgba(148, 163, 184, 0.25)',
  color: '#e2e8f0',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '&:hover': {
    background: 'linear-gradient(135deg, #93c5fd 0%, #e0f2fe 100%)',
    color: '#0f172a',
    transform: 'translateY(-1px) scale(1.05)',
    boxShadow: '0 6px 18px rgba(148, 163, 184, 0.35)',
  },

  '& svg': {
    width: '20px',
    height: '20px',
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
    <Nav>
      <BrandLink href={brand.href}>
        {brand.name}
      </BrandLink>

      <IconGroup>
        <IconButton href="https://www.linkedin.com/in/mertcil/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9V24H.5V8.5zM8.5 8.5h4.7v2.1h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24h-4.9v-6.8c0-1.6 0-3.7-2.2-3.7-2.2 0-2.5 1.7-2.5 3.6V24H8.5V8.5z"/>
          </svg>
        </IconButton>

        <IconButton href="https://github.com/mertcil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.652.24 2.873.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </IconButton>
      </IconGroup>

      <NavList>
        {navLinks.map(item => (
          <NavItem key={item.href}>
            <NavLinkButton href={item.href} isActive={pathname === item.href}>
              {item.name}
            </NavLinkButton>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  )
}
