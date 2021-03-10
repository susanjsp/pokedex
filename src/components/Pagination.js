import React from 'react';

function Pagination({ nextPage, prevPage }) {
  return(
    <div>
      {prevPage && <button onClick={prevPage}>Prev</button>}
      {nextPage && <button onClick={nextPage}>Next</button>}
    </div>
  )
}

export default Pagination;