'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from '@mui/material/styles'

const Nav = styled('nav')(({ theme }) => ({
  width: '100%',
  borderRadius: '20px',
  position: 'sticky',
  top: 0,
  zIndex: 50,
  background: theme.palette.mode === 'dark'
    ? theme.palette.background.paper // dark mode
    : theme.palette.grey[100], // light gray in light mode
  fontFamily: theme.typography.fontFamily,
  padding: '1.5rem 3rem',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px rgba(0, 0, 0, 0.4)'
    : '0 10px 30px rgba(30, 58, 138, 0.28)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.75rem',
  margin: 0,
  boxSizing: 'border-box',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.3s ease',

  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 16px 36px rgba(0, 0, 0, 0.5)'
      : '0 16px 36px rgba(30, 58, 138, 0.3)',
  },
}))

const BrandLink = styled(Link)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 700,
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.primary,
  textDecoration: 'none',
  letterSpacing: '-0.6px',
  transition: 'color 0.25s ease',

  '&:hover': {
    color: theme.palette.primary.light,
  },
}))

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
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  display: 'inline-block',
  padding: '0.5rem 1.1rem',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: isActive
    ? theme.palette.primary.contrastText
    : theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary,
  background: isActive
    ? theme.palette.primary.light
    : theme.palette.mode === 'dark'
    ? 'rgba(148, 163, 184, 0.15)'
    : 'rgba(226, 232, 240, 0.18)',
  border: isActive
    ? `1px solid ${theme.palette.primary.light}`
    : theme.palette.mode === 'dark'
    ? '1px solid rgba(148, 163, 184, 0.3)'
    : '1px solid rgba(226, 232, 240, 0.2)',
  borderRadius: '999px',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  fontFamily: theme.typography.fontFamily,
  letterSpacing: '0.5px',
  cursor: 'pointer',

  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? theme.palette.primary.main // Light blue accent in dark mode
      : theme.palette.primary.light,
    color: theme.palette.mode === 'dark'
      ? '#0f172a' // Dark text on light blue background
      : theme.palette.primary.contrastText,
    transform: 'translateY(-1px) scale(1.02)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 6px 18px rgba(96, 165, 250, 0.3)'
      : '0 6px 18px rgba(30, 58, 138, 0.2)',
  },
}))

const IconGroup = styled('div')({
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
})

const IconButton = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(148, 163, 184, 0.15)'
    : 'rgba(226, 232, 240, 0.18)',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(148, 163, 184, 0.3)' : 'rgba(191, 219, 254, 0.35)'}`,
  color: theme.palette.primary.light,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '&:hover': {
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    transform: 'translateY(-1px) scale(1.05)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 6px 18px rgba(96, 165, 250, 0.3)'
      : '0 6px 18px rgba(30, 58, 138, 0.22)',
  },

  '& svg': {
    width: '20px',
    height: '20px',
  },
}))

export default function Header() {
  const pathname = usePathname()

  const brand = { name: 'Mevlut Mert CIL', href: '/' }
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

        <IconButton href="https://github.com/mmcil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
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
