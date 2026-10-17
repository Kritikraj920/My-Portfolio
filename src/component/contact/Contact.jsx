import React from 'react'
import './ContactStyle.css'

export default function Contact() {
  return (
    <section className="content-section section-wrap contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <span className="section-kicker">YOUR NEXT IDEA STARTS HERE</span>
          <h2>Let&apos;s make something <span className="gradient-text">great.</span></h2>
          <p>Have a project, opportunity, or just want to say hello? My inbox is always open.</p>
          <a className="button button-primary contact-cta" href="mailto:kritikraj920@gmail.com">Write me an email <span>↗</span></a>
        </div>
        <div className="contact-details">
          <a href="mailto:kritikraj920@gmail.com"><span className="contact-icon">✉</span><span><small>EMAIL</small>kritikraj920@gmail.com</span></a>
          <a href="tel:+916299850134"><span className="contact-icon">↗</span><span><small>PHONE</small>+91 62998 50134</span></a>
          <a href="https://www.linkedin.com/in/kritik-raj-279724206/" target="_blank" rel="noreferrer"><span className="contact-icon">in</span><span><small>LINKEDIN</small>Connect with me</span></a>
          <div className="contact-location"><span className="contact-icon">⌖</span><span><small>BASED IN</small>Gurugram, Haryana, India</span></div>
        </div>
      </div>
    </section>
  )
}
