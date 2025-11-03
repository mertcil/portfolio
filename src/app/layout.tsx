import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import Providers from '@/components/Providers'
import LayoutWrapper from '@/components/LayoutWrapper'
import React from 'react'

export const metadata: Metadata = {
  title: 'Mevlut Mert CIL | Full Stack Developer',
  description: 'Portfolio of a full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeToggle />
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}

