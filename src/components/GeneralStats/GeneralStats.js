import React from 'react';
import './GeneralStats.scss';

function GeneralStats({ id, name, sprite, height, weight, types, abilities }) {
  const typesList = types.map(type => {
    return(
      <div key={type} className={type}>
        {type}
      </div>
    )
  })

  const abilitiesString = abilities.join(', ');

  return(
    <div className='pokedex-general-stats'>
      <div className='sprite-card'>
        <img src={sprite} alt={ `${name} sprite` } />
        <p>No. {id}</p>
        <div className="types-list">
          {typesList}
        </div>
      </div>
      <div>
        <p>Description of this pokemon, they're super cool and really strong, blah blah blah</p>
        <table>
          <tr>
            <td>Height</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Abilities</td>
            <td>{abilitiesString}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default GeneralStats;