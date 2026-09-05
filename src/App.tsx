import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  ClipboardList,
  CloudCog,
  Download,
  FileCheck2,
  FileText,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  TestTube2,
  UserRound,
  UsersRound,
  Workflow,
  Wrench,
  X,
} from 'lucide-react';
import {
  AVATAR_URL,
  CERTIFICATES,
  EXPERIENCE,
  GLANCE_ROWS,
  NAV_ITEMS,
  OFFERINGS,
  PERSON,
  ROTATING_ROLES,
  SKILL_GROUPS,
} from './data';

type IconName = (typeof OFFERINGS)[number]['icon'] | (typeof SKILL_GROUPS)[number]['icon'];

function GitHubMark({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.18c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18A11 11 0 0 1 12 6.15c.97 0 1.94.13 2.85.38 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.77.11 3.06.73.8 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInMark({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.07 3.44A2.43 2.43 0 1 1 .2 3.44a2.43 2.43 0 0 1 4.87 0ZM.55 8h4.52v14.5H.55V8ZM7.72 8h4.34v1.98h.06c.6-1.14 2.08-2.34 4.28-2.34 4.57 0 5.42 3 5.42 6.89v7.97h-4.52v-7.06c0-1.68-.03-3.85-2.35-3.85-2.36 0-2.72 1.84-2.72 3.73v7.18H7.72V8Z" />
    </svg>
  );
}

function IconFor({ name, size = 18 }: { name: IconName; size?: number }) {
  const props = { size, strokeWidth: 1.6 };
  const icons: Record<IconName, ReactNode> = {
    clipboard: <ClipboardList {...props} />,
    workflow: <Workflow {...props} />,
    git: <GitBranch {...props} />,
    test: <TestTube2 {...props} />,
    analysis: <FileText {...props} />,
    coordination: <BriefcaseBusiness {...props} />,
    technical: <CloudCog {...props} />,
    tools: <Wrench {...props} />,
    ai: <Sparkles {...props} />,
    soft: <UsersRound {...props} />,
  };
  return icons[name];
}

function ExternalProps() {
  return { target: '_blank', rel: 'noopener noreferrer' } as const;
}

function ResumeSplit({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`resume-split ${compact ? 'resume-compact' : ''}`} role="group" aria-label="Resume actions" data-testid="resume-actions">
      <a href={PERSON.resumeView} {...ExternalProps()} data-testid="link-resume-view">Resume</a>
      <a href={PERSON.resumeDownload} {...ExternalProps()} aria-label="Download Resume" title="Download Resume" data-testid="link-resume-download">
        <Download size={15} strokeWidth={2} aria-hidden="true" />
      </a>
    </div>
  );
}

function Brand() {
  const [avatarFailed, setAvatarFailed] = useState(false);
  return (
    <a className="brand" href="#top" data-testid="link-brand" aria-label="Back to top">
      <span className="brand-avatar">
        {avatarFailed ? <UserRound size={19} color="#8a8a8a" aria-label="Avatar fallback" /> : (
          <img src={AVATAR_URL} alt="Prachi Goyal" onError={() => setAvatarFailed(true)} data-testid="img-avatar" />
        )}
      </span>
      <span>{PERSON.name}</span>
    </a>
  );
}

function SocialActions() {
  return (
    <>
      <a className="icon-button" href={PERSON.github} {...ExternalProps()} aria-label="View GitHub Profile" title="View GitHub Profile" data-testid="link-github-header"><GitHubMark /></a>
      <a className="icon-button" href={PERSON.linkedin} {...ExternalProps()} aria-label="View LinkedIn Profile" title="View LinkedIn Profile" data-testid="link-linkedin-header"><LinkedInMark /></a>
    </>
  );
}

function Navbar({ activeSection, heroVisible }: { activeSection: string; heroVisible: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnOutside = (event: MouseEvent) => {
      if (mobileOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) setMobileOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('mousedown', closeOnOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? 'is-scrolled' : ''}`} data-testid="site-header">
      <div className="container-wide header-inner">
        <Brand />
        <nav className="header-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`} href={`#${item.id}`} onClick={() => handleNav(item.id)} data-testid={`link-nav-${item.id}`}>{item.label}</a>
          ))}
        </nav>
        <div className={`header-actions ${heroVisible ? 'is-hidden' : ''}`} aria-hidden={heroVisible}>
          <SocialActions />
          <ResumeSplit compact />
        </div>
        <button className="mobile-menu-toggle" type="button" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)} data-testid="button-mobile-menu">
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      <div className={`mobile-panel ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`} href={`#${item.id}`} onClick={() => handleNav(item.id)} data-testid={`link-mobile-nav-${item.id}`}>{item.label}</a>
        ))}
        <div className="mobile-panel-actions">
          <a className="icon-button" href={PERSON.github} {...ExternalProps()} aria-label="View GitHub Profile" title="View GitHub Profile" data-testid="link-github-mobile"><GitHubMark /></a>
          <a className="icon-button" href={PERSON.linkedin} {...ExternalProps()} aria-label="View LinkedIn Profile" title="View LinkedIn Profile"><LinkedInMark /></a>
          <ResumeSplit compact />
        </div>
      </div>
    </header>
  );
}

