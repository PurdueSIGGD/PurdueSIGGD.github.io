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
      <div className='flex flex-col items-center w-80 p-5'>
          <div className='bg-red-600 w-full p-5 flex flex-col rounded-t-lg'>
              <p className='text-3xl'> {props.officer.name} </p>
              <p className='text-xl italic'> {props.officer.role} </p>
              <img className='object-cover rounded-full w-40 h-40 self-center border-4 border-white' src={props.officer.img} />
          </div>
          
          <div className='leading-tight bg-black p-5 rounded-b-lg w-full h-full'> 
              {props.officer.description}
          </div>
      </div>
      </>
    )
  }

export default Officers