# Project Agents & Architecture

This document describes the agents, patterns, and architectural decisions used in this Next.js portfolio project.

## Overview

This is a modern Next.js 16 portfolio application built with:
- **React 19.2** with Server and Client Components
- **MUI 7.3.4** with `styled()` for CSS-in-JS styling
- **Emotion** CSS-in-JS library (required by MUI)
- **TypeScript 5.9.3** for type safety

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with LayoutWrapper
│   ├── page.tsx            # Home page
│   ├── posts/page.tsx      # Posts (under construction)
│   ├── resume/page.tsx     # Resume (under construction)
│   ├── work/page.tsx       # Work (under construction)
│   ├── documents/page.tsx  # Documents (under construction)
│   ├── contact/page.tsx    # Contact (under construction)
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer section
│   ├── LayoutWrapper.tsx   # Main layout wrapper
│   └── Providers.tsx       # MUI ThemeProvider setup
└── styles/
    └── (none - all styling is CSS-in-JS via styled())
```

## Key Components

### Header Component (`src/components/Header.tsx`)
- Navigation bar with brand and links
- Styled with MUI `styled()` components
- Features:
  - Dark blue text (#1e3a8a) with bright blue hover (#2563eb)
  - Professional typography: fontWeight 600, letterSpacing -0.5px
  - Smooth transitions on hover (all 0.3s ease)
  - System font stack for cross-platform compatibility
  - Full-width (100%) container centered in layout

### Footer Component (`src/components/Footer.tsx`)
- Simple footer section
- White text (#ffffff) on blue background
- System font family for consistency

### LayoutWrapper Component (`src/components/LayoutWrapper.tsx`)
- Core layout managing header, main content, and footer
- Nested flexbox structure for proper centering:
  1. **OuterContainer**: Full viewport height with blue background (#1e3a8a)
  2. **CenteredContent**: 80% width centered container
  3. **HeaderPanel**: White background (#ffffff) with dark text
  4. **MainContent**: White background with vertical spacing (marginTop 2.5rem)
- All panels styled with professional shadows and borders
- Text color: dark blue (#1e3a8a)

### Providers Component (`src/components/Providers.tsx`)
- Wraps application with MUI ThemeProvider
- Includes CssBaseline for consistent styling across browsers
- Acts as Client Component boundary for MUI context

## Styling Strategy

### CSS-in-JS with MUI styled()

All styling uses MUI's `styled()` function from `@mui/material/styles`:

```typescript
import { styled } from '@mui/material/styles';

const Button = styled('button')({
  color: '#1e3a8a',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#2563eb',
  },
});
```

**Advantages:**
- Type-safe CSS with TypeScript
- Component-scoped styling (no global conflicts)
- Dynamic styling based on props
- Server-side rendering support
- Full browser compatibility

### Removed Technologies
- **CSS Modules**: Completely removed in favor of styled()
- **Tailwind CSS**: Removed as MUI styled() provides all needed styling
- Deleted files: `*.module.css` and all barrel index files

## Color Palette

```typescript
Primary Blue:        #1e3a8a  (dark blue - text, hover from)
Hover Blue:          #2563eb  (bright blue - hover to)
Background:          #1e3a8a  (viewport background)
Panel Background:    #ffffff  (white - content containers)
Shadow:              rgba(0,0,0,0.1) - 0 4px 12px
```

## Typography

**Font Family**: System fonts (cross-platform compatibility)
```css
'-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
```

**Font Weights Used**: 400 (regular), 500 (medium), 600 (semibold)

**Sizing Hierarchy**:
- Page Title: 2.5rem, fontWeight 600, letterSpacing -1px
- Section Headers: 1.5rem, fontWeight 600
- Body Text: 1rem, fontWeight 400, lineHeight 1.6
- Small Text: 0.95rem, fontWeight 500

## Layout Pattern

The application uses a **nested flexbox pattern** for a centered, responsive layout:

```
┌─────────────────────────────────────┐
│     OuterContainer (100%, blue)     │
│  ┌─────────────────────────────────┐│
│  │  CenteredContent (80% width)    ││
│  │  ┌─────────────────────────────┐││
│  │  │  HeaderPanel (white)        │││
│  │  ├─────────────────────────────┤││
│  │  │  MainContent (white)        │││
│  │  │  marginTop: 2.5rem          │││
│  │  └─────────────────────────────┘││
│  │  ┌─────────────────────────────┐││
│  │  │  Footer (blue)              │││
│  │  └─────────────────────────────┘││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

## Pages & Routes

### Home (`/`)
- Welcome message with title and subtitle
- Professional typography with dark blue text
- Entry point to the portfolio

### Placeholder Pages (Under Construction)
- `/posts` - Future blog/articles section
- `/resume` - Curriculum vitae and experience
- `/work` - Portfolio of projects
- `/documents` - Documentation or resources
- `/contact` - Contact information and forms

All placeholder pages use consistent styling with professional messaging.

## Dependencies

**Key Packages**:
- `next@16.0.0` - React framework
- `react@19.2.2` - JavaScript library
- `@mui/material@7.3.4` - Component library with styled() support
- `@emotion/react@11.13.0` - CSS-in-JS engine
- `@emotion/styled@11.11.5` - Emotion styled component helper
- `typescript@5.9.3` - Type safety

**DevDependencies**: ESLint, TypeScript types for Node and React

## Known Patterns & Best Practices

### 1. Client Components
Use `'use client'` at the top of components that require interactivity or MUI hooks:
- Providers.tsx (MUI context)
- Header.tsx (navigation interactivity)
- Footer.tsx (if adding interactive elements)

### 2. Server Components
Use server components by default:
- layout.tsx (root layout)
- All page.tsx files
- LayoutWrapper.tsx (primarily for structure)

### 3. Styling Components
Always use `styled()` for component styling:
```typescript
const StyledDiv = styled('div')({
  color: '#1e3a8a',
  padding: '1rem',
  '&:hover': { color: '#2563eb' },
});
```

### 4. Typography
Use explicit font properties instead of CSS shortcuts:
```typescript
{
  fontSize: '1.5rem',
  fontWeight: '600',
  fontFamily: 'system fonts',
  letterSpacing: '-0.5px',
  lineHeight: '1.6',
}
```

### 5. Responsive Design
Current layout is centered at 80% width. For future responsive work:
- Use flexbox for layout structure
- Use CSS media queries in styled() `@media` rules
- Consider MUI's `sx` prop for responsive variants

## Build & Development

**Development Server**:
```bash
npm run dev
```
Runs on http://localhost:3000 with hot module reloading

**Production Build**:
```bash
npm run build
```
Creates optimized static export in `out/` directory

**Type Checking**:
```bash
npm run type-check
```
Validates TypeScript types across codebase

## Future Considerations

1. **Content**: Fill in the placeholder pages with actual content
2. **Dark Mode**: Consider adding theme switching via MUI theme variants
3. **Animation**: Add transitions and animations using framer-motion if needed
4. **SEO**: Add Meta tags and Open Graph data to pages
5. **Analytics**: Integrate analytics tracking (e.g., Vercel Analytics)
6. **Image Optimization**: Replace placeholder content with optimized images

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [MUI Documentation](https://mui.com)
- [Emotion Styled Documentation](https://emotion.sh/docs/styled)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
