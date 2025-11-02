'use client'

import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type { ReactNode } from 'react'

type WorkExperience = {
  title: string
  date: string
  company: string
  details: ReactNode[]
}

type Education = {
  degree: string
  school: string
  date: string
  focus?: string
}

type Reference = {
  name: string
  role: string
  link: string
  contact?: string
}

const WORK_EXPERIENCES: WorkExperience[] = [
  {
    title: 'Senior Software Development Engineer',
    date: '01/2020 - Current',
    company: 'Havelsan - Ankara, Turkiye',
    details: [
      <>Contributed to the design, development, and testing of <strong>Diyalog</strong>, a <strong>WebRTC</strong>-based online meeting platform, as part of a full-stack engineering team.</>,
      <>Developed front-end features using <strong>ReactJS</strong> with <strong>ES6</strong> and <strong>TypeScript</strong>.</>,
      <>Built back-end services with <strong>Node.js</strong>, using both <strong>CommonJS</strong> and <strong>TypeScript</strong> modules.</>,
      <>Worked with <strong>WebRTC (C++)</strong> and integrated various streaming libraries for real-time communication.</>,
      <>Used <strong>Redis</strong> for caching and <strong>PostgreSQL</strong> for relational data storage.</>,
      <>Collaborated through <strong>Atlassian</strong> tools including <strong>Jira</strong>, <strong>Confluence</strong>, and <strong>Bitbucket</strong>, and used <strong>WebStorm</strong> as the primary development environment.</>,
    ],
  },
  {
    title: 'Software Development Engineer',
    date: '02/2019 - 01/2020',
    company: 'Havelsan - Ankara, Turkiye',
    details: [
      <>Participated in the design, development, and testing of a <strong>5G</strong> core network system as part of a full-stack engineering team.</>,
      <>Developed backend services using <strong>Spring Boot MVC</strong> with <strong>Java 8–11</strong>, along with <strong>Ignite Cache</strong>, <strong>Kafka</strong>, and <strong>JUnit 4</strong> for data processing and testing.</>,
      <>Implemented internal tools in <strong>Python 3</strong>, including parsers and auto-code generators to accelerate development processes.</>,
      <>Utilized <strong>Swagger</strong> for API documentation, integrated CI/CD pipelines with <strong>Jenkins</strong>, and performed development and debugging in <strong>IntelliJ IDEA</strong> and <strong>VS Code</strong>.</>,
    ],
  },
  {
    title: 'Software Development Engineer',
    date: '06/2018 - 11/2018',
    company: 'Garanti Technology, BBVA Group - Istanbul, Turkiye',
    details: [
      <>Performed full-stack development and platform modernization, transitioning the system from <strong>C# (.NET)</strong> to <strong>Java (Spring MVC)</strong> to enhance scalability and long-term maintainability.</>,
      <>Migrated a legacy <strong>ASP.NET WebForms</strong> application (<strong>C# .NET 4.0</strong> with <strong>Microsoft SQL Server 2012/2014</strong>) for a car fleet management system used by a major bank to a modular <strong>Java Spring MVC (v4.3)</strong> architecture with <strong>Hibernate ORM</strong>, rewriting business logic and optimizing data access through queries and stored procedures in the existing SQL Server database.</>,
      <>Built dynamic web interfaces using <strong>JSP</strong>, integrated with the <strong>Spring MVC</strong> backend to enable responsive and user-friendly interactions.</>,
      <>Utilized <strong>Swagger</strong> for API documentation and collaborated on CI/CD processes using <strong>Jenkins</strong>.</>,
      <>Used <strong>GitHub</strong>, <strong>Bitbucket</strong>, and <strong>Team Foundation Server (TFS)</strong> for version control and team collaboration in a multi-repository environment.</>,
      <>Worked in both <strong>IntelliJ IDEA</strong> and <strong>Visual Studio 2015</strong> for cross-platform development, debugging, and deployment.</>,
    ],
  },
  {
    title: 'Software Development Engineer',
    date: '10/2015 - 06/2018',
    company: 'Vestek (R&D Department of Vestel Corporation) - Istanbul, Turkiye',
    details: [
      <>Developed and maintained <strong>Linux</strong>-based B2B embedded software using <strong>C/C++</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, and <strong>HTML</strong>.</>,
      <>Built an automated build-bot system in <strong>Python</strong> to streamline deployment.</>,
      <>Created <strong>JavaScript</strong> unit tests with <strong>Jasmine</strong> to improve code quality.</>,
      <>Implemented features and fixed bugs in <strong>C/C++</strong> for the embedded operating systems powering set-top box TV units.</>,
    ],
  },
  {
    title: 'Computer Engineering Internship',
    date: '07/2012 - 08/2012',
    company: 'Inveon Information Technologies Consultancy and Trading Corp. - Istanbul, Turkiye',
    details: [
      <>Developed web applications for international and local clients using <strong>ASP.NET MVC 3</strong> and the <strong>nopCommerce</strong> platform.</>,
      <>Built responsive UIs with <strong>HTML4</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>; developed backend logic in <strong>C#</strong>.</>,
      <>Implemented <strong>CSV</strong>-based multilingual support for easy content management.</>,
    ],
  },
  {
    title: 'Computer Engineering Internship',
    date: '06/2011 - 07/2011',
    company: 'MBIS Computer Automation Consultancy and Education Services - Istanbul, Turkiye',
    details: [
      <>Gained hands-on experience in <strong>SAP</strong> development with a focus on the <strong>ABAP</strong> programming language.</>,
      <>Developed basic arithmetic programs in <strong>ABAP</strong> as part of training progression.</>,
      <>Completed a full software module that retrieves data from <strong>SAP</strong> databases and prepares it for <strong>PDF</strong> output.</>,
    ],
  },
  {
    title: 'Electronics Engineering Internship',
    date: '08/2010 - 09/2010',
    company: 'Arçelik Corporation - Istanbul, Turkiye',
    details: [
      <>Designed and produced a custom <strong>PCB</strong> for a fan driver circuit.</>,
      <>Developed a voltage source circuit capable of generating square and triangular waveforms on <strong>PCB</strong>.</>,
      <>Created a <strong>C# WinForms</strong> application to simplify circuit calculations and support engineering workflows.</>,
      <>Performed measurement and quality control procedures on TV units in the TV department of Arçelik to evaluate performance and compliance.</>,
    ],
  },
  {
    title: 'Computer Engineering Internship',
    date: '06/2010 - 07/2010',
    company: 'EvolineTR - Istanbul, Turkiye',
    details: [
      <>Gained hands-on experience with <strong>C++ MFC</strong> applications using <strong>Visual Studio 2008</strong>.</>,
      <>Studied <strong>C#</strong> with a focus on <strong>OOP</strong> and event-driven programming.</>,
      <>Built a car parking system software project, implementing core logic and system behaviors.</>,
      <>Applied event and delegate mechanisms in <strong>C#</strong> to handle various parking system states and transitions.</>,
    ],
  },
  {
    title: 'Electronics Engineering Internship',
    date: '08/2009 - 09/2009',
    company: 'Siemens - Istanbul, Turkiye',
    details: [
      <>Learned to use <strong>SiPass</strong> and key components of <strong>building automation</strong> systems.</>,
      <>Learned how to design and configure <strong>automation solutions</strong> for large-scale commercial buildings.</>,
      <>Contributed to building automation projects for several 5-star hotels in Istanbul.</>,
    ],
  },
  {
    title: 'Electronics Engineering Internship',
    date: '09/2008 - 10/2008',
    company: 'Istanbul Technical University Control Laboratory - Istanbul, Turkiye',
    details: [
      <>Completed a two-week compulsory internship after the first year of the BSc program.</>,
      <>Collaborated in a team of two to design a voltage source <strong>PCB</strong> as part of an assigned project.</>,
      <>Used <strong>Proteus ARES</strong> for <strong>PCB</strong> layout design in the university laboratory environment.</>,
      <>Designed a circuit featuring an <strong>AC input</strong>, <strong>rectifier</strong>, <strong>555 timer IC</strong>, and <strong>potentiometer</strong>.</>,
      <>Produced a <strong>DC voltage source</strong> capable of outputting -5V, +5V, and adjustable levels in between.</>,
    ],
  },
]

const EDUCATION: Education[] = [
  {
    degree: 'Master of Science: Electronics Engineering',
    school: 'Istanbul Technical University',
    date: '09/2012 - 06/2015',
    focus: 'Istanbul, Turkiye',
  },
  {
    degree: 'Master of Science: Embedded Electronic System Design, Erasmus Program',
    school: 'Chalmers University of Technology',
    date: '09/2013 - 06/2014',
    focus: 'Gothenburg, Sweden',
  },
  {
    degree: 'Bachelor of Science: Computer Engineering - Double Major Program, Major II',
    school: 'Istanbul Technical University',
    date: '09/2008 - 06/2015',
    focus: 'Istanbul, Turkiye',
  },
  {
    degree: 'Bachelor of Science: Electronics Engineering - Double Major Program, Major I',
    school: 'Istanbul Technical University',
    date: '09/2007 - 06/2012',
    focus: 'Istanbul, Turkiye',
  },
]

const REFERENCES: Reference[] = [
  {
    name: 'Yeşim BAYRAMLI',
    role: 'Senior Technical Program Manager at Amazon, Former Manager at Havelsan',
    link: 'https://www.linkedin.com/in/yesim-bayramli',
  },
  {
    name: 'Assoc. Prof. Feza BUZLUCA',
    role: 'Faculty Member, Istanbul Technical University',
    link: 'https://www.linkedin.com/in/feza-buzluca',
  },
  {
    name: 'Anıl ULUTÜRK',
    role: 'Software Engineer at Google, formerly a Software Engineer at Microsoft, Co-worker at Vestek',
    link: 'https://www.linkedin.com/in/anil-uluturk-34b25028/',
    contact: 'Contact Info: +905467910400, aniluluturk@gmail.com',
  },
]

const MainContent = styled('div')({
  width: '65%',
  padding: '0.75rem 2.5rem 3rem',
  boxSizing: 'border-box',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

const SectionCard = styled('div')({
  background: '#ffffff',
  borderRadius: '12px',
  border: '2px solid #e5e7eb',
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
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
  textTransform: 'uppercase',
  color: '#1e3a8a',
  margin: 0,
  borderBottom: '2px solid #1e3a8a',
  paddingBottom: '0.5rem',
})

const SummaryText = styled('p')({
  fontSize: '0.95rem',
  lineHeight: 1.7,
  color: '#334155',
  margin: 0,
})

const ExperienceList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
})

const ExperienceAccordion = styled(Accordion)({
  border: '1px solid #e5e7eb',
  borderRadius: '10px !important',
  background: '#f8fafc',
  boxShadow: 'none',
  overflow: 'hidden',
  transition: 'all 0.2s ease',

  '&:before': {
    display: 'none',
  },

  '&:hover': {
    borderColor: '#1e3a8a',
    boxShadow: '0 6px 18px rgba(30, 58, 138, 0.12)',
    transform: 'translateY(-2px)',
  },

  '&.Mui-expanded': {
    margin: 0,
    borderColor: '#1e3a8a',
  },
})

const ExperienceSummary = styled(AccordionSummary)({
  padding: 0,
  background: '#f8fafc',
  '& .MuiAccordionSummary-content': {
    margin: 0,
    padding: '1.35rem 1.6rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0,
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#1e3a8a',
    transition: 'color 0.2s ease',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    color: '#2563eb',
  },
  '&:hover': {
    background: '#e0f2fe',
  },
  '&:hover .MuiAccordionSummary-expandIconWrapper': {
    color: '#2563eb',
  },
})

const ExperienceDetails = styled(AccordionDetails)({
  padding: '1.15rem 1.6rem 1.5rem',
  background: '#ffffff',
  borderTop: '1px solid #e2e8f0',
})

const SummaryContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

const JobHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '1rem',
  flexWrap: 'wrap',
})

