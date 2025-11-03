"use client"

import { createTheme, ThemeOptions } from '@mui/material/styles'

// Shared configuration
const sharedThemeConfig = {
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-1px',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  spacing: 8,
}

// Light theme configuration
export const lightThemeOptions: ThemeOptions = {
  ...sharedThemeConfig,
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Blue
      light: '#60a5fa',
      dark: '#1e3a8a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f59e0b', // Amber
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc', // Light gray background
      paper: '#ffffff',
    },
    text: {
      primary: '#1e3a8a', // Dark blue
      secondary: '#475569', // Slate gray
    },
    divider: '#e2e8f0',
    action: {
      active: '#2563eb',
      hover: 'rgba(37, 99, 235, 0.04)',
      selected: 'rgba(37, 99, 235, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f8fafc',
          color: '#1e3a8a',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
  },
}

// Dark theme configuration
export const darkThemeOptions: ThemeOptions = {
  ...sharedThemeConfig,
  palette: {
    mode: 'dark',
    primary: {
      main: '#60a5fa', // Light blue - accent color for interactive elements
      light: '#93c5fd',
      dark: '#2c3e50', // Dark anthracite for backgrounds
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fbbf24', // Light amber
      light: '#fcd34d',
      dark: '#f59e0b',
      contrastText: '#0f172a',
    },
    background: {
      default: '#0f172a', // Very dark slate/black
      paper: '#1a1f2e', // Anthracite - slightly lighter than default
    },
    text: {
      primary: '#e2e8f0', // Light slate
      secondary: '#94a3b8', // Muted slate
    },
    divider: '#2d3748', // Dark anthracite divider
    action: {
      active: '#60a5fa',
      hover: 'rgba(96, 165, 250, 0.08)',
      selected: 'rgba(96, 165, 250, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0f172a',
          color: '#e2e8f0',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
  },
}

// Create theme instances
export const lightTheme = createTheme(lightThemeOptions)
export const darkTheme = createTheme(darkThemeOptions)

// Default export for backwards compatibility (light theme)
export default lightTheme

