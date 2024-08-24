import { useState } from 'react'
import Navbar from './components/Navbar'
import Officers from './components/Officers'
import HeroSection from './components/HeroSection'
import Games from './components/Games'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Games />
      <Officers />
    </>
  )
}

export default App
