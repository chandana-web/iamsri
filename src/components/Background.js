import React from 'react'
import './Background.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const background = () => {
  return (
    <div id="background">

        <Navbar/>
      {/* Floating Blobs */}
      <div className="blob green"></div>
      <div className="blob purple"></div>

      {/* Sections */}
     <Hero/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default background