const JobTitle = styled('h3')({
  fontSize: '1.05rem',
  fontWeight: '700',
  color: '#1e3a8a',
  margin: 0,
})

const JobDate = styled('span')({
  fontSize: '0.85rem',
  fontWeight: '600',
  color: '#2563eb',
})

const JobCompany = styled('p')({
  fontSize: '0.95rem',
  color: '#334155',
  margin: 0,
  fontWeight: '500',
})

const JobDescription = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,

  '& li': {
    fontSize: '0.9rem',
    lineHeight: 1.7,
    color: '#475569',
    marginBottom: '0.5rem',
    paddingLeft: '1.2rem',
    position: 'relative',

    '&:before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: '#0ea5e9',
      fontWeight: 'bold',
    },

    '& strong': {
      color: '#1e3a8a',
    },

    '&:last-child': {
      marginBottom: 0,
    },
  },
})

const EducationList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

const EducationItem = styled('div')({
  padding: '1.35rem 1.6rem',
  borderRadius: '14px',
  border: '1px solid #e5e7eb',
  background: '#f8fafc',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  transition: 'all 0.2s ease',
  boxShadow: '0 0 0 rgba(30, 58, 138, 0)',

  '&:hover': {
    borderColor: '#1e3a8a',
    background: '#e0f2fe',
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 25px rgba(30, 58, 138, 0.18)',
  },
})

