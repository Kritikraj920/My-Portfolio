import React from 'react'
import man from './man.png';
import './Aboutstyle.css';
import resume from './Kritik.pdf'
export default function About() {
  return (
    <div>
      {/* <Home/> */}
      <div className="container">
        <div className="right">
          <img src={man} alt="" />
        </div>
        <div className="left">
          <h3> Who Am I ?</h3>
          <h1>About Me</h1>
          <p>I have gained hands-on experience through various projects in college.<br/>
          My goal is to become a software engineer and use my skills to make a positive impact in the tech industry<br/>
          I have gained hands-on experience through various projects during intership.<br/>
         I have designed and developed a web based platform using HTML, CSS, JavaScript,Reactjs and Node.js.</p>
         <div className="About-icon">
      <a href="https://www.facebook.com/kritikraj.kritikraj.5" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
      <a href="https://www.facebook.com/kritikraj.kritikraj.5" target="_blank" rel="noopener noreferrer"> <i class="bi bi-facebook"></i></a>
      <a href="https://www.linkedin.com/in/kritik-raj-279724206/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
      <a href="https://github.com/Kritikraj920" target="_blank" rel="noopener noreferrer"> <i class="bi bi-github"></i></a>
      <a href="https://wa.me/6299850134" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
      </div>
          <a href={resume} download="Kritik.pdf" target="_blank" rel="noopener noreferrer"><button>Dowmload CV</button></a>
        </div>
      </div>
      <hr />
    </div>
  )
}
