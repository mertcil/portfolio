'use client'

import { styled } from '@mui/material/styles'

const Container = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  background: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
})

const Sidebar = styled('div')({
  width: '35%',
  background: '#1e3a8a',
  color: '#ffffff',
  padding: '2rem 1.5rem',
  overflowY: 'auto',
})

const MainContent = styled('div')({
  width: '65%',
  padding: '3rem 2.5rem',
  overflowY: 'auto',
})

const Name = styled('h1')({
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '1.5rem',
  color: '#ffffff',
  margin: 0,
})

const Section = styled('div')({
  marginBottom: '2.5rem',
  paddingBottom: '1.5rem',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  '&:last-child': {
    borderBottom: 'none',
  },
})

const SectionTitle = styled('h2')({
  fontSize: '0.95rem',
  fontWeight: '700',
  letterSpacing: '0.05em',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  color: '#ffffff',
  borderBottom: '2px solid rgba(255,255,255,0.3)',
  paddingBottom: '0.5rem',
})

const RightSectionTitle = styled('h2')({
  fontSize: '1.3rem',
  fontWeight: '700',
  color: '#2563eb',
  marginBottom: '0.8rem',
  marginTop: '1rem',
  '&:first-of-type': {
    marginTop: 0,
  },
})

const ItemTitle = styled('div')({
  fontSize: '0.95rem',
  fontWeight: '600',
  marginBottom: '0.25rem',
  color: '#ffffff',
})

const ItemSubtitle = styled('div')({
  fontSize: '0.85rem',
  color: 'rgba(255,255,255,0.8)',
  marginBottom: '0.5rem',
})

const ItemText = styled('div')({
  fontSize: '0.85rem',
  lineHeight: '1.5',
  color: 'rgba(255,255,255,0.9)',
  marginBottom: '0.75rem',

  '& ul': {
    margin: '0.5rem 0',
    paddingLeft: '1.2rem',
  },
  '& li': {
    marginBottom: '0.25rem',
  },
})

const SkillCategory = styled('div')({
  marginBottom: '0.7rem',
})

const SkillName = styled('div')({
  fontSize: '0.85rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: '#ffffff',
})

const SkillList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,

  '& li': {
    fontSize: '0.8rem',
    lineHeight: '1.4',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '0.25rem',
  },
})

const RightJobEntry = styled('div')({
  marginBottom: '1.5rem',
})

const JobHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '0.5rem',
  gap: '1rem',
})

const JobTitle = styled('h3')({
  fontSize: '1rem',
  fontWeight: '700',
  color: '#1e3a8a',
  margin: 0,
})

const JobDate = styled('span')({
  fontSize: '0.85rem',
  color: '#666666',
  whiteSpace: 'nowrap',
})

const JobCompany = styled('p')({
  fontSize: '0.9rem',
  color: '#1e3a8a',
  margin: '0 0 0.5rem 0',
  fontWeight: '500',
})

const JobDescription = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,

  '& li': {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: '#1e3a8a',
    marginBottom: '0.5rem',
    paddingLeft: '1.2rem',
    position: 'relative',

    '&:before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      fontWeight: 'bold',
    },

    '& strong': {
      fontWeight: '700',
    },
  },
})

const EducationEntry = styled('div')({
  marginBottom: '1.2rem',
})

const EduDegree = styled('h3')({
  fontSize: '0.95rem',
  fontWeight: '700',
  color: '#1e3a8a',
  margin: '0 0 0.25rem 0',
})

const EduSchool = styled('p')({
  fontSize: '0.9rem',
  color: '#1e3a8a',
  margin: '0 0 0.25rem 0',
  fontWeight: '500',
})

const EduDate = styled('p')({
  fontSize: '0.85rem',
  color: '#666666',
  margin: 0,
})

const ReferenceEntry = styled('div')({
  marginBottom: '1.2rem',
})

const ReferenceName = styled('h3')({
  fontSize: '0.95rem',
  fontWeight: '700',
  color: '#1e3a8a',
  margin: '0 0 0.25rem 0',
})

const ReferenceRole = styled('p')({
  fontSize: '0.85rem',
  color: '#1e3a8a',
  margin: '0 0 0.25rem 0',
  lineHeight: '1.4',
})

const ReferenceLink = styled('a')({
  fontSize: '0.85rem',
  color: '#2563eb',
  textDecoration: 'none',
  display: 'inline-block',
  marginBottom: '0.25rem',

  '&:hover': {
    textDecoration: 'underline',
  },
})

const ReferenceContact = styled('p')({
  fontSize: '0.8rem',
  color: '#666666',
  margin: 0,
})