function Typewriter() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const full = ROTATING_ROLES[roleIndex];
    const delay = deleting ? 38 : typed.length === full.length ? 1450 : 68;
    const timer = window.setTimeout(() => {
      if (!deleting && typed.length < full.length) setTyped(full.slice(0, typed.length + 1));
      else if (!deleting && typed.length === full.length) setDeleting(true);
      else if (deleting && typed.length > 0) setTyped(full.slice(0, typed.length - 1));
      else {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % ROTATING_ROLES.length);
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, reducedMotion, roleIndex, typed]);

  if (reducedMotion) {
    return <div className="role-static" aria-label="Business Analyst, Project Coordinator, Requirement Gathering, Agile Delivery, Stakeholder Management, UAT and Release Coordination">{ROTATING_ROLES.map((role) => <span key={role}>{role}</span>)}</div>;
  }
  return <><span>{typed}</span><span className="role-cursor" aria-hidden="true" /></>;
}

function Hero() {
  return (
    <section id="top" className="hero section-anchor" aria-labelledby="hero-title" data-testid="section-hero">
      <div className="subtle-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="container-wide">
        <div className="hero-content">
          <div className="open-badge reveal" data-testid="status-open-to-work"><span className="open-badge-dot" />Open to Work</div>
          <h1 id="hero-title" className="reveal delay-1" data-testid="text-hero-name">{PERSON.name}</h1>
          <div className="role-line reveal delay-2" data-testid="text-rotating-role"><Typewriter /></div>
          <p className="hero-intro reveal delay-3">Business Analyst with 2 years of experience turning business requirements into clear documentation and working with delivery teams to take projects from discussion to go-live.</p>
          <div className="hero-actions reveal delay-3">
            <ResumeSplit />
            <a className="secondary-link" href={PERSON.linkedin} {...ExternalProps()} data-testid="link-linkedin-hero"><LinkedInMark size={16} />LinkedIn</a>
            <a className="secondary-link" href={PERSON.github} {...ExternalProps()} data-testid="link-github-hero"><GitHubMark size={16} />GitHub</a>
            <a className="secondary-link" href="#contact" data-testid="link-contact-hero"><Send size={15} />Contact Me</a>
          </div>
        </div>
        <div className="offer-wrap reveal delay-3">
          <p className="offer-heading">What I Offer</p>
          <div className="offer-grid">
            {OFFERINGS.map((offering, index) => (
              <article className="offer-card" key={offering.title} data-testid={`card-offering-${index}`}>
                <span className="offer-icon"><IconFor name={offering.icon} size={20} /></span>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ id, number, eyebrow, title, description }: { id: string; number: string; eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-head">
      <div className="section-head-copy">
        <p className="eyebrow section-kicker"><span>{number}</span>{eyebrow}</p>
        <h2 id={id} className="section-title">{title}</h2>
      </div>
      {description && <p className="body-copy" style={{ maxWidth: 390, margin: 0, color: 'var(--muted-text)' }}>{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section section-anchor" aria-labelledby="about-title" data-testid="section-about">
      <div className="container-wide">
        <SectionHeading id="about-title" number="01" eyebrow="Context" title="Requirements, made clear." description="A delivery partner for teams that need the detail right before the work gets moving." />
        <div className="about-grid">
          <div className="about-copy body-copy">
            <p>I'm a <strong>Business Analyst</strong> with 2 years of experience across service and product-based projects, and I've also handled end-to-end project coordination. My work usually starts at the requirement stage — sitting with clients and stakeholders, understanding what they actually need, and documenting it clearly as <strong>BRD, FRD, SRS, use cases, epics, user stories and acceptance criteria.</strong></p>
            <p>From there I stay with the project through the full cycle: AS-IS and TO-BE process mapping, gap and impact analysis, backlog prioritisation, sprint planning, development tracking, API testing, UAT with stakeholders, defect and change-request management, release coordination with the DevOps team, and post go-live support. I maintain traceability from the first requirement to the final release, so what gets delivered is what the business actually asked for.</p>
            <p>Day to day I work closely with developers, QA, UI/UX and DevOps teams, and I'm comfortable with Agile and Scrum ceremonies as well as Waterfall delivery where the client needs it. My regular toolset includes <strong>Jira, ClickUp, Notion, Postman, Power BI, Figma, draw.io and Excel</strong>, along with AI tools like ChatGPT, Claude and Fireflies AI for meeting notes, documentation and faster analysis — which is now a normal part of how BA and delivery teams work.</p>
            <div className="closing-card"><strong>I hold a B.Tech in Computer Science from Anand International College of Engineering, Jaipur, with an 8.73/10.0 CGPA.</strong> I care about clear requirements, honest status reporting and delivery that holds up in production.</div>
          </div>
          <aside className="glance-card" aria-label="At a glance">
            <header><h3>At a glance</h3></header>
            <dl className="glance-list">
              {GLANCE_ROWS.map(([label, value]) => <div className="glance-row" key={label}><dt>{label}</dt><dd className={label === 'Availability' ? 'available' : ''}>{value}</dd></div>)}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-alt section-anchor" aria-labelledby="experience-title" data-testid="section-experience">
      <div className="container-wide">
        <SectionHeading id="experience-title" number="02" eyebrow="Execution" title="From discussion to go-live." description="The work behind the handoffs: structured, documented and visible to everyone involved." />
        <div className="experience-stack">
          {EXPERIENCE.map((job, index) => (
            <article className="experience-card" key={`${job.company}-${job.role}`} data-testid={`card-experience-${index}`}>
              <div className="experience-top">
                <div><h3>{job.role}</h3><p className="company-line">{job.company} <span aria-hidden="true">·</span> {job.location}</p></div>
                <span className="date-pill">{job.dates}</span>
              </div>
              <ul className="experience-bullets">{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <div className="pill-list">{job.pills.map((pill) => <span className="skill-pill" key={pill}>{pill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-anchor" aria-labelledby="skills-title" data-testid="section-skills">
      <div className="container-wide">
        <SectionHeading id="skills-title" number="03" eyebrow="Working toolkit" title="The full picture, quickly." description="A practical mix of analysis, coordination, technical exposure and tools used across delivery." />
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, index) => (
            <article className="skill-group" key={group.title} data-testid={`card-skill-group-${index}`}>
              <h3 className="skill-group-title"><IconFor name={group.icon} size={19} />{group.title}</h3>
              <div className="pill-list">{group.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section section-alt section-anchor" aria-labelledby="certificates-title" data-testid="section-certificates">
      <div className="container-wide">
        <SectionHeading id="certificates-title" number="04" eyebrow="Credentials" title="Proof of continued learning." />
        <div className="cert-grid">
          {CERTIFICATES.map((certificate, index) => (
            <article className="cert-card" key={certificate.title} data-testid={`card-certificate-${index}`}>
              <BadgeCheck size={21} strokeWidth={1.6} />
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              {certificate.certificateUrl && <a className="cert-link" href={certificate.certificateUrl} {...ExternalProps()} data-testid={`link-certificate-${index}`}>View Certificate <ArrowUpRight size={14} /></a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-anchor" aria-labelledby="contact-title" data-testid="section-contact">
      <div className="container-wide">
        <div className="contact-layout">
          <div className="contact-lead">
            <p className="eyebrow section-kicker"><span>05</span>Next step</p>
            <h2 id="contact-title" className="section-title">Get in Touch</h2>
            <p>Open to Business Analyst and Project Coordinator roles. Feel free to reach out.</p>
            <div className="open-badge"><span className="open-badge-dot" />Open to Work</div>
          </div>
          <div>
            <div className="contact-list">
              <a className="contact-row" href={`mailto:${PERSON.email}`} data-testid="link-email-contact"><Mail size={19} /><span><span className="contact-label">Email</span><span className="contact-value">{PERSON.email}</span></span><ChevronRight size={16} style={{ marginLeft: 'auto' }} /></a>
              <a className="contact-row" href={PERSON.linkedin} {...ExternalProps()} data-testid="link-linkedin-contact"><LinkedInMark size={19} /><span><span className="contact-label">LinkedIn</span><span className="contact-value">linkedin.com/in/prachigoyal24</span></span><ArrowUpRight size={16} style={{ marginLeft: 'auto' }} /></a>
              <a className="contact-row" href={PERSON.github} {...ExternalProps()} data-testid="link-github-contact"><GitHubMark size={19} /><span><span className="contact-label">GitHub</span><span className="contact-value">github.com/PrachiGoyal123</span></span><ArrowUpRight size={16} style={{ marginLeft: 'auto' }} /></a>
              <div className="contact-row" data-testid="text-location-contact"><MapPin size={19} /><span><span className="contact-label">Location</span><span className="contact-value">{PERSON.location}</span></span></div>
            </div>
            <div className="contact-actions"><ResumeSplit /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div><div className="footer-brand">Prachi Goyal</div><p className="footer-tagline">Business Analyst &amp; Project Coordinator<br />Turning business requirements into delivered software.</p></div>
          <div><h3 className="footer-heading">Quick Links</h3><nav className="footer-links" aria-label="Footer navigation">{NAV_ITEMS.map((item) => <a href={`#${item.id}`} onClick={() => goTo(item.id)} key={item.id} data-testid={`link-footer-${item.id}`}>{item.label}</a>)}</nav></div>
          <div><h3 className="footer-heading">Connect</h3><nav className="footer-links" aria-label="Social links"><a href={PERSON.linkedin} {...ExternalProps()} data-testid="link-footer-linkedin"><LinkedInMark size={14} /> LinkedIn</a><a href={PERSON.github} {...ExternalProps()} data-testid="link-footer-github"><GitHubMark size={14} /> GitHub</a><a href={`mailto:${PERSON.email}`} data-testid="link-footer-email"><Mail size={14} /> Email</a><a href={PERSON.resumeView} {...ExternalProps()} data-testid="link-footer-resume"><FileCheck2 size={14} /> Resume</a></nav></div>
        </div>
        <div className="footer-bottom"><span>Designed &amp; built by Prachi Goyal</span><span className="footer-availability">Open to Work</span></div>
      </div>
    </footer>
  );
}

function usePortfolioObservers() {
  const [activeSection, setActiveSection] = useState('about');
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id && visible.target.id !== 'top') setActiveSection(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.4] });
    const sectionNodes = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    sectionNodes.forEach((node) => sectionObserver.observe(node));
    const heroNode = document.getElementById('top');
    const heroObserver = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0.08 });
    if (heroNode) heroObserver.observe(heroNode);
    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return { activeSection, heroVisible };
}

function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}

function App() {
  const { activeSection, heroVisible } = usePortfolioObservers();
  const pageTitle = useMemo(() => 'Prachi Goyal | Business Analyst & Project Coordinator', []);

  useEffect(() => {
    document.title = pageTitle;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', 'Prachi Goyal is a Business Analyst and Project Coordinator focused on Business Analysis, Project Coordination, Agile delivery and requirement documentation.');
  }, [pageTitle]);

  return (
    <div className="site-shell">
      <Navbar activeSection={activeSection} heroVisible={heroVisible} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </div>
  );
}

export default App;