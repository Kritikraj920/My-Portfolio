import React from 'react'
import './Homestyle.css'

const heroSvg = `${process.env.PUBLIC_URL}/assets/imgs/hero.svg?v=3`
const team7DanceGif = `${process.env.PUBLIC_URL}/assets/imgs/team7-dance.gif`

const focusAreas = [
  'Enterprise Automation',
  'AI & MCP Integrations',
  'Full-Stack Web Apps',
  'Audit & Financial Workflows',
  'REST APIs & Scalable DBs',
]

export default function Home({ onWatchIntro }) {
  return (
    <section className="hero-section section-wrap" id="hero">
      {/* Top Banner Tag */}
      <div className="hero-eyebrow">
        <span className="chakra-pill">
          <span className="chakra-core" />
          <span>GURUGRAM, HARYANA (28.4595° N)</span>
        </span>
        <span className="rank-badge">🍥 SOFTWARE ENGINEER @ GRANT THORNTON</span>
      </div>

      {/* Main Title */}
      <div className="hero-header-content">
        <h1 className="hero-title">
          Building useful things
          <br />
          with a little <span className="gradient-text">magic.</span>
        </h1>
        <p className="hero-desc">
          I&apos;m <strong>Kritik Raj</strong> — a Software Engineer turning complex workflows
          into thoughtful, reliable digital experiences, enterprise automation platforms,
          and governed AI Copilot integrations.
        </p>

        {/* Action CTAs */}
        <div className="hero-cta-group">
          {onWatchIntro && (
            <button
              className="ninja-btn ninja-btn-primary intro-cta-btn"
              type="button"
              onClick={onWatchIntro}
            >
              <span>🎬 Watch Story Intro</span>
              <span className="icon">▶</span>
            </button>
          )}
          <a className="ninja-btn ninja-btn-secondary" href="#about">
            <span>Explore Shinobi Journey</span>
            <span className="icon">↘</span>
          </a>
          <a
            className="ninja-btn ninja-btn-secondary"
            href="https://github.com/Kritikraj920"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub Profile ↗</span>
          </a>
          <a
            className="ninja-btn ninja-btn-secondary"
            href="#contact"
          >
            <span>Let&apos;s Connect ✉</span>
          </a>
        </div>

        {/* Focus pills */}
        <div className="hero-focus-tags">
          {focusAreas.map((area) => (
            <span key={area} className="focus-pill">
              <span className="spark">✦</span> {area}
            </span>
          ))}
        </div>
      </div>

      {/* 🎬 HERO SVG VIDEO INTRO DISPLAY */}
      <div className="hero-canvas-frame">
        <div className="canvas-header-bar">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="canvas-title">hero.svg • Konoha Headband Video Intro &amp; Live Animation</span>
          <span className="live-tag">LIVE SHINOBI CANVAS</span>
        </div>
        <div className="hero-svg-wrapper">
          <img
            src={heroSvg}
            alt="Kritik Raj — Software Engineer & Developer hero animation"
            className="hero-svg-img"
            loading="eager"
          />
        </div>
      </div>

      {/* 👯 TEAM 7 DANCE ANIMATION & CHIBI CALLOUT */}
      <div className="team7-dance-card glass-panel">
        <div className="dance-art">
          <img
            src={team7DanceGif}
            alt="Team 7 chibi dance animation"
            className="team7-gif"
          />
        </div>
        <div className="dance-speech">
          <span className="speech-badge">DATTEBAYO! 🍥</span>
          <h3>Thoughtful Code. Meaningful Impact.</h3>
          <p>
            Whether extracting insights from spreadsheets and PDFs, engineering full-stack Laravel/React apps,
            or integrating Model Context Protocol (MCP) servers with enterprise AI models, I focus on dependable,
            scalable, and human-centered design.
          </p>
          <div className="quick-stats-row">
            <div className="quick-stat">
              <strong>Grant Thornton</strong>
              <span>Software Engineer</span>
            </div>
            <div className="quick-stat-divider">/</div>
            <div className="quick-stat">
              <strong>Webtechno</strong>
              <span>Full-Stack</span>
            </div>
            <div className="quick-stat-divider">/</div>
            <div className="quick-stat">
              <strong>M.B.M. Univ</strong>
              <span>B.E. 2025</span>
            </div>
            <div className="quick-stat-divider">/</div>
            <div className="quick-stat">
              <strong>Gurugram</strong>
              <span>India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
