import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonTypes({ types }) {
    // console.log(types)
    return (
        <div className="pokemon-type">{
            types.map(p => (
                <div key={p.type.name}>
                    {p.type.name}
                </div>
            ))
        }</div >
    )
}
