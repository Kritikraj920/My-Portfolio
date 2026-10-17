import React from 'react'
import '../Footer/Footerstyle.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner section-wrap">
        <a className="footer-brand" href="#home">K<span>.</span> <span>Kritik Raj</span></a>
        <p>Designed with care, built with curiosity.</p>
        <span>© {new Date().getFullYear()} Kritik Raj</span>
      </div>
    </footer>
  )
}
