import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Footer from './Footer/Foater'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
