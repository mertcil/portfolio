'use client'

import { styled } from '@mui/material/styles'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const PageContainer = styled('div')({
  width: '100%',
  display: 'flex',
  gap: '2rem',
  minHeight: '70vh',
  color: '#1e3a8a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',

  '@media (max-width: 960px)': {
    flexDirection: 'column',
    gap: '1.5rem',
  },
})

const LeftColumn = styled('aside')({
  width: '35%',
  background: '#f8fafc',
  borderRadius: '18px',
  border: '2px solid #e5e7eb',
  padding: '2.25rem 1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  boxShadow: '0 18px 40px rgba(30, 58, 138, 0.12)',

  '@media (max-width: 960px)': {
    width: '100%',
  },
})

const AsideHeader = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

const AsideTitle = styled('h2')({
  fontSize: '1.5rem',
  fontWeight: 700,
  letterSpacing: '-0.5px',
  margin: 0,
})

const AsideSubtitle = styled('p')({
  fontSize: '0.95rem',
  color: '#475569',
  margin: 0,
  lineHeight: 1.6,
})

const SectionCard = styled('div')({
  background: '#ffffff',
  borderRadius: '14px',
  border: '2px solid #e5e7eb',
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 12px 28px rgba(30, 58, 138, 0.08)',

  '&:hover': {
    borderColor: '#1e3a8a',
    transform: 'translateY(-3px)',
    boxShadow: '0 16px 32px rgba(30, 58, 138, 0.16)',
  },
})

const SectionTitle = styled('h3')({
  fontSize: '0.95rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#1e3a8a',
  margin: 0,
  borderBottom: '2px solid #1e3a8a',
  paddingBottom: '0.5rem',
})

const ContactList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

const ContactLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  background: '#f8fafc',
  textDecoration: 'none',
  transition: 'all 0.3s ease',

  '&:hover': {
    background: '#1e3a8a',
    borderColor: '#1e3a8a',
    transform: 'translateY(-4px)',
    boxShadow: '0 14px 32px rgba(30, 58, 138, 0.25)',

    '& .icon': {
      color: '#ffffff',
    },

    '& .label': {
      color: 'rgba(255,255,255,0.75)',
    },

    '& .value': {
      color: '#ffffff',
    },
  },
})

const IconWrapper = styled('div')({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  transition: 'all 0.3s ease',
})

const ContactContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
})

const ContactLabel = styled('span')({
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#64748b',
  transition: 'color 0.3s ease',
})

const ContactValue = styled('span')({
  fontSize: '0.95rem',
  fontWeight: 600,
  color: '#1e3a8a',
  transition: 'color 0.3s ease',
  wordBreak: 'break-word',
})

const DetailList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

const DetailItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
})

const DetailLabel = styled('span')({
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#64748b',
})

const DetailValue = styled('span')({
  fontSize: '0.95rem',
  fontWeight: 600,
  color: '#1e3a8a',
})

const RightColumn = styled('section')({
  width: '65%',
  background: '#ffffff',
  borderRadius: '18px',
  border: '2px solid #e5e7eb',
  padding: '2.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.75rem',
  boxShadow: '0 20px 44px rgba(15, 23, 42, 0.12)',

  '@media (max-width: 960px)': {
    width: '100%',
    padding: '2.25rem',
  },

  '@media (max-width: 600px)': {
    padding: '1.75rem',
  },
})

const HeroTitle = styled('h1')({
  fontSize: '2.25rem',
  fontWeight: 700,
  letterSpacing: '-1px',
  margin: 0,
})

const HeroSubtitle = styled('p')({
  fontSize: '1.1rem',
  color: '#475569',
  margin: 0,
  lineHeight: 1.7,
})

const StoryText = styled('p')({
  fontSize: '1rem',
  color: '#334155',
  margin: 0,
  lineHeight: 1.7,
})

const InfoGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1.25rem',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
})

const InfoCard = styled('div')({
  background: '#f8fafc',
  borderRadius: '14px',
  border: '1px solid #e5e7eb',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  transition: 'all 0.25s ease',

  '&:hover': {
    borderColor: '#1e3a8a',
    boxShadow: '0 14px 32px rgba(30, 58, 138, 0.15)',
    transform: 'translateY(-3px)',
  },
})

const InfoTitle = styled('h4')({
  fontSize: '0.95rem',
  fontWeight: 700,
  color: '#1e3a8a',
  margin: 0,
})

const InfoText = styled('p')({
  fontSize: '0.9rem',
  color: '#475569',
  margin: 0,
  lineHeight: 1.6,
})

const CTAGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
})

