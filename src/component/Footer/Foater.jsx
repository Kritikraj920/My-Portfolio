import React from 'react'
import './Footerstyle.css'

const chibiWalkGif = `${process.env.PUBLIC_URL}/assets/imgs/chibi-walk.gif`

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner section-wrap">
        {/* Animated Chibi Walk */}
        <div className="chibi-walk-container">
          <img
            src={chibiWalkGif}
            alt="Chibi Naruto walking"
            className="chibi-walk-gif"
          />
          <p className="ninja-quote">
            <strong>Dattebayo — keep coding, keep growing.</strong> 🍥
          </p>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <div className="footer-brand-meta">
            <span className="footer-brand-name">🍥 Kritik Raj</span>
            <span className="footer-tagline">Software Engineer &amp; Developer · Gurugram, India</span>
          </div>

          <div className="footer-links">
            <a href="#hero">Hero</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#ninja-id">ID Card</a>
            <a href="#village">Village</a>
            <a href="#connect">Contact</a>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Top</span>
            <span>↑</span>
          </button>
        </div>

        <div className="footer-copy-sub">
          <span>Designed with shinobi chakra &amp; modern React • © {new Date().getFullYear()} Kritik Raj</span>
        </div>
      </div>
    </footer>
  )
}