const EducationSchool = styled('h3')({
  fontSize: '1.05rem',
  fontWeight: '700',
  letterSpacing: '-0.3px',
  color: '#1e3a8a',
  margin: 0,
})

const EducationMeta = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '0.6rem',
})

const EducationDate = styled('span')({
  fontSize: '0.85rem',
  fontWeight: '600',
  color: '#2563eb',
})

const EducationFocus = styled('span')({
  fontSize: '0.85rem',
  color: '#475569',
  fontWeight: '500',
})

const EducationDegree = styled('p')({
  fontSize: '0.9rem',
  color: '#334155',
  margin: 0,
  lineHeight: 1.6,
})

const ReferenceList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

const ReferenceItem = styled('div')({
  padding: '1rem 1.25rem',
  borderRadius: '10px',
  border: '1px solid #e5e7eb',
  background: '#f8fafc',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  transition: 'all 0.2s ease',

  '&:hover': {
    borderColor: '#1e3a8a',
    background: '#e0f2fe',
    transform: 'translateY(-2px)',
  },
})

const ReferenceName = styled('h3')({
  fontSize: '0.95rem',
  fontWeight: '700',
  color: '#1e3a8a',
  margin: 0,
})

const ReferenceRole = styled('p')({
  fontSize: '0.85rem',
  color: '#334155',
  margin: 0,
  lineHeight: 1.5,
})

