import React from 'react';
import './PokedexCard.scss';

// import PokedexHeader from './PokedexHeader';
import GeneralStats from '../GeneralStats/GeneralStats';
import RightImage from '../RightImage';
import Stats from '../Stats';

function PokedexCard({ pokemon }) {
  return(
    <>
      <h1>{pokemon.name}</h1>
      <div className='pokedex'>
        <div>
          <GeneralStats id={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprite}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types}
            abilities={pokemon.abilities} />
          <Stats stats={pokemon.stats} baseExp={pokemon.baseExp} />
        </div>

        <RightImage name={pokemon.name} image={pokemon.image} />
      </div>
    </>
  )
}

export default PokedexCard;