import React from 'react'
import './Projectstyle.css'

const projects = [
  {
    number: '01',
    type: 'ENTERPRISE AUTOMATION',
    title: 'Audit workflow toolkit',
    description: 'Data extraction, validation, reconciliation, and comparative reporting workflows designed to reduce manual effort across audit and compliance processes.',
    stack: ['Automation', 'Data analysis', 'AI Copilot', 'MCP'],
  },
  {
    number: '02',
    type: 'WEB APPLICATION',
    title: 'Tic Tac Toe',
    description: 'A lightweight two-player game with a familiar 3 × 3 board, turn-by-turn play, and a simple, focused interface.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Kritikraj920/Tic-Tac-Toe',
  },
  {
    number: '03',
    type: 'WEB APPLICATION',
    title: 'Personal portfolio',
    description: 'A portfolio experience bringing together projects, professional background, and ways to connect.',
    stack: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/Kritikraj920/Portfolio',
  },
]

export default function Project() {
  return (
    <section className="content-section section-wrap projects-section" id="projects">
      <div className="projects-heading">
        <div className="section-heading">
          <span className="section-kicker">SELECTED WORK</span>
          <h2>Ideas made <span className="gradient-text">real.</span></h2>
        </div>
        <a className="inline-link github-link" href="https://github.com/Kritikraj920" target="_blank" rel="noreferrer">
          More on GitHub <span>↗</span>
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-art">
              <span className="project-number">{project.number}</span>
              <span className="project-orbit" />
              <span className="project-symbol">{project.number === '01' ? '✧' : project.number === '02' ? '× ○' : '⌘'}</span>
              <span className="project-type">{project.type}</span>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  View project <span>↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
