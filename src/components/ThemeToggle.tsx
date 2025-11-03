'use client'

import { styled } from '@mui/material/styles'
import { useTheme as useCustomTheme } from '@/contexts/ThemeContext'

const ThemeToggleButton = styled('button')(({ theme }) => ({
  position: 'fixed',
  top: '1.5rem',
  right: '2rem',
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(30, 41, 59, 0.8)' // Darker background in dark mode
    : 'rgba(255, 255, 255, 0.9)', // Lighter background in light mode
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(71, 85, 105, 0.5)'
    : '1px solid rgba(226, 232, 240, 0.8)',
  color: theme.palette.mode === 'dark'
    ? theme.palette.primary.light
    : theme.palette.primary.dark,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 12px rgba(0, 0, 0, 0.4)'
    : '0 4px 12px rgba(0, 0, 0, 0.1)',

  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? theme.palette.primary.main
      : theme.palette.primary.light,
    color: theme.palette.mode === 'dark'
      ? '#0f172a'
      : theme.palette.primary.contrastText,
    transform: 'translateY(-2px) scale(1.05)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 20px rgba(96, 165, 250, 0.4)'
      : '0 8px 20px rgba(30, 58, 138, 0.3)',
  },

  '& svg': {
    width: '22px',
    height: '22px',
  },
}))

export default function ThemeToggle() {
  const { mode, toggleTheme } = useCustomTheme()

  return (
    <ThemeToggleButton
      onClick={toggleTheme}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      {mode === 'light' ? (
        // Moon icon for dark mode
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
        </svg>
      ) : (
        // Sun icon for light mode
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0-6a1,1,0,0,0-1,1V4a1,1,0,0,0,2,0V3A1,1,0,0,0,12,2ZM4,12a1,1,0,0,0-1-1H2a1,1,0,0,0,0,2H3A1,1,0,0,0,4,12Zm18-1H21a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM6.22,5.22a1,1,0,0,0-1.42,0l-.7.7a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.7-.7A1,1,0,0,0,6.22,5.22Zm12.56,12.56a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.42l.7.7a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM6.22,18.78a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0l-.7.7a1,1,0,0,0,1.42,1.42Zm12.56-12.56a1,1,0,0,0,0-1.42l-.7-.7a1,1,0,1,0-1.42,1.42l.7.7A1,1,0,0,0,18.78,6.22ZM12,22a1,1,0,0,0,1-1V20a1,1,0,0,0-2,0v1A1,1,0,0,0,12,22Z"/>
        </svg>
      )}
    </ThemeToggleButton>
  )
}