export default function Resume() {
  return (
    <Container>
      {/* LEFT SIDEBAR */}
      <Sidebar>
        <Name>MEVLÜT MERT ÇİL</Name>

        {/* CONTACT */}
        <Section>
          <SectionTitle>Contact</SectionTitle>
          <ItemText>
            📧 mevlutmert.cil@gmail.com
            <br />
            📱 +90 538 213 77 97
            <br />
            🚗 Driving licence (B)
            <br />
            📍 Turkiye
            <br />
            🗣️ Turkish
          </ItemText>
        </Section>

        {/* SKILLS */}
        <Section>
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
        </Section>

        {/* ACCOMPLISHMENTS */}
        <Section>
          <SectionTitle>Accomplishments</SectionTitle>
          <SkillList>
            <li>Double Major and a MSc Degree holder from Istanbul Technical University</li>
            <li>GPA &gt; 3.0 all terms</li>
            <li>Ranked in the top 0.36% nationwide in Turkey's university entrance exam</li>
          </SkillList>
        </Section>

        {/* NETWORK */}
        <Section>
          <SectionTitle>Network</SectionTitle>
          <ItemText>@mertcil</ItemText>
        </Section>

        {/* LANGUAGES */}
        <Section>
          <SectionTitle>Languages</SectionTitle>
          <SkillList>
            <li>Turkish</li>
            <li>English</li>
          </SkillList>
        </Section>

        {/* INTERESTS */}
        <Section>
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
        </Section>
      </Sidebar>

      {/* RIGHT MAIN CONTENT */}
      <MainContent>
        {/* PROFESSIONAL SUMMARY */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#1e3a8a', margin: 0 }}>
            Software Engineer with extensive experience in B2B, finance, and defense industries. Skilled in designing
            and developing scalable software using JavaScript, Java, C#, C/C++, and Python. Experienced with
            frameworks such as Node.js, React, Java Spring, Django, Flask, and the .NET stack (WebForms, MVC, .NET
            Core), with a focus on building reliable microservices. Committed to continuous learning and adept at
            applying AI-assisted tools to enhance software quality and team productivity. Holds a double major B.Sc. and
            an M.Sc. in Electronics Engineering from Istanbul Technical University, combining strong technical
            foundations with hands-on industry experience.
          </p>
        </div>

        {/* WORK EXPERIENCE */}
        <RightSectionTitle>Work Experience</RightSectionTitle>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Senior Software Development Engineer</JobTitle>
            <JobDate>01/2020 - Current</JobDate>
          </JobHeader>
          <JobCompany>Havelsan - Ankara, Turkiye</JobCompany>
          <JobDescription>
            <li>Contributed to the design, development, and testing of <strong>Diyalog</strong>, a <strong>WebRTC</strong>-based online meeting platform, as part of a full-stack engineering team.</li>
            <li>Developed front-end features using <strong>ReactJS</strong> with <strong>ES6</strong> and <strong>TypeScript</strong>.</li>
            <li>Built back-end services with <strong>Node.js</strong>, using both <strong>CommonJS</strong> and <strong>TypeScript</strong> modules.</li>
            <li>Worked with <strong>WebRTC (C++)</strong> and integrated various streaming libraries for real-time communication.</li>
            <li>Used <strong>Redis</strong> for caching and <strong>PostgreSQL</strong> for relational data storage.</li>
            <li>Collaborated through <strong>Atlassian</strong> tools including <strong>Jira</strong>, <strong>Confluence</strong>, and <strong>Bitbucket</strong>, and used <strong>WebStorm</strong> as the primary development environment.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Software Development Engineer</JobTitle>
            <JobDate>02/2019 - 01/2020</JobDate>
          </JobHeader>
          <JobCompany>Havelsan - Ankara, Turkiye</JobCompany>
          <JobDescription>
            <li>Participated in the design, development, and testing of a <strong>5G</strong> core network system as part of a full-stack engineering team.</li>
            <li>Developed backend services using <strong>Spring Boot MVC</strong> with <strong>Java 8–11</strong>, along with <strong>Ignite Cache</strong>, <strong>Kafka</strong>, and <strong>JUnit 4</strong> for data processing and testing.</li>
            <li>Implemented internal tools in <strong>Python 3</strong>, including parsers and auto-code generators to accelerate development processes.</li>
            <li>Utilized <strong>Swagger</strong> for API documentation, integrated CI/CD pipelines with <strong>Jenkins</strong>, and performed development and debugging in <strong>IntelliJ IDEA</strong> and <strong>VS Code</strong>.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Software Development Engineer</JobTitle>
            <JobDate>06/2018 - 11/2018</JobDate>
          </JobHeader>
          <JobCompany>Garanti Technology, BBVA Group - Istanbul, Turkiye</JobCompany>
          <JobDescription>
            <li>Performed full-stack development and platform modernization, transitioning the system from <strong>C# (.NET)</strong> to <strong>Java (Spring MVC)</strong> to enhance scalability and long-term maintainability.</li>
            <li>Migrated a legacy <strong>ASP.NET WebForms</strong> application (<strong>C# .NET 4.0</strong> with <strong>Microsoft SQL Server 2012/2014</strong>) for a car fleet management system used by a major bank to a modular <strong>Java Spring MVC (v4.3)</strong> architecture with <strong>Hibernate ORM</strong>, rewriting business logic and optimizing data access through queries and stored procedures in the existing SQL Server database.</li>
            <li>Built dynamic web interfaces using <strong>JSP</strong>, integrated with the <strong>Spring MVC</strong> backend to enable responsive and user-friendly interactions.</li>
            <li>Utilized <strong>Swagger</strong> for API documentation and collaborated on CI/CD processes using <strong>Jenkins</strong>.</li>
            <li>Used <strong>GitHub</strong>, <strong>Bitbucket</strong>, and <strong>Team Foundation Server (TFS)</strong> for version control and team collaboration in a multi-repository environment.</li>
            <li>Worked in both <strong>IntelliJ IDEA</strong> and <strong>Visual Studio 2015</strong> for cross-platform development, debugging, and deployment.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Software Development Engineer</JobTitle>
            <JobDate>10/2015 - 06/2018</JobDate>
          </JobHeader>
          <JobCompany>Vestek (R&D Department of Vestel Corporation) - Istanbul, Turkiye</JobCompany>
          <JobDescription>
            <li>Developed and maintained <strong>Linux</strong>-based B2B embedded software using <strong>C/C++</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, and <strong>HTML</strong>.</li>
            <li>Built an automated build-bot system in <strong>Python</strong> to streamline deployment.</li>
            <li>Created <strong>JavaScript</strong> unit tests with <strong>Jasmine</strong> to improve code quality.</li>
            <li>Implemented features and fixed bugs in <strong>C/C++</strong> for the embedded operating systems powering set-top box TV units.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Computer Engineering Internship</JobTitle>
            <JobDate>07/2012 - 08/2012</JobDate>
          </JobHeader>
          <JobCompany>Inveon Information Technologies Consultancy and Trading Corp. - Istanbul, Turkiye</JobCompany>
          <JobDescription>
            <li>Developed web applications for international and local clients using <strong>ASP.NET MVC 3</strong> and the <strong>nopCommerce</strong> platform.</li>
            <li>Built responsive UIs with <strong>HTML4</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>; developed backend logic in <strong>C#</strong>.</li>
            <li>Implemented <strong>CSV</strong>-based multilingual support for easy content management.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Computer Engineering Internship</JobTitle>
            <JobDate>06/2011 - 07/2011</JobDate>
          </JobHeader>
          <JobCompany>MBIS Computer Automation Consultancy and Education Services - Istanbul, Turkiye</JobCompany>
          <JobDescription>
            <li>Gained hands-on experience in <strong>SAP</strong> development with a focus on the <strong>ABAP</strong> programming language.</li>
            <li>Developed basic arithmetic programs in <strong>ABAP</strong> as part of training progression.</li>
            <li>Completed a full software module that retrieves data from <strong>SAP</strong> databases and prepares it for <strong>PDF</strong> output.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Electronics Engineering Internship</JobTitle>
            <JobDate>08/2010 - 09/2010</JobDate>
          </JobHeader>
          <JobCompany>Arçelik Corporation - Istanbul, Turkiye</JobCompany>
          <JobDescription>
            <li>Designed and produced a custom <strong>PCB</strong> for a fan driver circuit.</li>
            <li>Developed a voltage source circuit capable of generating square and triangular waveforms on <strong>PCB</strong>.</li>
            <li>Created a <strong>C# WinForms</strong> application to simplify circuit calculations and support engineering workflows.</li>
            <li>Performed measurement and quality control procedures on TV units in the TV department of Arçelik to evaluate performance and compliance.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Computer Engineering Internship</JobTitle>
            <JobDate>06/2010 - 07/2010</JobDate>
          </JobHeader>
          <JobCompany>EvolineTR - Istanbul, Turkiye</JobCompany>
          <JobDescription>
            <li>Gained hands-on experience with <strong>C++ MFC</strong> applications using <strong>Visual Studio 2008</strong>.</li>
            <li>Studied <strong>C#</strong> with a focus on <strong>OOP</strong> and event-driven programming.</li>
            <li>Built a car parking system software project, implementing core logic and system behaviors.</li>
            <li>Applied event and delegate mechanisms in <strong>C#</strong> to handle various parking system states and transitions.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Electronics Engineering Internship</JobTitle>
            <JobDate>08/2009 - 09/2009</JobDate>
          </JobHeader>
          <JobCompany>Siemens - Istanbul, Turkiye</JobCompany>
          <JobDescription>
            <li>Learned to use <strong>SiPass</strong> and key components of <strong>building automation</strong> systems.</li>
            <li>Learned how to design and configure <strong>automation solutions</strong> for large-scale commercial buildings.</li>
            <li>Contributed to building automation projects for several 5-star hotels in Istanbul.</li>
          </JobDescription>
        </RightJobEntry>

        <RightJobEntry>
          <JobHeader>
            <JobTitle>Electronics Engineering Internship</JobTitle>
            <JobDate>09/2008 - 10/2008</JobDate>
          </JobHeader>
          <JobCompany>Istanbul Technical University Control Laboratory - Istanbul, Turkiye</JobCompany>
          <JobDescription>
            <li>Completed a two-week compulsory internship after the first year of the BSc program.</li>
            <li>Collaborated in a team of two to design a voltage source <strong>PCB</strong> as part of an assigned project.</li>
            <li>Used <strong>Proteus ARES</strong> for <strong>PCB</strong> layout design in the university laboratory environment.</li>
            <li>Designed a circuit featuring an <strong>AC input</strong>, <strong>rectifier</strong>, <strong>555 timer IC</strong>, and <strong>potentiometer</strong>.</li>
            <li>Produced a <strong>DC voltage source</strong> capable of outputting -5V, +5V, and adjustable levels in between.</li>
          </JobDescription>
        </RightJobEntry>

        {/* EDUCATION */}
        <RightSectionTitle>Education</RightSectionTitle>

        <EducationEntry>
          <EduDegree>Master of Science: Electronics Engineering</EduDegree>
          <EduSchool>Istanbul Technical University, Istanbul, Turkiye</EduSchool>
          <EduDate>09/2012 - 06/2015</EduDate>
        </EducationEntry>

        <EducationEntry>
          <EduDegree>Master of Science: Embedded Electronic System Design, Erasmus Program</EduDegree>
          <EduSchool>Chalmers University of Technology, Gothenburg, Sweden</EduSchool>
          <EduDate>09/2013 - 06/2014</EduDate>
        </EducationEntry>

        <EducationEntry>
          <EduDegree>Bachelor of Science: Computer Engineering - Double Major Program, Major II</EduDegree>
          <EduSchool>Istanbul Technical University, Istanbul, Turkiye</EduSchool>
          <EduDate>09/2008 - 06/2015</EduDate>
        </EducationEntry>

        <EducationEntry>
          <EduDegree>Bachelor of Science: Electronics Engineering - Double Major Program, Major I</EduDegree>
          <EduSchool>Istanbul Technical University, Istanbul, Turkiye</EduSchool>
          <EduDate>09/2007 - 06/2012</EduDate>
        </EducationEntry>

        {/* REFERENCES */}
        <RightSectionTitle>References</RightSectionTitle>

        <ReferenceEntry>
          <ReferenceName>Yeşim BAYRAMLI</ReferenceName>
          <ReferenceRole>Senior Technical Program Manager at Amazon, Former Manager at Havelsan</ReferenceRole>
          <ReferenceLink href="https://www.linkedin.com/in/yesim-bayramli" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/yesim-bayramli
          </ReferenceLink>
        </ReferenceEntry>

        <ReferenceEntry>
          <ReferenceName>Assoc. Prof. Feza BUZLUCA</ReferenceName>
          <ReferenceRole>Faculty Member, Istanbul Technical University</ReferenceRole>
          <ReferenceLink href="https://www.linkedin.com/in/feza-buzluca" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/feza-buzluca
          </ReferenceLink>
        </ReferenceEntry>

        <ReferenceEntry>
          <ReferenceName>Anıl ULUTÜRK</ReferenceName>
          <ReferenceRole>Software Engineer at Google, formerly a Software Engineer at Microsoft, Co-worker at Vestek</ReferenceRole>
          <ReferenceLink href="https://www.linkedin.com/in/anil-uluturk-34b25028/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/anil-uluturk-34b25028/
          </ReferenceLink>
          <ReferenceContact>Contact Info: +905467910400, aniluluturk@gmail.com</ReferenceContact>
        </ReferenceEntry>
      </MainContent>
    </Container>
  )
}
