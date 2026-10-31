import React, { useState } from 'react'
import './Aboutstyle.css'

const ninjaWaySvg = `${process.env.PUBLIC_URL}/assets/imgs/ninja-way.svg?v=3`
const jutsuStackSvg = `${process.env.PUBLIC_URL}/assets/imgs/jutsu-stack.svg?v=4`
const meghaStatsSvg = `${process.env.PUBLIC_URL}/assets/imgs/megha-stats.svg?v=3`
const meghaLangsSvg = `${process.env.PUBLIC_URL}/assets/imgs/megha-langs.svg?v=3`
const meghaTrophiesSvg = `${process.env.PUBLIC_URL}/assets/imgs/megha-trophies.svg?v=3`
const rasenganRunGif = `${process.env.PUBLIC_URL}/assets/imgs/rasengan-run.gif`

const skillCategories = {
  All: [
    { name: 'JavaScript & TypeScript', category: 'Languages', level: 'Advanced', jutsu: 'Chakra Precision' },
    { name: 'Java & Spring Boot', category: 'Backend', level: 'Enterprise', jutsu: 'Earth Style Fortress' },
    { name: 'React.js', category: 'Frontend', level: 'Component Magic', jutsu: 'Shadow Clone UI' },
    { name: 'Node.js & Express.js', category: 'Backend', level: 'High Concurrency', jutsu: 'Lightning Speed APIs' },
    { name: 'PHP & Laravel', category: 'Backend', level: 'MVC Systems', jutsu: 'Water Style Flow' },
    { name: 'AI Copilot & MCP', category: 'AI & Systems', level: 'Model Protocol', jutsu: 'Sage Mode Sensory' },
    { name: 'MySQL & PostgreSQL', category: 'Databases', level: 'Schema Tuning', jutsu: 'Storage Scroll Seal' },
    { name: 'MongoDB', category: 'Databases', level: 'NoSQL Docs', jutsu: 'Flexible Chakra' },
    { name: 'SQL Server (SSMS)', category: 'Databases', level: 'Enterprise SQL', jutsu: 'Hidden Leaf Vault' },
    { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Semantic / Modern', jutsu: 'Foundation Jutsu' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Utility-First', jutsu: 'Wind Blade Styling' },
    { name: 'Git & GitHub', category: 'DevOps', level: 'Version Control', jutsu: 'Reanimation Branching' },
    { name: 'C & C++', category: 'Languages', level: 'Core Algorithms', jutsu: 'Steel Blade Logic' },
  ],
  Languages: [
    { name: 'JavaScript', category: 'Languages', level: 'ES6+ Modern', jutsu: 'Chakra Manipulation' },
    { name: 'TypeScript', category: 'Languages', level: 'Strict Types', jutsu: 'Byakugan Clarity' },
    { name: 'Java', category: 'Languages', level: 'OOP & Architecture', jutsu: 'Iron Defense' },
    { name: 'C & C++', category: 'Languages', level: 'Low-Level Systems', jutsu: 'Precision Kunai' },
  ],
  'Web & Backend': [
    { name: 'React.js', category: 'Frontend', level: 'Component Magic', jutsu: 'Shadow Clone UI' },
    { name: 'Node.js & Express.js', category: 'Backend', level: 'Async APIs', jutsu: 'Lightning Speed' },
    { name: 'Spring Boot', category: 'Backend', level: 'Enterprise Microservices', jutsu: 'Susanoo Armor' },
    { name: 'PHP & Laravel', category: 'Backend', level: 'Robust Backends', jutsu: 'Water Style' },
    { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Responsive UI', jutsu: 'Visual Genjutsu' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Utility CSS', jutsu: 'Agile Stance' },
  ],
  'Data & AI': [
    { name: 'AI Copilot & MCP', category: 'AI & Systems', level: 'Model Context Protocol', jutsu: 'Sage Mode Sensory' },
    { name: 'MySQL', category: 'Databases', level: '30% Speed Boost', jutsu: 'Optimized Indexing' },
    { name: 'PostgreSQL & MongoDB', category: 'Databases', level: 'Polyglot Storage', jutsu: 'Double Dragon Store' },
    { name: 'SQL Server (SSMS)', category: 'Databases', level: 'Enterprise Data', jutsu: 'Grand Seal' },
    { name: 'Git & GitHub', category: 'DevOps', level: 'Agile CI/CD', jutsu: 'Summoning Deploy' },
  ],
}

