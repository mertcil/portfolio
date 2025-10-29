import type { Metadata } from 'next'
import { Spectral } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import LayoutWrapper from '@/components/LayoutWrapper'
import React from "react";

const bodySerif = Spectral({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
    title: 'Mevlüt Mert ÇİL | Full Stack Developer',
    description: 'Portfolio of a full-stack developer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={bodySerif.className}>
                <Providers>
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
