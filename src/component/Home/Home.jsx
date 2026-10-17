import React from 'react'
import About from '../About/About'
import Projects from '../Project/Project'
import Contact from '../contact/Contact'
import './Homestyle.css'

const focusAreas = ['Automation', 'AI integrations', 'Full-stack apps']

export default function Home() {
  return (
    <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO COLLABORATION</div>
          <h1>Building useful things<br />with a little <span className="gradient-text">magic.</span></h1>
          <p className="hero-intro">
            I&apos;m <strong>Kritik Raj</strong> — a software consultant turning complex
            workflows into thoughtful, reliable digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>
            <a className="text-link" href="#contact">Get in touch <span>↗</span></a>
          </div>
          <div className="focus-list">
            {focusAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative anime-inspired night-sky illustration" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="moon" />
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✧</span>
          <span className="spark spark-three">✦</span>
          <div className="hero-emblem"><span>KR</span><small>CREATE • BUILD • GROW</small></div>
          <div className="art-caption"><span>GURUGRAM, INDIA</span><span>28.4595° N</span></div>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  )
}
