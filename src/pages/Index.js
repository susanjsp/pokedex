import React, { useEffect, useState } from 'react';

import PokemonList from '../components/PokemonList';
import Pagination from '../components/Pagination';

function Index() {
  const [ currentUrl, setCurrentUrl ] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [ prevUrl, setPrevUrl ] = useState('');
  const [ nextUrl, setNextUrl ] = useState('');

  const [ pokemonList, setPokemonList ] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch(currentUrl);
      const data = await response.json();
      setPrevUrl(data.previous);
      setNextUrl(data.next);
      setPokemonList(data.results.map(pokemon => pokemon.name));
    };
    fetchPokemonList();
  }, [currentUrl]);

  const nextPage = function() {
    setCurrentUrl(nextUrl);
  }

  const prevPage = function() {
    setCurrentUrl(prevUrl);
  }

  const pokemons = pokemonList.map(pokemon => {
    return <li key={pokemon}>{pokemon}</li>;
  });

  return(
    <div>
      <h1>Browse all pokemon</h1>
      <ul>{pokemons}</ul>
      <Pagination
        nextPage={nextUrl ? nextPage : null}
        prevPage={prevUrl ? prevPage : null}
      />
    </div>
  )
}

export default Index;