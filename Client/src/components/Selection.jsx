import React from 'react';
import Header from './Header';
import BoxProduct from './BoxProduct';

function Selection() {
  return (
    
    <div>
     <Header/>
      <div className='seletion_box'>
        <BoxProduct/>
        <BoxProduct/>
      </div>
    </div>
  )
}

export default Selection