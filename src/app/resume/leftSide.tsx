'use client'

import { styled } from '@mui/material/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Sidebar = styled('div')({
  width: '35%',
  padding: '0.5rem 0.85rem 1.5rem',
  overflowY: 'auto',
})

const SectionCard = styled('div')({
  marginBottom: '1.5rem',
  padding: '0.6rem 0.85rem 0.85rem',
  background: '#ffffff',
  borderRadius: '12px',
  border: '2px solid #e5e7eb',
  transition: 'all 0.3s ease',

  '&:hover': {
    borderColor: '#1e3a8a',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(30, 58, 138, 0.15)',
  },
})

const SectionTitle = styled('h2')({
  fontSize: '1rem',
  fontWeight: '700',
  letterSpacing: '0.05em',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  color: '#1e3a8a',
  borderBottom: '2px solid #1e3a8a',
  paddingBottom: '0.5rem',
})

const ItemText = styled('div')({
  fontSize: '0.9rem',
  lineHeight: '1.6',
  color: '#334155',
  marginBottom: '0.5rem',

  '& ul': {
    margin: '0.5rem 0',
    paddingLeft: '1.2rem',
  },
  '& li': {
    marginBottom: '0.25rem',
  },
})

const SkillCategory = styled('div')({
  marginBottom: '1rem',
  padding: '1rem',
  background: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  transition: 'all 0.2s ease',

  '&:hover': {
    background: '#e0f2fe',
    borderColor: '#0ea5e9',
  },

  '&:last-child': {
    marginBottom: 0,
  },
})

const SkillName = styled('div')({
  fontSize: '0.9rem',
  fontWeight: '700',
  marginBottom: '0.5rem',
  color: '#1e3a8a',
})

const SkillList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,

  '& li': {
    fontSize: '0.85rem',
    lineHeight: '1.5',
    color: '#475569',
    marginBottom: '0.25rem',
    paddingLeft: '1rem',
    position: 'relative',

    '&:before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: '#0ea5e9',
      fontWeight: 'bold',
    },
  },
})

const ContactItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.75rem',
  marginBottom: '0.5rem',
  background: '#f8fafc',
  borderRadius: '8px',
  fontSize: '0.9rem',
  color: '#334155',
  border: '1px solid #e5e7eb',
  transition: 'all 0.2s ease',

  '&:hover': {
    background: '#dbeafe',
    borderColor: '#3b82f6',
    transform: 'translateX(4px)',
  },

  '&:last-child': {
    marginBottom: 0,
  },
})

const AccomplishmentItem = styled('li')({
  fontSize: '0.85rem',
  lineHeight: '1.6',
  color: '#475569',
  marginBottom: '0.75rem',
  paddingLeft: '1.2rem',
  position: 'relative',

  '&:before': {
    content: '"✓"',
    position: 'absolute',
    left: 0,
    color: '#10b981',
    fontWeight: 'bold',
  },
})

const NetworkLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.75rem',
  background: '#f8fafc',
  borderRadius: '8px',
  fontSize: '0.9rem',
  color: '#334155',
  border: '1px solid #e5e7eb',
  textDecoration: 'none',
  transition: 'all 0.2s ease',

  '&:hover': {
    background: '#1e3a8a',
    borderColor: '#1e3a8a',
    color: '#ffffff',
    transform: 'translateX(4px)',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)',

    '& .icon': {
      color: '#ffffff',
    },
  },
})

const IconWrapper = styled('div')({
  width: '32px',
  height: '32px',
  borderRadius: '6px',
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  transition: 'all 0.3s ease',
})

const NetworkText = styled('span')({
  fontSize: '0.9rem',
  fontWeight: '500',
})

export default function LeftSide() {
  return (
    <Sidebar>
      {/* SKILLS */}
      <SectionCard>
        <SectionTitle>Skills</SectionTitle>

        <SkillCategory>
          <SkillName>Programming/Scripting</SkillName>
          <SkillList>
            <li>Java, C#, C/C++</li>
            <li>Kernel C, Assembly</li>
            <li>JavaScript, Python, Lua</li>
            <li>HTML, CSS</li>
            <li>ABAP</li>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillName>Frameworks</SkillName>
          <SkillList>
            <li>ReactJS, Node.js, ExpressJS</li>
            <li>Spring MVC (4,3,5.0), JSP</li>
            <li>ASP.NET MVC/Web Forms</li>
            <li>Apache Wicket</li>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillName>Databases</SkillName>
          <SkillList>
            <li>PostgreSQL, MySQL, SQLite</li>
            <li>MS SQL Server 2012 & 2014</li>
            <li>ORM: Sequelize, Hibernate</li>
            <li>Redis, Ignite Cache</li>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillName>Version Control & Software Development Management</SkillName>
          <SkillList>
            <li>Git, Mercurial, SVN, Team Foundation Server</li>
            <li>Jira, Bitbucket, Confluence, Trello, SourceTree</li>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillName>Computer Graphics & Vision</SkillName>
          <SkillList>
            <li>Matlab</li>
            <li>OpenGL</li>
            <li>OpenCV</li>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillName>Hardware Design</SkillName>
          <SkillList>
            <li>Verilog, VHDL, Xilinx ISE</li>
            <li>Proteus PCB Design, Orcad PSpice, Cadence, Multisim</li>
            <li>Advanced Design System, Microwave Office</li>
          </SkillList>
        </SkillCategory>
      </SectionCard>

      {/* ACCOMPLISHMENTS */}
      <SectionCard>
        <SectionTitle>Accomplishments</SectionTitle>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <AccomplishmentItem>Double Major and a MSc Degree holder from Istanbul Technical University</AccomplishmentItem>
          <AccomplishmentItem>GPA &gt; 3.0 all terms</AccomplishmentItem>
          <AccomplishmentItem>Ranked in the top 0.36% nationwide in Turkey's university entrance exam</AccomplishmentItem>
        </ul>
      </SectionCard>

      {/* NETWORK */}
      <SectionCard>
        <SectionTitle>Network</SectionTitle>
        <NetworkLink href="https://www.linkedin.com/in/mertcil/" target="_blank" rel="noopener noreferrer">
          <IconWrapper className="icon">
            <LinkedInIcon sx={{ color: '#ffffff', fontSize: '20px' }} />
          </IconWrapper>
          <NetworkText>/mertcil</NetworkText>
        </NetworkLink>
      </SectionCard>

      {/* LANGUAGES */}
      <SectionCard>
        <SectionTitle>Languages</SectionTitle>
        <SkillList>
          <li>Turkish</li>
          <li>English</li>
        </SkillList>
      </SectionCard>

      {/* INTERESTS */}
      <SectionCard>
        <SectionTitle>Interests</SectionTitle>

        <SkillCategory>
          <SkillName>Sports</SkillName>
          <SkillList>
            <li>swimming</li>
            <li>volleyball</li>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillName>Music</SkillName>
          <SkillList>
            <li>playing the electric guitar</li>
            <li>mixing with Reaper</li>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillName>Dance</SkillName>
          <SkillList>
            <li>ballroom dances: jive, cha cha, tango</li>
            <li>social dances: salsa, zumba</li>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillName>Photography</SkillName>
          <SkillList>
            <li>using an APS-C camera</li>
            <li>post-processing using DaVinci Resolve</li>
          </SkillList>
        </SkillCategory>
      </SectionCard>
    </Sidebar>
  )
}
