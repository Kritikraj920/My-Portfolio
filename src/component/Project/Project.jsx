import React, { useState } from 'react'
import './Projectstyle.css'

const rasenganRunGif = `${process.env.PUBLIC_URL}/assets/imgs/rasengan-run.gif`

const projects = [
  {
    id: 'audit-toolkit',
    title: 'Audit Workflow Toolkit & AI Copilot',
    rank: 'S-RANK ENTERPRISE',
    stars: 'PROD',
    themeColor: '#ff7a1a',
    tagline: 'Enterprise Automation & MCP Server Integration',
    desc: 'Data extraction, rule-based validation, data reconciliation, and comparative reporting workflows designed to eliminate manual effort across audit and banking processes. Integrated with a contextual AI Copilot and MCP servers.',
    jutsu: ['React.js', 'Node.js', 'AI Copilot', 'Model Context Protocol (MCP)', 'Data Extraction'],
    link: 'https://github.com/Kritikraj920',
    featured: true,
    symbol: '⚡',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe Game',
    rank: 'A-RANK WEB APP',
    stars: 'LIVE',
    themeColor: '#2fd48a',
    tagline: 'Two-Player Strategic Engine',
    desc: 'A lightweight two-player web application with a responsive 3 × 3 board, turn-by-turn state logic, win detection algorithms, and an intuitive minimal interface.',
    jutsu: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic'],
    link: 'https://github.com/Kritikraj920/Tic-Tac-Toe',
    featured: true,
    symbol: '× ○',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio & Shinobi Realm',
    rank: 'S-RANK SHOWCASE',
    stars: '2026',
    themeColor: '#4aa8ff',
    tagline: 'Interactive Developer Experience',
    desc: 'A modern, responsive portfolio experience bringing together enterprise experience, 3D contribution village, interactive ID credentials, and ways to connect.',
    jutsu: ['React.js', 'Vanilla CSS', 'SVG Animation', 'Responsive UI'],
    link: 'https://github.com/Kritikraj920/My-Portfolio',
    featured: true,
    symbol: '🍥',
  },
  {
    id: 'webtechno-backend',
    title: 'Webtechno Client Backend Systems',
    rank: 'A-RANK BACKEND',
    stars: '1000+ REQ',
    themeColor: '#c77dff',
    tagline: 'High-Throughput PHP/Laravel Services',
    desc: 'Constructed robust MySQL database schemas and backend services resulting in 30% faster data retrieval across key modules for 5+ client applications handling 1,000+ daily requests.',
    jutsu: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'XAMPP'],
    link: 'https://github.com/Kritikraj920',
    featured: false,
    symbol: '🛡️',
  },
  {
    id: 'itachi',
    title: 'Itachi Tribute Experience',
    rank: 'S-RANK CLASSIFIED',
    stars: '⭐ 175',
    themeColor: '#e2383f',
    tagline: 'Cinematic Uchiha Story Scroll',
    desc: 'Cinematic scroll experience with fluttering crows, glowing Sharingan transformations, scroll-driven storytelling, and custom audio layers.',
    jutsu: ['JavaScript', 'CSS3', 'ScrollMagic', 'Audio API'],
    link: 'https://github.com/Meghamittal0920/itachi',
    featured: true,
    symbol: '👁️',
  },
  {
    id: 'naruto-sage',
    title: 'Naruto — Sage Mode',
    rank: 'S-RANK TRANSFORMATION',
    stars: '⭐ 72',
    themeColor: '#ffb52e',
    tagline: 'Awwwards-Style Scroll Motion',
    desc: 'Motion-heavy scroll journey with thunder-crack transformation sequence, smooth GSAP timelines, and vibrant anime-inspired visual design.',
    jutsu: ['HTML5', 'GSAP', 'CSS Keyframes'],
    link: 'https://github.com/Meghamittal0920/Naruto-SageMode',
    featured: false,
    symbol: '🌀',
  },
]

export default function Project() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects

  return (
    <section className="content-section section-wrap" id="projects">
      <div className="section-heading">
        <span className="section-kicker">🍥 SELECTED WORK &amp; MISSIONS</span>
        <h2>Featured Projects: <span className="gradient-text">Ideas Made Real.</span></h2>
        <p className="section-subtitle">
          From enterprise audit automation and AI Copilot architectures to interactive game logic
          and cinematic anime scroll experiences.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="missions-filter-bar">
        <button
          type="button"
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button
          type="button"
          className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
          onClick={() => setFilter('featured')}
        >
          Featured Highlights ⭐
        </button>
        <a
          href="https://github.com/Kritikraj920"
          target="_blank"
          rel="noreferrer"
          className="all-repos-pill"
        >
          <span>More on GitHub (@Kritikraj920)</span>
          <span>↗</span>
        </a>
      </div>

      {/* Projects Grid */}
      <div className="missions-grid">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="mission-card glass-panel"
            style={{ '--theme-col': project.themeColor }}
          >
            <div className="mission-topline">
              <span className="mission-rank-badge">{project.rank}</span>
              <div className="mission-stars">
                <strong>{project.stars}</strong>
              </div>
            </div>

            <div className="mission-title-wrap">
              <span className="mission-symbol">{project.symbol}</span>
              <div>
                <h3 className="mission-title">{project.title}</h3>
                <span className="mission-tagline">{project.tagline}</span>
              </div>
            </div>

            <p className="mission-desc">{project.desc}</p>

            <div className="mission-jutsu-tags">
              {project.jutsu.map((tech) => (
                <span key={tech} className="jutsu-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mission-actions">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="ninja-btn ninja-btn-primary mission-view-btn"
              >
                <span>View Project Code</span>
                <span>↗</span>
              </a>
            </div>
          </article>
        ))}
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
            automation workflows, database performance benchmarks, and interactive web tools.
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
  )
}
