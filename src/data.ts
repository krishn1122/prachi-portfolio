export const AVATAR_URL = 'https://github.com/PrachiGoyal123.png';

export const PERSON = {
  name: 'Prachi Goyal',
  role: 'Business Analyst | Project Coordinator',
  email: 'prachigoyal7302@gmail.com',
  location: 'Aligarh, Uttar Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/prachigoyal24/',
  github: 'https://github.com/PrachiGoyal123',
  resumeView: 'https://drive.google.com/file/d/1giKlt8cgvfUdVZC26G_x9pS_rhrtuHpW/view?usp=drive_link',
  resumeDownload: 'https://drive.google.com/uc?export=download&id=1giKlt8cgvfUdVZC26G_x9pS_rhrtuHpW',
} as const;

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const;

export const ROTATING_ROLES = [
  'BUSINESS ANALYST',
  'PROJECT COORDINATOR',
  'REQUIREMENT GATHERING',
  'AGILE DELIVERY',
  'STAKEHOLDER MANAGEMENT',
  'UAT & RELEASE COORDINATION',
] as const;

export const OFFERINGS = [
  {
    title: 'Requirement Gathering & Documentation',
    description: 'Elicitation sessions with clients and stakeholders, documented as BRD, FRD, SRS, use cases, user stories and acceptance criteria.',
    icon: 'clipboard',
  },
  {
    title: 'Agile Project Coordination',
    description: 'Sprint planning, backlog and priority management, RAID tracking, daily stand-ups and regular status reporting.',
    icon: 'workflow',
  },
  {
    title: 'Process & Gap Analysis',
    description: 'AS-IS and TO-BE process flows, gap, impact and feasibility analysis, and a traceability matrix from requirement to release.',
    icon: 'git',
  },
  {
    title: 'Testing & Release Support',
    description: 'API testing in Postman, UAT scenarios and execution with stakeholders, defect and change-request tracking through to sign-off.',
    icon: 'test',
  },
] as const;

export const GLANCE_ROWS = [
  ['Experience', '2 Years'],
  ['Current Focus', 'Business Analysis & Project Coordination'],
  ['Education', 'B.Tech, Computer Science'],
  ['CGPA', '8.73 / 10.0'],
  ['Location', 'Aligarh, Uttar Pradesh, India'],
  ['Availability', 'Open to Work'],
] as const;

export const EXPERIENCE = [
  {
    role: 'Project Coordinator',
    company: 'CV Infotech',
    location: 'Gurugram, Haryana',
    dates: 'Apr 2026 – Jun 2026',
    bullets: [
      'Coordinated end-to-end delivery for a US-based client, from requirement discussions and development tracking through QA, UAT, release and handover.',
      'Managed the sprint backlog, task priorities, dependencies and blockers in Jira, and supported Agile ceremonies — sprint planning, backlog refinement, daily stand-ups, sprint reviews and retrospectives.',
      'Maintained 100% SLA compliance on assigned deliverables by tracking due dates, following up on pending items and escalating delays before they hit timelines.',
      'Tracked risks, issues and dependencies in a RAID log, and worked with the DevOps team on environment readiness, CI/CD builds, deployment dependencies and release schedules for production go-live.',
      'Prepared status reports, minutes of meeting, action item trackers and handover documents, and shared regular updates with the client and internal stakeholders.',
    ],
    pills: ['Jira', 'Agile', 'Scrum', 'RAID Log', 'CI/CD Coordination', 'SLA Tracking', 'Release Management'],
  },
  {
    role: 'Business Analyst',
    company: 'WDP Technologies Pvt. Ltd.',
    location: 'Jaipur, Rajasthan',
    dates: 'Oct 2024 – Mar 2026',
    bullets: [
      'Gathered requirements from clients and stakeholders through discussions, workshops and elicitation sessions, and documented them as BRD, FRD, SRS, use cases, epics, user stories and acceptance criteria.',
      'Prepared AS-IS and TO-BE process flows and carried out gap, impact and feasibility analysis.',
      'Prioritised the product backlog with stakeholders and maintained the Requirement Traceability Matrix from requirement through to release.',
      'Tested REST APIs and third-party integrations in Postman — checking requests and responses, parameters, status codes and payload data.',
      'Wrote UAT test scenarios and test plans, ran UAT with stakeholders, and tracked defects and change requests till sign-off after assessing business impact, effort, dependencies and timeline impact.',
      'Reviewed wireframes, prototypes and user flows with the UI/UX team so the screens matched the agreed requirements.',
      'Worked across multiple domains, from requirement gathering through delivery and post-release improvements.',
    ],
    pills: ['BRD / FRD / SRS', 'User Stories', 'RTM', 'Postman', 'REST APIs', 'UAT', 'Figma', 'Jira'],
  },
  {
    role: 'Business Analyst Intern',
    company: 'IMG Global Infotech Pvt. Ltd.',
    location: 'Jaipur, Rajasthan',
    dates: 'Jun 2024 – Sep 2024',
    bullets: [
      'Worked on RFP and RFQ documents to understand client requirements, project scope, deliverables, timelines and technical expectations.',
      'Maintained proposal documentation and made sure client requirements were addressed accurately and completely.',
      'Supported the team in pre-bid discussions, requirement clarification and follow-ups with internal stakeholders.',
      'Supported client presentations, proposal revisions and responses to client queries.',
    ],
    pills: ['RFP / RFQ', 'Proposal Documentation', 'Requirement Clarification', 'Stakeholder Communication'],
  },
] as const;

export const SKILL_GROUPS = [
  {
    title: 'Business Analysis',
    icon: 'analysis',
    skills: ['Requirement Gathering & Elicitation', 'BRD / FRD / SRS', 'Use Cases, Epics & User Stories', 'Acceptance Criteria', 'AS-IS / TO-BE Process Mapping', 'Gap & Impact Analysis', 'Requirement Traceability Matrix (RTM)', 'UAT', 'RFP / RFQ Documentation'],
  },
  {
    title: 'Project Coordination',
    icon: 'coordination',
    skills: ['Agile', 'Scrum', 'Kanban', 'Waterfall', 'SDLC', 'Sprint Planning', 'Backlog Management', 'Scope Management', 'RAID (Risk & Issue) Tracking', 'Change Management', 'Release Coordination', 'SLA Tracking', 'Status Reporting', 'Stakeholder Management'],
  },
  {
    title: 'Technical Exposure',
    icon: 'technical',
    skills: ['REST APIs', 'API Testing (Postman)', 'SQL', 'CI/CD & Deployment Coordination', 'AWS Cloud (working exposure)'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'tools',
    skills: ['Jira', 'ClickUp', 'Notion', 'Postman', 'Power BI', 'Figma', 'Whimsical', 'draw.io', 'MS Excel', 'MS Teams', 'Slack'],
  },
  {
    title: 'AI Tools',
    icon: 'ai',
    skills: ['ChatGPT', 'Claude', 'Fireflies AI', 'Otter AI'],
  },
  {
    title: 'Soft Skills',
    icon: 'soft',
    skills: ['Stakeholder Communication', 'Problem Solving', 'Decision Making', 'Time Management', 'Adaptability'],
  },
] as const;

export const CERTIFICATES = [
  { title: 'Project Management Fundamentals', issuer: 'IBM', certificateUrl: '' },
  { title: 'Google Sheets', issuer: 'Google Cloud Skills Boost', certificateUrl: '' },
  { title: 'Project Tracking App with AppSheet', issuer: 'Google Cloud Skills Boost', certificateUrl: '' },
  { title: 'Postman API Fundamentals Student Expert', issuer: 'Postman', certificateUrl: '' },
] as const;