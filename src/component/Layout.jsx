import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import Contact from './contact/Contact';

export default function Layout() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Project' element={<Project/>}/>
            <Route path='Contact' element={<Contact/>}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
