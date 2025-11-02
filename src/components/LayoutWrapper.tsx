'use client'

import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'

const OuterContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#1e3a8a',
  width: '100%',
})

const CenteredContent = styled('div')({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const MainContent = styled('div')({
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
})

const Panel = styled('div')({
  position: 'relative',
  borderRadius: '16px',
  padding: '2rem',
  background: '#ffffff',
  border: '1px solid #e0e0e0',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  color: '#1e3a8a',
  width: '100%',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
})

const HeaderPanel = styled('div')({
  width: '100%',
  marginTop: '2.5rem',
  background: 'transparent',
})

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const childrenArray = Array.isArray(children) ? children : [children]
  const [header, pageContent, footer] = childrenArray

  return (
    <OuterContainer>
      <CenteredContent>
        <HeaderPanel>
          {header}
        </HeaderPanel>

        <MainContent>
          <Panel>
            {pageContent}
          </Panel>
        </MainContent>
      </CenteredContent>
      {footer}
    </OuterContainer>
  )
}
