# Theme System Documentation

This document explains the theming architecture implemented for dark/light mode support.

## Overview

The portfolio now has a comprehensive theming system with:
- ✅ **Light Mode** (default)
- ✅ **Dark Mode**
- ✅ **Theme Toggle** button in header
- ✅ **LocalStorage persistence** - remembers user preference
- ✅ **System preference detection** - respects OS theme on first visit
- ✅ **Smooth transitions** between themes
- ✅ **MUI Theme integration** for consistent styling

---

## Architecture

### 1. Theme Configuration ([src/lib/theme.ts](src/lib/theme.ts))

Defines two complete Material-UI themes with shared configuration:

#### **Shared Configuration**
```typescript
{
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-1px' },
    h2: { fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.5px' },
    h3: { fontSize: '1.5rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
  },
  spacing: 8,
}
```

#### **Light Theme Colors**
- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#f59e0b` (Amber)
- **Background**: `#f8fafc` (Light gray)
- **Paper**: `#ffffff` (White)
- **Text Primary**: `#1e3a8a` (Dark blue)
- **Text Secondary**: `#475569` (Slate gray)

#### **Dark Theme Colors**
- **Primary**: `#60a5fa` (Light blue)
- **Secondary**: `#fbbf24` (Light amber)
- **Background**: `#0f172a` (Dark slate)
- **Paper**: `#1e293b` (Lighter slate)
- **Text Primary**: `#e2e8f0` (Light slate)
- **Text Secondary**: `#94a3b8` (Muted slate)

---

### 2. Theme Context ([src/contexts/ThemeContext.tsx](src/contexts/ThemeContext.tsx))

Manages theme state and provides theme switching functionality.

#### **Features**:
- Loads theme preference from `localStorage`
- Falls back to system preference if no saved preference
- Provides `toggleTheme()` function
- Prevents flash of unstyled content (FOUC)
- Wraps app with MUI `ThemeProvider` and `CssBaseline`

#### **Usage**:
```typescript
import { useTheme } from '@/contexts/ThemeContext'

function MyComponent() {
  const { mode, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      Current mode: {mode}
    </button>
  )
}
```

---

### 3. Updated Components

#### **Providers** ([src/components/Providers.tsx](src/components/Providers.tsx))
Simplified to use custom `ThemeProvider` from context:
```typescript
export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
```

#### **Header** ([src/components/Header.tsx](src/components/Header.tsx))
- All styled components updated to use `theme` tokens
- Added theme toggle button with sun/moon icons
- Responsive to current theme mode
- Example:
```typescript
const Nav = styled('nav')(({ theme }) => ({
  background: theme.palette.primary.dark,
  color: theme.palette.text.primary,
  // ... more theme tokens
}))
```

#### **Homepage** ([src/app/page.tsx](src/app/page.tsx))
- All hardcoded colors replaced with theme tokens
- Text colors adapt to theme:
```typescript
const Title = styled('h1')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
}))
```

---

## Theme Toggle Button

Located in the header next to LinkedIn/GitHub icons:

**Light Mode** → Shows moon icon (click to switch to dark)
**Dark Mode** → Shows sun icon (click to switch to light)

### Icon SVGs:
- **Moon**: Indicates dark mode is available
- **Sun**: Indicates light mode is available

### Accessibility:
- `aria-label`: Descriptive label for screen readers
- `title`: Tooltip on hover
- Keyboard accessible

---

## How to Use Theme in Components

### Option 1: Styled Components (Recommended)
```typescript
import { styled } from '@mui/material/styles'

const MyComponent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderColor: theme.palette.divider,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}))
```

### Option 2: Hook (for dynamic styles)
```typescript
import { useTheme } from '@mui/material/styles'

function MyComponent() {
  const theme = useTheme()

  const dynamicStyle = {
    color: theme.palette.mode === 'dark' ? '#fff' : '#000'
  }

  return <div style={dynamicStyle}>Content</div>
}
```

### Option 3: sx Prop (MUI components)
```typescript
import { Box } from '@mui/material'

<Box sx={{
  bgcolor: 'background.paper',
  color: 'text.primary',
  p: 2,
  borderRadius: 1,
}}>
  Content
</Box>
```

---

## Available Theme Tokens

### Colors
```typescript
theme.palette.primary.main
theme.palette.primary.light
theme.palette.primary.dark
theme.palette.primary.contrastText

theme.palette.secondary.main
theme.palette.secondary.light
theme.palette.secondary.dark

theme.palette.background.default
theme.palette.background.paper

theme.palette.text.primary
theme.palette.text.secondary

theme.palette.divider

theme.palette.action.active
theme.palette.action.hover
theme.palette.action.selected
```

### Typography
```typescript
theme.typography.fontFamily
theme.typography.h1 // { fontSize, fontWeight, letterSpacing }
theme.typography.h2
theme.typography.h3
theme.typography.body1
```

### Spacing
```typescript
theme.spacing(1) // 8px
theme.spacing(2) // 16px
theme.spacing(3) // 24px
// etc.
```

### Shape
```typescript
theme.shape.borderRadius // 12px
```

### Mode Detection
```typescript
theme.palette.mode // 'light' | 'dark'
```

---

## LocalStorage Key

Theme preference is stored in:
```
localStorage.getItem('theme-mode') // 'light' | 'dark'
```

---

## Migration Guide

### Before (Hardcoded Colors)
```typescript
const Title = styled('h1')({
  color: '#1e3a8a',
  fontSize: '2.5rem',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"...',
})
```

### After (Theme Tokens)
```typescript
const Title = styled('h1')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.h1.fontSize,
  fontFamily: theme.typography.fontFamily,
}))
```

---

## Remaining Work

Components still using hardcoded colors (need migration):
- `/posts` page and components
- `/posts/[slug]` page
- `/work` page
- `/resume` page and sub-components
- `/contact` page
- `/documents` page
- Error boundaries
- Footer component

### To Update a Component:
1. Change styled component from object to function: `styled('div')({...})` → `styled('div')(({ theme }) => ({...}))`
2. Replace hardcoded colors with theme tokens
3. Use `theme.palette.mode` for conditional styling
4. Test in both light and dark modes

---

## Testing Checklist

- [x] Build succeeds
- [x] Light mode displays correctly
- [x] Dark mode displays correctly
- [x] Theme toggle button works
- [x] Theme persists on page reload
- [x] Smooth transitions between themes
- [x] System preference detection works
- [x] No console errors
- [ ] All pages tested in both modes
- [ ] All components migrated to theme tokens

---

## Benefits

### Before
❌ 4 different styling methods
❌ Hardcoded colors everywhere
❌ No dark mode
❌ Difficult to maintain
❌ Inconsistent colors
❌ Theme defined but unused

### After
✅ Single unified theme system
✅ Light & dark modes
✅ Theme toggle with persistence
✅ Easy to maintain
✅ Consistent colors
✅ Fully typed with TypeScript
✅ Accessible (ARIA labels, keyboard support)
✅ Smooth transitions
✅ System preference detection

---

## Performance

- Theme context uses `useMemo` to prevent unnecessary re-renders
- `CssBaseline` applied once at root level
- Theme toggle triggers single re-render of tree
- LocalStorage read/write is minimal

---

## Browser Support

Works in all modern browsers supporting:
- CSS transitions
- localStorage
- prefers-color-scheme media query

---

**Last Updated**: 2025-11-03
**Status**: ✅ Core Implementation Complete
**Next Steps**: Migrate remaining pages to use theme tokens
