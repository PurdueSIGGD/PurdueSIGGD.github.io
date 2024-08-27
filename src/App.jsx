import { useState } from 'react'
import Navbar from './components/Navbar'
import Officers from './components/Officers'
import HeroSection from './components/HeroSection'
import Games from './components/Games'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Games />
      <Officers />
      <Footer />
    </>
  )
}

export default App
