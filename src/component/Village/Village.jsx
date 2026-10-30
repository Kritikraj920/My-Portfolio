import React, { useState } from 'react'
import './Village.css'

const profileNightView = `${process.env.PUBLIC_URL}/assets/imgs/profile-3d-contrib/profile-night-view.svg`
const profileNightGreen = `${process.env.PUBLIC_URL}/assets/imgs/profile-3d-contrib/profile-night-green.svg`
const profileGreenAnimate = `${process.env.PUBLIC_URL}/assets/imgs/profile-3d-contrib/profile-green-animate.svg`
const profileNightRainbow = `${process.env.PUBLIC_URL}/assets/imgs/profile-3d-contrib/profile-night-rainbow.svg`
const profileGitBlock = `${process.env.PUBLIC_URL}/assets/imgs/profile-3d-contrib/profile-gitblock.svg`

const villageThemes = [
  { id: 'night-view', label: '🌃 Night City', file: profileNightView, desc: 'Isometric nighttime metropolis illuminated by glowing GitHub activity.' },
  { id: 'night-green', label: '🌲 Night Green', file: profileNightGreen, desc: 'Midnight emerald theme highlighting commit frequency.' },
  { id: 'green-animate', label: '✨ Green Animated', file: profileGreenAnimate, desc: 'Animated gradient pulse across daily contribution blocks.' },
  { id: 'night-rainbow', label: '🌈 Night Rainbow', file: profileNightRainbow, desc: 'Vibrant spectral skyline mapping repo complexity.' },
  { id: 'git-block', label: '🧱 Git Block 3D', file: profileGitBlock, desc: 'Modular architectural 3D commit towers.' },
]

export default function Village() {
  const [selectedTheme, setSelectedTheme] = useState(villageThemes[0])

  return (
    <section className="content-section section-wrap" id="village">
      <div className="section-heading">
        <span className="section-kicker">🌃 3D CONTRIBUTION VILLAGE</span>
        <h2>My Contribution Village: <span className="gradient-text-blue">Rebuilt Automatically Every Day.</span></h2>
        <p className="section-subtitle">
          <em>Every commit raises another building.</em> A living 3D architectural city generated directly
          from live Git commits on <strong>@Kritikraj920</strong> through an automated GitHub Actions cron workflow.
        </p>
      </div>

      {/* Theme Switcher */}
      <div className="village-theme-switcher">
        {villageThemes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            className={`village-btn ${selectedTheme.id === theme.id ? 'active' : ''}`}
            onClick={() => setSelectedTheme(theme)}
          >
            {theme.label}
          </button>
        ))}
      </div>

      {/* 3D Village SVG Canvas Frame */}
      <div className="svg-canvas-wrap village-canvas-frame">
        <div className="canvas-header-bar">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="canvas-title">profile-3d-contrib / {selectedTheme.id}.svg</span>
          <span className="live-tag">DAILY AUTOMATION</span>
        </div>
        <div className="village-svg-wrapper">
          <img
            src={selectedTheme.file}
            alt="3D contribution city"
            className="village-svg-img"
            loading="lazy"
          />
        </div>
        <div className="village-canvas-footer">
          <span className="footer-desc">{selectedTheme.desc}</span>
          <span className="cron-tag">cron: 0 18 * * * (daily 18:00 UTC)</span>
        </div>
      </div>
    </section>
  )
}
