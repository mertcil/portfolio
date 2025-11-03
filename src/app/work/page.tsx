'use client'

import { styled } from '@mui/material/styles'

type Project = {
  name: string
  timeframe: string
  focus: string
  summary: string
  highlights: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Diyalog WebRTC Collaboration Platform',
    timeframe: '2020 — Present',
    focus: 'Senior Software Development Engineer, Havelsan',
    summary:
      'Built and evolved a full-stack WebRTC platform delivering secure, low-latency meetings for defense and enterprise customers.',
    highlights: [
      'Shipped React and Node.js features that orchestrate signaling, session management, and device control.',
      'Engineered adaptive bitrate, TURN/ICE failover, and encryption modules to stabilize calls across networks.',
      'Authored telemetry pipelines and Grafana dashboards that surface call quality metrics for SRE workflows.',
    ],
    tags: ['WebRTC', 'React', 'Node.js', 'Redis', 'PostgreSQL', 'Prometheus'],
  },
  {
    name: '5G Core Network & Signaling Backbone',
    timeframe: '2019 — 2020',
    focus: 'Software Development Engineer, Havelsan',
    summary:
      'Built cloud-native control plane services for a 5G core network deployment supporting telecom-grade scale.',
    highlights: [
      'Developed Spring Boot microservices handling subscriber management, policy control, and telemetry.',
      'Deployed Apache Ignite caches and Kafka pipelines to process millions of signaling events per second.',
      'Automated CI/CD pipelines with Jenkins and containerized workloads for on-prem orchestration.',
    ],
    tags: ['Spring Boot', 'Kafka', 'Ignite', 'Kubernetes', 'CI/CD'],
  },
  {
    name: 'Fleet Management Modernization',
    timeframe: '2018',
    focus: 'Software Development Engineer, Garanti Technology (BBVA)',
    summary:
      'Re-platformed mission-critical fleet software from legacy WebForms into a modular Java/Spring codebase.',
    highlights: [
      'Modelled domain entities, refactored stored procedures, and automated data migration scripts.',
      'Developed REST APIs with Swagger docs plus responsive JSP views backed by shared service layers.',
      'Implemented Jenkins pipelines and integration tests, reducing release effort while improving reliability.',
    ],
    tags: ['Spring MVC', 'Hibernate', 'SQL Server', 'Swagger', 'Jenkins'],
  },
  {
    name: 'Embedded Set-Top Box Firmware',
    timeframe: '2015 — 2018',
    focus: 'Software Development Engineer, Vestek (Vestel)',
    summary:
      'Delivered Linux-based firmware releases powering commercial IPTV and hospitality devices.',
    highlights: [
      'Implemented C/C++ drivers, middleware services, and HTML5 client apps optimized for constrained hardware.',
      'Authored Python build automation, CI smoke tests, and deployment scripts for remote labs.',
      'Profiled CPU/GPU usage with hardware teams and tuned kernel modules to meet latency budgets.',
    ],
    tags: ['C/C++', 'Linux', 'Python', 'Embedded', 'Automation'],
  },
  {
    name: 'Enterprise SAP Integration & Reporting',
    timeframe: '2014 — 2016',
    focus: 'ABAP & SAP Development',
    summary:
      'Built SAP/ABAP services that automate finance and supply-chain workflows for large enterprises.',
    highlights: [
      'Developed ABAP modules integrating FI/CO and MM data, generating auditable documents and reports.',
      'Exposed reusable OData endpoints to power mobile dashboards and third-party integrations.',
      'Maintained transport pipelines and release documentation that satisfied audit and compliance checks.',
    ],
    tags: ['SAP', 'ABAP', 'OData', 'Finance', 'Automation'],
  },
  {
    name: 'Remote Work Infrastructure Rollout',
    timeframe: '2020',
    focus: 'Platform & DevOps Leadership',
    summary:
      'Engineered tooling and automation that enabled a rapid shift to secure, remote-first software delivery.',
    highlights: [
      'Provisioned OpenVPN clusters, MFA policies, and device posture checks codified as infrastructure-as-code.',
      'Hardened GitHub Actions and AWS pipelines with automated testing, artifact signing, and release approvals.',
      'Documented engineering playbooks for async collaboration, service ownership, and remote on-call rotations.',
    ],
    tags: ['DevOps', 'Security', 'OpenVPN', 'AWS', 'Remote Work'],
  },
]

const PageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  padding: '3rem 2rem 4rem',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
  background: theme.palette.background.default,
  boxSizing: 'border-box',
  borderRadius: '32px',
}))

const Header = styled('header')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  maxWidth: '960px',
  margin: '0 auto',
  textAlign: 'center',
})

const Title = styled('h1')({
  fontSize: '2.5rem',
  fontWeight: 600,
  letterSpacing: '-1px',
  margin: 0,
})

const Subtitle = styled('p')(({ theme }) => ({
  fontSize: '1.05rem',
  lineHeight: 1.7,
  margin: 0,
  color: theme.palette.text.secondary,
}))

const ProjectsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.75rem',
  maxWidth: '1100px',
  margin: '0 auto',
  width: '100%',
})

const ProjectCard = styled('article')(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '18px',
  border: `1px solid ${theme.palette.divider}`,
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 18px 40px rgba(0, 0, 0, 0.3)'
    : '0 18px 40px rgba(30, 58, 138, 0.08)',
  transition: 'all 0.3s ease',

  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: theme.palette.primary.dark,
    boxShadow: theme.palette.mode === 'dark'
      ? '0 24px 48px rgba(0, 0, 0, 0.5)'
      : '0 24px 48px rgba(30, 58, 138, 0.18)',
  },
}))

const ProjectHeader = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
})

const ProjectName = styled('h2')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  margin: 0,
  color: theme.palette.text.primary,
}))

const ProjectMeta = styled('div')(({ theme }) => ({
  fontSize: '0.85rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: theme.palette.text.secondary,
}))

const ProjectSummary = styled('p')(({ theme }) => ({
  fontSize: '0.95rem',
  lineHeight: 1.7,
  margin: 0,
  color: theme.palette.text.secondary,
}))

const HighlightsList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.65rem',
  color: theme.palette.text.primary,
  fontSize: '0.9rem',

  '& li': {
    position: 'relative',
    paddingLeft: '1.4rem',
    lineHeight: 1.6,
  },

  '& li:before': {
    content: '"▸"',
    position: 'absolute',
    left: 0,
    color: theme.palette.primary.main,
    fontWeight: '700',
  },
}))

const Tags = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

const Tag = styled('span')(({ theme }) => ({
  padding: '0.35rem 0.7rem',
  borderRadius: '999px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(33, 150, 243, 0.15)'
    : '#e0f2fe',
  color: theme.palette.mode === 'dark'
    ? theme.palette.primary.light
    : theme.palette.primary.dark,
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.05em',
}))

export default function Work() {
  return (
    <PageContainer>
      <Header>
        <Title>Signature Projects & Initiatives</Title>
        <Subtitle>
          A curated selection of engagements spanning real-time communication, telecom infrastructure,
          enterprise modernization, and platform engineering. Each project blends technical rigor with
          cross-functional collaboration to deliver measurable impact.
        </Subtitle>
      </Header>

      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.name}>
            <ProjectHeader>
              <ProjectName>{project.name}</ProjectName>
              <ProjectMeta>
                {project.timeframe} · {project.focus}
              </ProjectMeta>
            </ProjectHeader>

            <ProjectSummary>{project.summary}</ProjectSummary>

            <HighlightsList>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </HighlightsList>

            <Tags>
              {project.tags.map((tag) => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </Tags>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PageContainer>
  )
}