export default function About() {
  const [activeTab, setActiveTab] = useState('All')
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [expandedRoles, setExpandedRoles] = useState({ gt: true, wt: false })

  const toggleRole = (roleKey) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [roleKey]: !prev[roleKey],
    }))
  }

  return (
    <>
      {/* 🍥 ABOUT KRITIK RAJ & NINJA WAY SECTION */}
      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <span className="section-kicker">🍥 A LITTLE ABOUT ME</span>
          <h2>Curiosity is my <span className="gradient-text">superpower.</span></h2>
          <p className="section-subtitle">
            I&apos;m a software consultant based in Gurugram, India, working at the intersection
            of technology, process improvement, and problem solving. I enjoy making complicated
            work feel simple—with dependable applications and automation that teams genuinely rely on.
          </p>
        </div>

        {/* Ninja Way SVG Banner */}
        <div className="svg-canvas-wrap ninja-way-canvas">
          <div className="canvas-header-bar">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="canvas-title">ninja-way.svg • What I Build: Living Interfaces, Automation, Data Flows</span>
            <span className="live-tag">PHILOSOPHY</span>
          </div>
          <img
            src={ninjaWaySvg}
            alt="My ninja way — living interfaces, motion with a story arc, enterprise data flows"
            loading="lazy"
          />
        </div>

        {/* 3 Pillars Grid */}
        <div className="ninja-pillars-grid">
          <div className="pillar-card glass-panel">
            <div className="pillar-header">
              <span className="pillar-num">01</span>
              <span className="pillar-icon">⚡</span>
            </div>
            <h3>Enterprise Automation</h3>
            <p>
              Extracting, validating, and transforming complex Excel spreadsheets and PDF documents.
              Reducing manual operational risks and streamlining audit reconciliations.
            </p>
            <div className="pillar-tags">
              <span>Rule-Based Validations</span>
              <span>Comparative Analysis</span>
              <span>Automated Reports</span>
            </div>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-header">
              <span className="pillar-num">02</span>
              <span className="pillar-icon">🤖</span>
            </div>
            <h3>AI Copilot &amp; MCP Integration</h3>
            <p>
              Integrating contextual AI chatbots and implementing Model Context Protocol (MCP)
              server connections to enable secure, governed interactions between AI and internal systems.
            </p>
            <div className="pillar-tags">
              <span>MCP Protocol</span>
              <span>Contextual AI</span>
              <span>Governed Workflows</span>
            </div>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-header">
              <span className="pillar-num">03</span>
              <span className="pillar-icon">🛡️</span>
            </div>
            <h3>Full-Stack &amp; Scalable Databases</h3>
            <p>
              Designing backend architectures with Laravel, Node.js, Spring Boot, and tuning MySQL schemas
              for 30% faster retrieval speeds on high-traffic client applications.
            </p>
            <div className="pillar-tags">
              <span>PHP / Laravel</span>
              <span>Spring Boot</span>
              <span>MySQL / Mongo</span>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 EXPERIENCE & EDUCATION SECTION */}
      <section className="content-section section-wrap" id="experience">
        <div className="section-heading">
          <span className="section-kicker">💼 THE JOURNEY SO FAR</span>
          <h2>Experience &amp; <span className="gradient-text">Education.</span></h2>
          <p className="section-subtitle">
            Demonstrated track record of delivering enterprise-grade tools, database performance
            optimizations, and innovative AI integrations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-container">
          {/* Grant Thornton */}
          <article className="timeline-card glass-panel">
            <div className="timeline-header">
              <div className="company-info">
                <span className="company-logo-badge">GT</span>
                <div>
                  <h3>Grant Thornton Bharat LLP</h3>
                  <span className="role-title">Consultant · Gurugram, Haryana</span>
                </div>
              </div>
              <span className="timeline-date-pill">30 Jun 2025 — Present</span>
            </div>

            <p className="timeline-intro">
              Served on multiple engagements within banking, financial services, and audit functions,
              contributing to technology-enabled process improvements and digital transformation.
            </p>

            <button
              type="button"
              className="timeline-dropdown-btn"
              onClick={() => toggleRole('gt')}
              aria-expanded={expandedRoles.gt}
            >
              <span>{expandedRoles.gt ? 'Hide Detailed Responsibilities ▲' : 'View Full Details & Responsibilities ▼'}</span>
              <span className={`dropdown-tag ${expandedRoles.gt ? 'is-active' : ''}`}>
                {expandedRoles.gt ? 'COLLAPSE' : 'EXPAND 5 MISSIONS'}
              </span>
            </button>

            {expandedRoles.gt && (
              <ul className="timeline-bullets fade-in-details">
                <li>
                  <strong>Enterprise Web Applications &amp; Automation:</strong> Designed and delivered scalable solutions
                  to enhance operational efficiency, data accuracy, and audit turnaround times.
                </li>
                <li>
                  <strong>Data Processing &amp; Extraction:</strong> Developed robust systems to extract, validate, transform,
                  and analyze data from Excel spreadsheets and PDF documents, significantly cutting manual overhead.
                </li>
                <li>
                  <strong>Reconciliation &amp; Compliance Platforms:</strong> Built platforms supporting data reconciliation,
                  rule-based validations, comparative analysis, and consolidated reporting.
                </li>
                <li>
                  <strong>AI-Powered Copilot &amp; MCP:</strong> Integrated a contextual AI Copilot chatbot and implemented
                  Model Context Protocol (MCP) server integrations for governed interactions with internal enterprise systems.
                </li>
                <li>
                  <strong>Stakeholder Collaboration:</strong> Partnered with cross-functional teams to deliver secure,
                  reusable, and maintainable solutions emphasizing audit compliance.
                </li>
              </ul>
            )}

            <div className="timeline-tech-stack">
              <span>Enterprise Automation</span>
              <span>AI Copilot</span>
              <span>Model Context Protocol (MCP)</span>
              <span>Excel &amp; PDF Pipelines</span>
              <span>Data Reconciliation</span>
            </div>
          </article>

          {/* Webtechno Software */}
          <article className="timeline-card glass-panel">
            <div className="timeline-header">
              <div className="company-info">
                <span className="company-logo-badge" style={{ background: 'rgba(74, 168, 255, 0.15)', color: '#4aa8ff' }}>WT</span>
                <div>
                  <h3>Webtechno Software</h3>
                  <span className="role-title">Full Time Developer · Jodhpur, Rajasthan</span>
                </div>
              </div>
              <span className="timeline-date-pill">19 Feb 2025 — 19 Jun 2025</span>
            </div>

            <p className="timeline-intro">
              Built and maintained backend systems supporting web applications handling over 1,000 daily user requests.
            </p>

            <button
              type="button"
              className="timeline-dropdown-btn"
              onClick={() => toggleRole('wt')}
              aria-expanded={expandedRoles.wt}
            >
              <span>{expandedRoles.wt ? 'Hide Detailed Achievements ▲' : 'View Full Details & Key Deliverables ▼'}</span>
              <span className={`dropdown-tag ${expandedRoles.wt ? 'is-active' : ''}`}>
                {expandedRoles.wt ? 'COLLAPSE' : 'EXPAND 4 MISSIONS'}
              </span>
            </button>

            {expandedRoles.wt && (
              <ul className="timeline-bullets fade-in-details">
                <li>
                  <strong>Database Architecture:</strong> Constructed robust MySQL schemas, resulting in a 30% acceleration
                  of data retrieval speeds across key application modules.
                </li>
                <li>
                  <strong>High Reliability:</strong> Collaborated with senior developers to debug and test applications, resolving
                  critical production bugs with 95% efficiency.
                </li>
                <li>
                  <strong>Client Project Delivery:</strong> Contributed to the end-to-end delivery of 5+ live client projects,
                  improving site performance, usability, and response latencies.
                </li>
                <li>
                  <strong>Agile Practices:</strong> Participated in daily stand-ups, code reviews, and sprint planning,
                  ensuring smooth deployment within live production environments.
                </li>
              </ul>
            )}

            <div className="timeline-tech-stack">
              <span>PHP</span>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>XAMPP</span>
              <span>REST APIs</span>
            </div>
          </article>
        </div>

        {/* Education Grid */}
        <div className="education-grid">
          <div className="education-card glass-panel">
            <span className="edu-year-badge">2022 — 2025</span>
            <h3>Bachelor of Engineering (B.E.)</h3>
            <p className="edu-field">Electronic and Computer Engineering</p>
            <span className="edu-institute">M.B.M. University · Jodhpur</span>
            <div className="edu-score-pill">
              <strong>6.7 CGPA</strong>
            </div>
          </div>

          <div className="education-card glass-panel">
            <span className="edu-year-badge">2020 — 2022</span>
            <h3>Diploma</h3>
            <p className="edu-field">Computer Science and Engineering</p>
            <span className="edu-institute">Government Polytechnic College · Jodhpur</span>
            <div className="edu-score-pill">
              <strong>79.19% Score</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 🔦 SKILLS & JUTSU ARSENAL SECTION */}
      <section className="content-section section-wrap" id="skills">
        <div className="section-heading">
          <span className="section-kicker">🔦 ARSENAL &amp; TOOLKIT</span>
          <h2>Jutsu Arsenal: <span className="gradient-text-blue">Skills I Bring To The Table.</span></h2>
          <p className="section-subtitle">
            A battle-tested technical arsenal across full-stack development, modern frameworks,
            database architecture, and enterprise AI integrations.
          </p>
        </div>

        {/* Jutsu Stack SVG Banner */}
        <div className="svg-canvas-wrap jutsu-stack-canvas">
          <div className="canvas-header-bar">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="canvas-title">jutsu-stack.svg • Fifteen Illuminated Technical Tools</span>
            <span className="live-tag">TECH STACK</span>
          </div>
          <img
            src={jutsuStackSvg}
            alt="Jutsu arsenal tech stack banner"
            loading="lazy"
          />
        </div>

        {/* Interactive Skills Filter */}
        <div className="jutsu-filter-shell glass-panel">
          <div className="jutsu-tabs">
            {Object.keys(skillCategories).map((tab) => (
              <button
                key={tab}
                type="button"
                className={`jutsu-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="jutsu-chips-grid">
            {skillCategories[activeTab].map((skill) => (
              <div
                key={skill.name}
                className={`jutsu-chip ${selectedSkill?.name === skill.name ? 'is-selected' : ''}`}
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="chip-top">
                  <span className="chip-name">{skill.name}</span>
                  <span className="chip-level">{skill.level}</span>
                </div>
                <div className="chip-anime">
                  <span className="anime-bullet">🍥</span>
                  <span>{skill.jutsu}</span>
                </div>
              </div>
            ))}
          </div>

          {selectedSkill && (
            <div className="jutsu-detail-box">
              <span className="detail-title">Selected Arsenal Item: <strong>{selectedSkill.name}</strong></span>
              <p>
                Specialty: <em>{selectedSkill.category}</em> • Proficiency: <strong>{selectedSkill.level}</strong> • Ninja Parallels: <em>{selectedSkill.jutsu}</em>.
              </p>
            </div>
          )}
        </div>

        {/* Soft Skills Banner */}
        <div className="soft-skills-card glass-panel">
          <span className="soft-skills-label">Beyond Code:</span>
          <div className="soft-skills-pills">
            <span>Problem Solving</span>
            <span>Leadership</span>
            <span>Adaptability</span>
            <span>Effective Communication</span>
            <span>Team Collaboration</span>
          </div>
        </div>

        {/* GitHub Stats Cards Showcase */}
        <div className="github-stats-cards-grid">
          <div className="stat-card glass-panel">
            <span className="card-kicker">TOP JUTSU LANGUAGES</span>
            <img src={meghaLangsSvg} alt="Top languages stats card" className="stat-svg" />
          </div>
          <div className="stat-card glass-panel">
            <span className="card-kicker">LIVE GITHUB ACTIVITY &amp; METRICS</span>
            <img src={meghaStatsSvg} alt="GitHub stats and streaks card" className="stat-svg" />
          </div>
          <div className="stat-card glass-panel">
            <span className="card-kicker">SHINOBI ACHIEVEMENTS</span>
            <img src={meghaTrophiesSvg} alt="GitHub achievements card" className="stat-svg" />
          </div>
        </div>

        {/* 🍥 RASENGAN RUN CTA BANNER */}
        <div className="rasengan-cta-box glass-panel">
          <div className="rasengan-gif-wrap">
            <img
              src={rasenganRunGif}
              alt="Naruto running with rasengan"
              className="rasengan-gif"
            />
          </div>
          <div className="rasengan-content">
            <span className="rasengan-kicker">KRITIK RAJ ON GITHUB</span>
            <h3>Looking for more code &amp; experiments?</h3>
            <p>
              Explore my repositories on GitHub (@Kritikraj920) covering full-stack React and Node apps,
              enterprise automation workflows, database performance benchmarks, and interactive web tools.
            </p>
            <a
              className="ninja-btn ninja-btn-primary"
              href="https://github.com/Kritikraj920"
              target="_blank"
              rel="noreferrer"
            >
              <span>Visit @Kritikraj920 on GitHub</span>
              <span className="icon">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
