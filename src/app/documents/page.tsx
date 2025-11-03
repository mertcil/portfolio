'use client'

import { styled } from '@mui/material/styles'
import DownloadIcon from '@mui/icons-material/Download'

const PageContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  minHeight: '60vh',
  marginBottom: '-2rem', // Reduce bottom margin
})

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  paddingBottom: '1.5rem',
  borderBottom: `2px solid ${theme.palette.divider}`,
}))

const PageTitle = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  letterSpacing: '-1px',
  margin: 0,
  color: theme.palette.text.primary,
}))

const PageSubtitle = styled('p')(({ theme }) => ({
  fontSize: '1.1rem',
  color: theme.palette.text.secondary,
  margin: 0,
  lineHeight: 1.6,
}))

const SectionCard = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '14px',
  border: `2px solid ${theme.palette.divider}`,
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  transition: 'all 0.3s ease',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 12px 28px rgba(0, 0, 0, 0.2)'
    : '0 12px 28px rgba(30, 58, 138, 0.08)',

  '&:hover': {
    borderColor: theme.palette.primary.dark,
    transform: 'translateY(-3px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 16px 32px rgba(0, 0, 0, 0.3)'
      : '0 16px 32px rgba(30, 58, 138, 0.16)',
  },
}))

const ContentSection = styled('div')({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',

  '@media (max-width: 960px)': {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
})

const TextContent = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.primary.dark,
  margin: 0,
  letterSpacing: '-0.5px',
}))

const Description = styled('p')(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  margin: 0,
  lineHeight: 1.7,
}))

const DownloadSection = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
})

const DownloadButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',
  padding: '1.25rem 2.5rem',
  borderRadius: '14px',
  fontSize: '1.05rem',
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  background: theme.palette.primary.dark,
  color: theme.palette.background.paper,
  border: '2px solid transparent',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 24px rgba(0, 0, 0, 0.3)'
    : '0 10px 24px rgba(30, 58, 138, 0.2)',
  cursor: 'pointer',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 16px 36px rgba(0, 0, 0, 0.4)'
      : '0 16px 36px rgba(30, 58, 138, 0.3)',
    background: theme.palette.primary.main,
  },

  '& svg': {
    fontSize: '24px',
  },
}))

const FileInfo = styled('div')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
}))

export default function Documents() {
  return (
    <PageContainer>
      <Header>
        <PageTitle>Documents & Resources</PageTitle>
        <PageSubtitle>
          Access my professional documents and certifications
        </PageSubtitle>
      </Header>

      <SectionCard>
        <ContentSection>
          <TextContent>
            <SectionTitle>Curriculum Vitae</SectionTitle>
            <Description>
              Download my comprehensive CV to review my professional experience, technical skills, and academic background.
              The document includes detailed information about my work history spanning over a decade in software engineering,
              from embedded systems and enterprise solutions to modern cloud-native applications and real-time collaboration platforms.
            </Description>
            <Description>
              You'll find specifics about the technologies I've worked with, the teams I've collaborated with, and the impact
              I've delivered across defense, telecom, and enterprise domains.
            </Description>
          </TextContent>

          <DownloadSection>
            <DownloadButton
              href="/files/CV_Mevlut_Mert_CIL.pdf"
              download="CV_Mevlut_Mert_CIL.pdf"
              aria-label="Download CV"
            >
              <DownloadIcon />
              Download CV
            </DownloadButton>
            <FileInfo>PDF Format</FileInfo>
          </DownloadSection>
        </ContentSection>
      </SectionCard>
    </PageContainer>
  )
}
