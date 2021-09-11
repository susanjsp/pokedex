import React, { useState, useEffect } from 'react';

import PokedexCard from '../components/PokedexCard/PokedexCard';

function Show() {
  const [ form, setForm ] = useState('');
  const [ query, setQuery ] = useState('bulbasaur');
  const [ pokemon, setPokemon ] = useState({isFetching: true });

  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      const data = await response.json()
      setPokemon({
        id: data.id,
        name: data.species.name,
        height: data.height,
        weight: data.weight,
        baseExp: data.base_experience,
        sprite: data.sprites.front_default,
        image: data.sprites.other['official-artwork'].front_default,
        types: data.types.map(type => type.type.name),
        abilities: data.abilities.map(ability => ability.ability.name),
        stats: data.stats.map(stat => {
          return {
            name: stat.stat.name,
            value: stat.base_stat
          };
        }),
        isFetching: false,
      })
    };
    fetchPokemonData();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(form);
  }

  const handleChange = event => {
    setForm(event.target.value);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={form}
          placeholder='Search for pokemon name here'
          onChange={handleChange}
        />
        <input type='submit' />
      </form>
      {pokemon.isFetching ? <p>Loading...</p> : <PokedexCard pokemon={pokemon} />}
    </div>
  )
}

export default Show;

// https://blog.logrocket.com/patterns-for-data-fetching-in-react-981ced7e5c56/#howtofetchdatainreact