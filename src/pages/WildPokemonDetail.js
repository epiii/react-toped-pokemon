import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList'
import axios from 'axios'
import Pagination from '../components/Pagination'
import PokemonMoves from '../components/PokemonMoves';
import PokemonTypes from '../components/PokemonTypes';

function WildPokemonDetail({ match }) {
  const [pokemon, setPokemon] = useState([])
  const [pokemonDex, setPokemonDex] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonMoves, setPokemonMoves] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  // const [pokemon, setPokemon] = useState(['bulbasaur', 'charmender'])


  useEffect(() => {
    fetchItem()
    // console.log(match)
  }, [currentPageUrl])

  const fetchItem = () => {
    setLoading(true)
    // axios.get('https://pokeapi.co/api/v2/pokemon/' + match.params.id)
    let cancel
    axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`, {
      // axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        // console.log(res);
        setLoading(false)
        // setNextPageUrl(res.data.next)
        // setPrevPageUrl(res.data.previous)
        setPokemon(res.data)
        setPokemonMoves(res.data.moves)
        setPokemonTypes(res.data.types)
        // setPokemon(res.data.results.map(p => p))
        // setPokemon(res.data.results.map(p => p.name))
      })
    return () => cancel()
  }

  // function goToNextPage() {
  //   setCurrentPageUrl(nextPageUrl)
  // }

  // function goToPrevPage() {
  //   setCurrentPageUrl(prevPageUrl)
  // }

  if (loading) return 'loading...'

  // console.log(pokemon.moves)
  // console.log(pokemon[1].name)
  let imgPath = 'https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/'
  
  const catchPokemon = (pokemon) => {

    setPokemonDex(state => {
      const monExists = (state.filter(p => pokemon.id == p.id).length > 0)
      console.log(monExists)

      if (!monExists) {
        state = [...state, pokemon]
        state.sort(function (a, b) {
          return a.id - b.id
        })
      }
      return state
    })
  }

  return (
    <div className="app-wrapper" >
      <header>
        <h1 className="title">Wild Pokemon Detail</h1>
      </header>

      <section className="wild-pokemon">
        <img src={imgPath + match.params.id + '.png'} className="sprite"></img>
        <button onClick={() => catchPokemon(pokemon)} className="catch-btn">catch</button>
      </section>

      <section className="detail-info">
        <h3>Types</h3>
        <PokemonTypes types={pokemonTypes} />

        <h3>Moves</h3>
        <PokemonMoves moves={pokemonMoves} />
      </section>

    </div>
  );
}

export default WildPokemonDetail;
