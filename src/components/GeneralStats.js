import React from 'react';

function GeneralStats({ id, height, weight }) {
  return(
    <table className='pokedex-general-stats'>
      <tr>
        <td>Pokedex ID</td>
        <td>{id}</td>
      </tr>
      <tr>
        <td>Height</td>
        <td>{height}</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>{weight}</td>
      </tr>
    </table>
  )
}

export default GeneralStats;