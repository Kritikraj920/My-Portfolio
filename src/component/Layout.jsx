import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'
import NinjaId from './Dashboard/NinjaId'
import Village from './Village/Village'
import Contact from './contact/Contact'
import Footer from './Footer/Foater'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <NinjaId />
        <Village />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