const CTAButton = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.9rem 1.75rem',
  borderRadius: '12px',
  fontSize: '0.95rem',
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  background: '#1e3a8a',
  color: '#ffffff',
  border: '2px solid transparent',

  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 28px rgba(30, 58, 138, 0.25)',
    background: '#2563eb',
  },

  '&.secondary': {
    background: '#ffffff',
    color: '#1e3a8a',
    borderColor: '#1e3a8a',

    '&:hover': {
      background: '#1e3a8a',
      color: '#ffffff',
    },
  },
})

const ResponseNote = styled('p')({
  fontSize: '0.9rem',
  color: '#475569',
  margin: 0,
  lineHeight: 1.6,
})

export default function Contact() {
  return (
    <PageContainer>
      <LeftColumn>
        <AsideHeader>
          <AsideTitle>Direct Contact</AsideTitle>
          <AsideSubtitle>If you’d like to connect, choose whichever channel suits you and I’ll aim to reply as soon as possible.</AsideSubtitle>
        </AsideHeader>

        <SectionCard>
          <SectionTitle>Primary Channels</SectionTitle>
          <ContactList>
            <ContactLink href="https://www.linkedin.com/in/mertcil/" target="_blank" rel="noopener noreferrer">
              <IconWrapper className="icon">
                <LinkedInIcon sx={{ color: '#ffffff', fontSize: '22px' }} />
              </IconWrapper>
              <ContactContent>
                <ContactLabel className="label">LinkedIn</ContactLabel>
                <ContactValue className="value">/mertcil</ContactValue>
              </ContactContent>
            </ContactLink>

            <ContactLink href="mailto:mevlutmert.cil@gmail.com">
              <IconWrapper className="icon">
                <EmailIcon sx={{ color: '#ffffff', fontSize: '22px' }} />
              </IconWrapper>
              <ContactContent>
                <ContactLabel className="label">Email</ContactLabel>
                <ContactValue className="value">mevlutmert.cil@gmail.com</ContactValue>
              </ContactContent>
            </ContactLink>

            <ContactLink href="https://github.com/mertcil" target="_blank" rel="noopener noreferrer">
              <IconWrapper className="icon">
                <GitHubIcon sx={{ color: '#ffffff', fontSize: '22px' }} />
              </IconWrapper>
              <ContactContent>
                <ContactLabel className="label">GitHub</ContactLabel>
                <ContactValue className="value">@mertcil</ContactValue>
              </ContactContent>
            </ContactLink>
          </ContactList>
        </SectionCard>

        <SectionCard>
          <SectionTitle>Quick Facts</SectionTitle>
          <DetailList>
            <DetailItem>
              <DetailLabel>Location</DetailLabel>
              <DetailValue>Turkey (GMT+3)</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Availability</DetailLabel>
              <DetailValue>Currently open to remote or hybrid collaborations</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Response Time</DetailLabel>
              <DetailValue>I usually reply within a day on weekdays</DetailValue>
            </DetailItem>
          </DetailList>
        </SectionCard>
      </LeftColumn>

      <RightColumn>
        <HeroTitle>Let’s Collaborate Thoughtfully</HeroTitle>
        <HeroSubtitle>
          I’m grateful for opportunities to support teams that care about reliable, considerate software.
        </HeroSubtitle>

        <StoryText>
          Over the past decade I’ve had the chance to contribute to B2B, finance, and defence projects. I stay hands-on
          with modern JavaScript, Java, C#, and cloud tooling, and I enjoy working closely with design and product
          partners so we keep our decisions grounded and practical.
        </StoryText>

        <InfoGrid>
          <InfoCard>
            <InfoTitle>Where I Can Help</InfoTitle>
            <InfoText>
              Web applications, realtime collaboration tools, dependable back-end services, and integrations across
              modern SaaS platforms.
            </InfoText>
          </InfoCard>

          <InfoCard>
            <InfoTitle>How I Work</InfoTitle>
            <InfoText>
              I focus on clear milestones, steady communication, and maintainable code so future contributors feel
              supported.
            </InfoText>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Teams I Work Well With</InfoTitle>
            <InfoText>
              Product teams, founders, and engineering leaders who value transparent partnerships and sustainable
              delivery practices.
            </InfoText>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Languages</InfoTitle>
            <InfoText>
              Fluent in English and Turkish, and comfortable collaborating with distributed teams while keeping
              stakeholders in the loop.
            </InfoText>
          </InfoCard>
        </InfoGrid>

        <CTAGroup>
          <CTAButton href="mailto:mevlutmert.cil@gmail.com">Start a Conversation</CTAButton>
          <CTAButton className="secondary" href="https://www.linkedin.com/in/mertcil/" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </CTAButton>
        </CTAGroup>

        <ResponseNote>
          If you’re able to share a brief, timeline, or goal, I’ll respond with a candid view on availability and how I
          might be helpful.
        </ResponseNote>
      </RightColumn>
    </PageContainer>
  )
}
