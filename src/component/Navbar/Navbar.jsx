import React, { useState, useEffect } from 'react'
import './Style.css'

const navLinks = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Ninja ID', '#ninja-id'],
  ['3D Village', '#village'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#hero" onClick={() => setMenuOpen(false)}>
          <span className="brand-emblem" aria-hidden="true">🍥</span>
          <div className="brand-text-wrap">
            <span className="brand-name">
              Kritik Raj<span className="brand-dot">.</span>
            </span>
            <span className="brand-tag">SOFTWARE CONSULTANT &amp; DEV</span>
          </div>
        </a>

        <div className="nav-status-badge">
          <span className="status-pulse-dot" />
          <span>OPEN TO COLLABORATION</span>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
        </button>

        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-cta ninja-btn ninja-btn-primary"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            <span>Get in Touch</span>
            <span className="arrow-icon">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
