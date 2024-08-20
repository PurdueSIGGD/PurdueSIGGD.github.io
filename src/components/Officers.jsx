import React from 'react'
import { officers } from '../constants'


const Officers = () => {
    return(
        <>
        <div className='flex flex-row flex-wrap justify-center w-9/12 self-center'>
            {officers.map((item, index) => (
                <OfficerCard officer={item} />
            ))}
        </div>
        
        </>
    )
}

const OfficerCard = (props) => {
  return (
    <>
    <div className='flex flex-col items-center w-80 border-4 rounded-3xl p-5 gap-2'>
        <p className='text-4xl'> {props.officer.name} </p>
        <img className='object-cover rounded-full w-40 h-40' src={props.officer.img} />
        <p className='text-2xl'> {props.officer.role} </p>
        <hr className='w-full' />
        <div className='text-justify leading-tight'> 
            {props.officer.description}
        </div>
    </div>
    </>
  )
}

export default Officers