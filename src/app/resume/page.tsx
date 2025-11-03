'use client'

import { styled } from '@mui/material/styles'
import LeftSide from './leftSide'
import RightSide from './rightSide'

const Container = styled('div')({
  display: 'flex',
  // minHeight: '100vh',
  // paddingTop: 0,
  // background: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
})

export default function Resume() {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  )
}
