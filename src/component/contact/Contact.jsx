import React, { useState } from 'react'
import './ContactStyle.css'

const connectSvg = `${process.env.PUBLIC_URL}/assets/imgs/connect.svg?v=3`

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('kritikraj920@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <section className="content-section section-wrap" id="contact">
      <div className="section-heading">
        <span className="section-kicker">💌 YOUR NEXT IDEA STARTS HERE</span>
        <h2>Let&apos;s Make Something <span className="gradient-text">Great.</span></h2>
        <p className="section-subtitle">
          Have an enterprise project, software consulting opportunity, full-stack mission,
          or just want to say hello? My inbox is always open.
        </p>
      </div>

      {/* Connect SVG Banner */}
      <div className="svg-canvas-wrap connect-canvas">
        <div className="canvas-header-bar">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="canvas-title">connect.svg • Summoning Scroll &amp; Direct Channels</span>
          <span className="live-tag">OPEN TO COLLAB</span>
        </div>
        <img
          src={connectSvg}
          alt="Let's connect — Shinobi summoning scroll"
          loading="lazy"
        />
      </div>

      {/* Social Squad Cards */}
      <div className="connect-grid">
        {/* Email */}
        <div
          className="connect-card glass-panel"
          style={{ '--accent-col': '#e2383f' }}
        >
          <div className="card-badge-header">
            <span className="badge-logo">✉️</span>
            <span className="badge-shield" style={{ background: '#e2383f', color: '#fff' }}>
              PRIMARY EMAIL
            </span>
          </div>
          <h4>Email</h4>
          <span className="card-handle">kritikraj920@gmail.com</span>
          <div className="card-btn-row">
            <a
              href="mailto:kritikraj920@gmail.com"
              className="ninja-btn ninja-btn-primary card-btn"
            >
              Send Email ↗
            </a>
            <button
              type="button"
              className="ninja-btn ninja-btn-secondary card-btn"
              onClick={copyEmail}
            >
              {copied ? '✓ Copied!' : 'Copy Address'}
            </button>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kritik-raj-279724206/"
          target="_blank"
          rel="noreferrer"
          className="connect-card glass-panel"
          style={{ '--accent-col': '#4aa8ff' }}
        >
          <div className="card-badge-header">
            <span className="badge-logo">💼</span>
            <span className="badge-shield" style={{ background: '#4aa8ff', color: '#0b0d13' }}>
              LINKEDIN
            </span>
          </div>
          <h4>LinkedIn</h4>
          <span className="card-handle">Kritik Raj</span>
          <span className="card-action">Connect on LinkedIn ↗</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Kritikraj920"
          target="_blank"
          rel="noreferrer"
          className="connect-card glass-panel"
          style={{ '--accent-col': '#ff7a1a' }}
        >
          <div className="card-badge-header">
            <span className="badge-logo">🐙</span>
            <span className="badge-shield" style={{ background: '#ff7a1a', color: '#0b0d13' }}>
              GITHUB
            </span>
          </div>
          <h4>GitHub</h4>
          <span className="card-handle">@Kritikraj920</span>
          <span className="card-action">View Repositories &amp; Commits ↗</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/kritikrajgupta"
          target="_blank"
          rel="noreferrer"
          className="connect-card glass-panel"
          style={{ '--accent-col': '#c77dff' }}
        >
          <div className="card-badge-header">
            <span className="badge-logo">📸</span>
            <span className="badge-shield" style={{ background: '#c77dff', color: '#0b0d13' }}>
              INSTAGRAM
            </span>
          </div>
          <h4>Instagram</h4>
          <span className="card-handle">@kritikrajgupta</span>
          <span className="card-action">Follow on Instagram ↗</span>
        </a>

        {/* Threads */}
        <a
          href="https://www.threads.net/@kritikrajgupta"
          target="_blank"
          rel="noreferrer"
          className="connect-card glass-panel"
          style={{ '--accent-col': '#2fd48a' }}
        >
          <div className="card-badge-header">
            <span className="badge-logo">🧵</span>
            <span className="badge-shield" style={{ background: '#2fd48a', color: '#0b0d13' }}>
              THREADS
            </span>
          </div>
          <h4>Threads</h4>
          <span className="card-handle">@kritikrajgupta</span>
          <span className="card-action">Join on Threads ↗</span>
        </a>

        {/* Phone & Location */}
        <div
          className="connect-card glass-panel"
          style={{ '--accent-col': '#2fd48a' }}
        >
          <div className="card-badge-header">
            <span className="badge-logo">📞</span>
            <span className="badge-shield" style={{ background: '#2fd48a', color: '#0b0d13' }}>
              PHONE &amp; BASE
            </span>
          </div>
          <h4>Direct Call</h4>
          <span className="card-handle">+91 62998 50134</span>
          <div className="card-btn-row">
            <a
              href="tel:+916299850134"
              className="ninja-btn ninja-btn-secondary card-btn"
            >
              Call Directly ↗
            </a>
            <span className="card-location-tag">📍 Gurugram, India</span>
          </div>
        </div>
      </div>

      {/* Visitors Counter Badge */}
      <div className="visitor-badge-row">
        <div className="visitor-badge-box glass-panel">
          <span className="visitor-title">PROFILE VISITORS COUNTER</span>
          <img
            src="https://komarev.com/ghpvc/?username=Kritikraj920&color=ff7a1a&style=for-the-badge&label=VISITORS"
            alt="Kritik Raj profile views counter badge"
            className="visitor-counter-img"
          />
        </div>
      </div>
    </section>
  )
}
