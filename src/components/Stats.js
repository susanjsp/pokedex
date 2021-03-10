import React from 'react';

function Stats({ stats, baseExp }) {
  const tableRows = stats.map(stat => {
    return(
      <tr>
        <td><label htmlFor={stat.name} >{stat.name}</label></td>
        <td>{stat.value} / 120 </td>
        <td><progress name={stat.name} value={stat.value} max='120' /></td>
      </tr>
    )
  });

  return(
    <table className='pokedex-stats'>
      <tr>
        <td><label htmlFor='baseExp' >Base exp</label></td>
        <td>{baseExp} / 120 </td>
        <td><progress name='baseExp' value={baseExp} max='120' /></td>
      </tr>
      {tableRows}
    </table>
  )
}

export default Stats;