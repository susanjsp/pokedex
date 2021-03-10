import React from 'react';

function RightImage({ name, image }) {
  return(
    <div className='pokedex-right-img'>
      <img src={image} alt={ `${name} official illustration` } />
    </div>
  )
}

export default RightImage;