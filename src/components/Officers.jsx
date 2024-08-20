import React from 'react'
import img from '../assets/img/people/Ansh.jpg'

const Officers = () => {
  return (
    <>
    <div className='flex flex-col items-center w-80 border-4 rounded-3xl p-5 gap-2'>
        <p className='text-4xl'> Ansh Agrawal</p>
        <img className='object-cover rounded-full w-40 h-40' src={img} />
        <p className='text-2xl'> Programming Lead </p>
        <hr className='w-full' />
        <div className='text-justify'> 
            Ansh Agrawal is in their third and final year at Purdue, on track to graduate early with a major in Computer Science and minor in Mathematics. This will be his second year in SIGGD and first year as a Programming Lead. He has skills in variety of programming languages and tools. By incorporating his computer science technical ability with game development projects, he aspires to enter the gaming industry and start his own indie game studio some day.
        </div>
    </div>
    </>
  )
}

export default Officers