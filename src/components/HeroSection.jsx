import React from 'react'
import background from '../assets/img/homepage/SIGGD group image 2022.jpg'
import acmLogo from '../assets/img/logos/ACMLogo.png'
import siggdLogo from '../assets/img/logos/SIGGD_logo_final_square.png'
import { discordLink } from '../constants'

const HeroSection = () => {
  return (
    <>
    <div id='hero' className='h-screen w-screen relative overflow-hidden'>
        <img className='opacity-25 w-full h-full object-cover' src={background} />

        <div className='absolute hidden lg:flex flex-col top-0 w-full h-full justify-center items-start ml-20'>
          <img className='w-80 object-cover' src={siggdLogo} />
          <p className='text-8xl font-extrabold'> Purdue SIGGD</p>
          <p className='text-2xl font-semibold mb-5'> Purdue ACM's Special Interest Group for Game Development</p>
          <a href={discordLink} className='py-3 px-5 border rounded-md bg-indigo-700'> Join our Discord </a>
        </div>

        <div className='absolute lg:hidden flex flex-col top-0 w-full h-full justify-center items-center'>
          <img className='w-64 object-cover' src={siggdLogo} />
          <p className='text-5xl font-extrabold'> Purdue SIGGD</p>
          <p className='text-sm font-semibold mb-5 text-center'> Purdue ACM's Special Interest Group for <br/> Game Development</p>
          <a href={discordLink} className='py-3 px-5 border rounded-md bg-indigo-700'> Join our Discord </a>
        </div>

        
    </div>
    </>
  )
}

export default HeroSection