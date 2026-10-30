import React, { useState } from 'react'
import './NinjaId.css'

const ninjaIdSvg = `${process.env.PUBLIC_URL}/assets/imgs/ninja-id.svg?v=3`
const idDashboardSvg = `${process.env.PUBLIC_URL}/assets/imgs/id-dashboard.svg?v=3`

export default function NinjaId() {
  const [activeView, setActiveView] = useState('konoha')

  return (
    <section className="content-section section-wrap" id="ninja-id">
      <div className="section-heading">
        <span className="section-kicker">🪪 OFFICIAL REGISTRATION</span>
        <h2>Ninja Registration: <span className="gradient-text">Live Mission Dashboard.</span></h2>
        <p className="section-subtitle">
          Official Konoha ID credentials with swinging badge physics, repository star counts,
          and synchronized GitHub developer analytics for Kritik Raj.
        </p>
      </div>

      {/* View Mode Switcher */}
      <div className="id-view-switcher">
        <button
          type="button"
          className={`view-btn ${activeView === 'konoha' ? 'active' : ''}`}
          onClick={() => setActiveView('konoha')}
        >
          <span>Konoha Shinobi ID</span>
          <span className="badge-tag">SWINGING BADGE</span>
        </button>
        <button
          type="button"
          className={`view-btn ${activeView === 'hologram' ? 'active' : ''}`}
          onClick={() => setActiveView('hologram')}
        >
          <span>Hologram Cyber-ID</span>
          <span className="badge-tag">NEON DASHBOARD</span>
        </button>
      </div>

      {/* SVG Canvas Display */}
      <div className="svg-canvas-wrap ninja-id-canvas">
        <div className="canvas-header-bar">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="canvas-title">
            {activeView === 'konoha' ? 'ninja-id.svg • Swinging Konoha Lanyard Badge' : 'id-dashboard.svg • Hologram Developer Card'}
          </span>
          <span className="live-tag">INTERACTIVE SVG</span>
        </div>
        <div className="id-svg-display">
          <img
            src={activeView === 'konoha' ? ninjaIdSvg : idDashboardSvg}
            alt="Ninja registration card and live GitHub dashboard"
            className="id-svg-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Realtime Stats Pills */}
      <div className="id-metrics-grid">
        <div className="id-metric-card glass-panel">
          <span className="metric-icon">📂</span>
          <div className="metric-info">
            <span className="metric-val">32</span>
            <span className="metric-lbl">Public Repositories</span>
          </div>
        </div>

        <div className="id-metric-card glass-panel">
          <span className="metric-icon">⭐</span>
          <div className="metric-info">
            <span className="metric-val">396+</span>
            <span className="metric-lbl">Total GitHub Stars</span>
          </div>
        </div>

        <div className="id-metric-card glass-panel">
          <span className="metric-icon">🍴</span>
          <div className="metric-info">
            <span className="metric-val">193+</span>
            <span className="metric-lbl">Project Forks</span>
          </div>
        </div>

        <div className="id-metric-card glass-panel">
          <span className="metric-icon">👥</span>
          <div className="metric-info">
            <span className="metric-val">420</span>
            <span className="metric-lbl">Community Followers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
