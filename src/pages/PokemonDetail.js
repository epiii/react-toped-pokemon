import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList'
import axios from 'axios'
import Pagination from '../components/Pagination'

function PokemonDetail() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  // const [pokemon, setPokemon] = useState(['bulbasaur', 'charmender'])

  useEffect(() => {
    setLoading(true)
    axios.get('https://pokeapi.co/api/v2/pokemon')
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        console.log(res);
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p))
        // setPokemon(res.data.results.map(p => p.name))
      })
    return () => cancel()
  }, [currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return 'loading...'

  console.warn(pokemon)
  return (
    <div className="app-wrapper" >
      <header>
        <h1 className="title">Pokemon List</h1>
      </header>
      <PokemonList
        pokemon={pokemon}
      />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </div>
  );
}

export default PokemonDetail;
