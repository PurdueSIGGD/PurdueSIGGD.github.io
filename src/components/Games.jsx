import React from 'react'
import { games } from '../constants'

const Games = () => {
    return (
        <>
        <div id='games'>
            <h1 className="pt-20 my-5 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Games
            </h1>
            {games.map((item, index) => (
                <GameCard game={item} />
            ))}
        </div>
        
        </>
    )
}

const GameCard = (props) => {
    return  (
        <>
        <div className='flex flex-row flex-wrap lg:flex-nowrap gap-5 m-10 justify-center lg:justify-start'>
            <img className='w-80 object-cover rounded-xl' src={props.game.img}/>

            <div>
                <p>{props.game.name}</p>
                <hr />
                <p>{props.game.description}</p>
                <div className='flex flex-row gap-5'>
                    {props.game.download != "" ? <a className='w-1/2 bg-zinc-800 text-center py-1.5 text-sm' href={props.game.download}>Download</a> : <></>}
                    {props.game.github != "" ? <a className='w-1/2 bg-zinc-800 text-center py-1.5 text-sm' href={props.game.github}>GitHub</a> : <></>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Games
