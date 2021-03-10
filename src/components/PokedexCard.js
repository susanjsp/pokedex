import React from 'react';

// import PokedexHeader from './PokedexHeader';
import GeneralStats from './GeneralStats';
import RightImage from './RightImage';
import Stats from './Stats';

function PokedexCard({ pokemon }) {
  return(
    <div className='pokedex'>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprite} alt={ `${pokemon.name} sprite` } />
      <GeneralStats id={pokemon.id} height={pokemon.height} weight={pokemon.weight} types={pokemon.types}/>
      <RightImage name={pokemon.name} image={pokemon.image} />
      <Stats stats={pokemon.stats} baseExp={pokemon.baseExp} />
    </div>
  )
}

export default PokedexCard;