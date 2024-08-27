import React from 'react'
import { Copyright } from 'lucide-react'
import { footerIcons } from '../constants'

const Footer = () => {
    return(
        <>
        <div className='bg-black w-screen flex flex-col items-center gap-3 py-5'>
            <div className='flex flex-row items-center gap-5'>
                {footerIcons.map((item, index) => (
                    <a href={item.link} target='_blank'>
                        <img src={item.img}  className='h-10 lg:h-16 object-cover' /> 
                    </a>
                ))}
            </div>

            <div className='flex flex-row items-center'>
                <Copyright className='size-4 pb-0.5' /> 
                <p> Purdue SIGGD 2024 </p>
            </div>
        </div>
        </>
    )
}

export default Footer