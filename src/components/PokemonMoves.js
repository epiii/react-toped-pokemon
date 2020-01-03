import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonMoves({ moves }) {
    return (
        <div className="pokemon-move">{
            moves.map(p => (
                <div key={p.move.name}>
                    {p.move.name}
                </div>
            ))
        }</div >
    )
}
