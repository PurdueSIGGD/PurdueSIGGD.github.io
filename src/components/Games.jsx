import React from 'react'
import { games } from '../constants'

const Games = () => {
  return (
    <>
    {games.map((item, index) => (
        <GameCard game={item} />
    ))}
    </>
  )
}

const GameCard = (props) => {
    return  (
        <>
        <div>
            <img src={props.game.img}/>

            <div>
                <p>{props.game.name}</p>
                <hr />
                <p>{props.game.description}</p>
                <div>
                    {props.game.download != "" ? <a href={props.game.download}>Download</a> : <></>}
                    {props.game.github != "" ? <a href={props.game.github}>GitHub</a> : <></>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Games
