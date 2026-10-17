import React from 'react'
import './Aboutstyle.css'

const skills = [
  ['Languages', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript'],
  ['Frontend', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  ['Backend', 'Node.js', 'Express.js', 'Spring Boot', 'PHP', 'Laravel'],
  ['Data & tools', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Git', 'GitHub'],
  ['Focus', 'REST APIs', 'Responsive design', 'Automation', 'AI & MCP'],
]

export default function About() {
  return (
    <>
      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <span className="section-kicker">A LITTLE ABOUT ME</span>
          <h2>Curiosity is my <span className="gradient-text">superpower.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m a software consultant based in Gurugram, working at the intersection
              of technology, process improvement, and problem solving. I enjoy making
              complicated work feel simple—with dependable applications and automation
              that people actually want to use.
            </p>
            <p>
              From extracting insights from spreadsheets and PDFs to building AI-assisted
              workflows, I care about the details: useful interfaces, accurate data, and
              systems that are secure and maintainable.
            </p>
            <a className="inline-link" href="mailto:kritikraj920@gmail.com">Say hello <span>↗</span></a>
          </div>
          <div className="about-note">
            <span className="note-star">✦</span>
            <p>Thoughtful code.<br />Meaningful impact.</p>
            <span className="note-caption">MY NORTH STAR</span>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="experience">
        <div className="section-heading">
          <span className="section-kicker">THE JOURNEY SO FAR</span>
          <h2>Experience &amp; <span className="gradient-text">education.</span></h2>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-marker" />
            <div className="timeline-topline"><span>Grant Thornton Bharat LLP</span><span>Jun 2025 — Present</span></div>
            <h3>Consultant <span>· Gurugram</span></h3>
            <p>Building technology-enabled improvements for banking, financial services, and audit teams.</p>
            <ul>
              <li>Developed tools to extract, validate, transform, and analyze Excel and PDF data, reducing manual work and operational risk.</li>
              <li>Created scalable reconciliation, rule-based validation, comparative analysis, and reporting workflows.</li>
              <li>Integrated a contextual AI Copilot and MCP server connections for governed interactions with enterprise systems.</li>
              <li>Delivered year-wise analysis and trend reporting with cross-functional stakeholders, emphasizing security and maintainability.</li>
            </ul>
          </article>
          <article className="timeline-item">
            <span className="timeline-marker" />
            <div className="timeline-topline"><span>Webtechno Software</span><span>Feb 2025 — Jun 2025</span></div>
            <h3>Full-time Developer <span>· Jodhpur</span></h3>
            <p>Worked across backend development and delivery for live client applications.</p>
            <ul>
              <li>Built backend systems with PHP, Laravel, and MySQL for applications handling 1,000+ daily requests.</li>
              <li>Improved data retrieval speeds by 30% through database schema work and contributed to 5+ live client projects.</li>
              <li>Collaborated on debugging, testing, code reviews, and production deployments in an agile team.</li>
            </ul>
          </article>
        </div>
        <div className="education-grid">
          <article className="education-card">
            <span className="section-kicker">2022 — 2025</span>
            <h3>Bachelor of Engineering</h3>
            <p>Electronics &amp; Computer Engineering</p>
            <span className="education-school">M.B.M. University · Jodhpur</span>
            <span className="education-score">6.7 CGPA</span>
          </article>
          <article className="education-card">
            <span className="section-kicker">2020 — 2022</span>
            <h3>Diploma</h3>
            <p>Computer Science &amp; Engineering</p>
            <span className="education-school">Government Polytechnic College · Jodhpur</span>
            <span className="education-score">79.19%</span>
          </article>
        </div>
      </section>

      <section className="content-section section-wrap skills-section" id="skills">
        <div className="section-heading">
          <span className="section-kicker">MY TOOLKIT</span>
          <h2>Skills I bring <span className="gradient-text">to the table.</span></h2>
        </div>
        <div className="skills-grid">
          {skills.map(([category, ...items]) => (
            <div className="skill-group" key={category}>
              <h3>{category}</h3>
              <div className="skill-list">{items.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          ))}
        </div>
        <p className="soft-skills"><span>Beyond code:</span> Problem solving · Leadership · Adaptability · Communication · Team collaboration</p>
      </section>
    </>
  )
}
