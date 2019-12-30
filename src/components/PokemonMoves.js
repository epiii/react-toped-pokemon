import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonMoves({ moves }) {
    // console.log(moves)
    return (
        <div className="pokemon-move">{
            moves.map(p => (
                <div key={p.id}>
                    {p.move.name}
                </div>
            ))
        }</div >
    )
}
