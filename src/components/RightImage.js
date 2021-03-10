import React from 'react';

function RightImage({ name, image, types }) {
  const typesList = types.map(type => {
    return <h2 key={type}>{type}</h2>
  })
  return(
    <div className='pokedex-right-img'>
      {typesList}
      <img src={image} alt={ `${name} official illustration` } />
    </div>
  )
}

export default RightImage;