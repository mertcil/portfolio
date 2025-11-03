# Security Headers for GitHub Pages

Since this project uses Next.js static export (`output: 'export'`), custom headers cannot be configured in `next.config.ts`. Instead, you need to configure security headers at the hosting level.

## For GitHub Pages

GitHub Pages doesn't support custom headers directly. Consider one of these options:

### Option 1: Add a _headers file (if supported by your CDN)
Create a `public/_headers` file with:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Option 2: Use Cloudflare Pages or Vercel
If you migrate to Cloudflare Pages or Vercel, you can add a `_headers` file or configure headers in their dashboard.

### Option 3: Use Meta Tags
Add security-related meta tags in your HTML (already configured in layout.tsx):

```tsx
<meta name="referrer" content="strict-origin-when-cross-origin" />
```

## Content Security Policy (CSP)

For a static site with inline styles (MUI styled components), a strict CSP is challenging. If you want to implement CSP:

1. **Move to Vercel/Cloudflare** - They support custom headers
2. **Add CSP meta tag** in layout.tsx (limited functionality):

```tsx
<meta
  httpEquiv="Content-Security-Policy"
  content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; img-src 'self' data:; font-src 'self' data:;"
/>
```

Note: `'unsafe-inline'` for styles is required for MUI emotion/styled components.

## Current Security Measures

✅ `reactStrictMode: true` - Enabled in next.config.ts
✅ `poweredByHeader: false` - Hides Next.js version
✅ HTML sanitization - Using rehype-sanitize for markdown content
✅ Input validation - Using Zod for frontmatter validation
✅ Error boundaries - Comprehensive error handling
✅ Try-catch blocks - All file system operations protected

## Recommendations

1. **If staying on GitHub Pages**: Accept the limitation or use meta tags
2. **If security headers are critical**: Migrate to Vercel or Cloudflare Pages
3. **For production**: Run security audits with tools like:
   - `npm audit`
   - Lighthouse CI
   - OWASP ZAP
