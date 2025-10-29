"use client"

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#60a5fa' },
    secondary: { main: '#f59e0b' },
    background: {
      default: '#1e3a8a',
      paper: 'rgba(255,255,255,0.06)'
    },
    text: { primary: '#ffffff', secondary: 'rgba(255,255,255,0.7)' }
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#ffffff'
        }
      }
    }
  }
})

export default theme

