import React from 'react';

function GeneralStats({ id, height, weight, types }) {
  const typesList = types.map(type => {
    return(
      <div key={type}>
        <p>{type}</p>
      </div>
    )
  })

  return(
    <div className='pokedex-general-stats'>
      <p>No. {id}</p>
      <table>
        <tr>
          <td>Type</td>
          <td>{typesList}</td>
        </tr>
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
    </div>
  )
}

export default GeneralStats;