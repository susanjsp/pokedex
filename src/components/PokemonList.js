import React from 'react';

function PokemonList({ pokemonList }) {
  const pokemons = pokemonList.map(pokemon => {
    return <li key={pokemon}>{pokemon}</li>;
  });

  return(
    <ul>
      {pokemons}
    </ul>
  )
}

export default PokemonList;