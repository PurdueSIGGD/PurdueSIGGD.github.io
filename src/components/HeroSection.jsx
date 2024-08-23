import React from 'react'
import background from '../assets/img/homepage/SIGGD group image 2022.jpg'
import acmLogo from '../assets/img/logos/ACMLogo.png'
import siggdLogo from '../assets/img/logos/SIGGD_logo_final_square.png'

const HeroSection = () => {
  return (
    <>
    <div id='hero' className='h-screen w-screen relative'>
        <img className='opacity-25 w-full h-full object-cover' src={background} />
        <div className='absolute hidden lg:flex flex-row top-0 w-full h-full justify-between items-center'>
          <div className='ml-20'>
            <p className='text-8xl font-extrabold'> Purdue SIGGD</p>
            <p className='text-2xl font-semibold'> Purdue ACM's Special Interest Group for Game Development</p>
          </div>
          <div>
            <div className="mr-52 flex flex-col justify-center">
              <img className='w-72 object-cover' src={siggdLogo} />
              <img className='w-72 object-cover' src={acmLogo} />
            </div>
          </div>
        </div>

        <div className='absolute lg:hidden flex flex-col top-0 w-full h-full justify-center items-center'>
          <img className='w-64 object-cover' src={siggdLogo} />
          <p className='text-5xl font-extrabold'> Purdue SIGGD</p>
          <p className='text-sm font-semibold'> Purdue ACM's Special Interest Group for Game Development</p>
          <img className='mt-10 w-64 object-cover' src={acmLogo} />
        </div>

        
    </div>
    </>
  )
}

export default HeroSection