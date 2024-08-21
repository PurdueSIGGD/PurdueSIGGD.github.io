import React from 'react'
import background from '../assets/img/homepage/SIGGD group image 2022.jpg'

const HeroSection = () => {
  return (
    <>
    <div id='hero' className='h-screen w-screen'>
        <img className='opacity-25 w-full h-full object-cover' src={background} />
    </div>
    </>
  )
}

export default HeroSection