const ReferenceLink = styled('a')({
  fontSize: '0.85rem',
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s ease',

  '&:hover': {
    color: '#1e3a8a',
    textDecoration: 'underline',
  },
})

const ReferenceContact = styled('p')({
  fontSize: '0.8rem',
  color: '#64748b',
  margin: 0,
})

export default function RightSide() {
  return (
    <MainContent>
      <SectionCard>
        <SectionTitle>Professional Summary</SectionTitle>
        <SummaryText>
          Software Engineer with extensive experience in B2B, finance, and defense industries. Skilled in designing
          and developing scalable software using JavaScript, Java, C#, C/C++, and Python. Experienced with frameworks
          such as Node.js, React, Java Spring, Django, Flask, and the .NET stack (WebForms, MVC, .NET Core), with a
          focus on building reliable microservices. Committed to continuous learning and adept at applying AI-assisted
          tools to enhance software quality and team productivity. Holds a double major B.Sc. and an M.Sc. in
          Electronics Engineering from Istanbul Technical University, combining strong technical foundations with
          hands-on industry experience.
        </SummaryText>
      </SectionCard>

      <SectionCard>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceList>
          {WORK_EXPERIENCES.map((experience) => (
            <ExperienceAccordion key={`${experience.title}-${experience.date}`}>
              <ExperienceSummary expandIcon={<ExpandMoreIcon />}>
                <SummaryContent>
                  <JobHeader>
                    <JobTitle>{experience.title}</JobTitle>
                    <JobDate>{experience.date}</JobDate>
                  </JobHeader>
                  <JobCompany>{experience.company}</JobCompany>
                </SummaryContent>
              </ExperienceSummary>
              <ExperienceDetails>
                <JobDescription>
                  {experience.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </JobDescription>
              </ExperienceDetails>
            </ExperienceAccordion>
          ))}
        </ExperienceList>
      </SectionCard>

      <SectionCard>
        <SectionTitle>Education</SectionTitle>
        <EducationList>
          {EDUCATION.map((education) => (
            <EducationItem key={`${education.degree}-${education.date}`}>
              <EducationDegree>{education.degree}</EducationDegree>
              <EducationSchool>{education.school}</EducationSchool>
              <EducationMeta>
                <EducationDate>{education.date}</EducationDate>
                {education.focus ? <EducationFocus>{education.focus}</EducationFocus> : null}
              </EducationMeta>
            </EducationItem>
          ))}
        </EducationList>
      </SectionCard>

      <SectionCard>
        <SectionTitle>References</SectionTitle>
        <ReferenceList>
          {REFERENCES.map((reference) => (
            <ReferenceItem key={reference.name}>
              <ReferenceName>{reference.name}</ReferenceName>
              <ReferenceRole>{reference.role}</ReferenceRole>
              <ReferenceLink href={reference.link} target="_blank" rel="noopener noreferrer">
                {reference.link}
              </ReferenceLink>
              {reference.contact ? <ReferenceContact>{reference.contact}</ReferenceContact> : null}
            </ReferenceItem>
          ))}
        </ReferenceList>
      </SectionCard>
    </MainContent>
  )
}
