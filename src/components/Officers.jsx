import React from 'react'
import { officers } from '../constants'


const Officers = () => {
    return(
        <>
        <div id='officers'>
            <h1 className="pt-20 my-5 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Officers
            </h1>
            <div className='flex flex-row flex-wrap justify-center w-9/12 mx-auto gap-5'>
                {officers.map((item, index) => (
                    <OfficerCard officer={item} />
                ))}
            </div>
        </div>
        </>
    )
}

const OfficerCard = (props) => {
  return (
    <>
    <div className='flex flex-col items-center w-80 border-2 rounded-2xl p-5 gap-2'>
        <p className='text-4xl'> {props.officer.name} </p>
        <img className='object-cover rounded-full w-40 h-40' src={props.officer.img} />
        <p className='text-2xl'> {props.officer.role} </p>
        <hr className='w-full' />
        <div className='leading-tight'> 
            {props.officer.description}
        </div>
    </div>
    </>
  )
}

export default Officers