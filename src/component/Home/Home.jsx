import React from 'react'
import '../Home/Homestyle.css'
import bg1 from './bg1.png'
import About from '../About/About'
import Projects from '../Project/Project'


export default function Home() {
 
 
  return (
    <div>
       <main>
        <section className="firstsection">
            <div className="leftsection">
                Hi, I am  <span className="purple">Kritik</span>
                <div className='disc'>I am a Web Devloper</div>
                <span classNameName="element"></span>
            </div>
            <div classNameName="rightsection"> 
                <img src={bg1} alt=""/></div>
        </section> 
        <hr/>
    </main>
    <About/>
    <Projects/>
    
    </div>
  )
}
