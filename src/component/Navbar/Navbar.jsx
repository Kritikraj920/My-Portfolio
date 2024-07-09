import React from 'react'
import '../Navbar/Style.css'
import { useRef } from 'react'
import { Outlet,Link } from 'react-router-dom';



export default function Navbar() {

    const openside=useRef();
    
    function side(){
        openside.current.style.display = 'block';
    }
    function cside(){
        openside.current.style.display = 'none';
    }
  return (
    <div>
      <nav>
      <ul className='Sidebar' ref={openside}>
            <li onClick={cside}><Link to=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link></li>
            <li><Link to="/" className='an'>Home</Link></li>
            <li><Link to="/About" className='an'>About Us</Link></li>
            <li><Link to="/Project" className='an'>Projects</Link></li>
            <li><Link to="/Contact" className='an'>Contact Us</Link></li>
            <li><Link to="/" className='an'>Resume</Link></li>
            
        </ul>
        <ul>
            <li><Link to="/"className='an'>Kritik Raj</Link></li>
            <li className='HideonMobile'><Link to="/"className='an'>Home</Link></li>
            <li className='HideonMobile'><Link to="/About"className='an'>About Us</Link></li>
            <li className='HideonMobile'><Link to="/Project"className='an'>Projects</Link></li>
            <li className='HideonMobile'><Link to="/Contact"className='an'>Contact Us</Link></li>
            <li className='HideonMobile'><Link to="/"className='an'>Resume</Link></li>
            <li onClick={side}><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="25px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}
