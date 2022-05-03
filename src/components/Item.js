import React from 'react';
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({detalles}) => {
  return (
    <div id={detalles.id} className="card bg-base-100 shadow-xl w-1/2 ">
        <div className="card-body">
        <figure><img src={detalles.imgUrl} alt="T-shirts" /></figure>
            <h2 className="card-title self-center">T-shirts!</h2>
            <div className="card-actions justify-center">
            <ItemDetailContainer detalles={detalles}/>
            </div>
        </div>
    </div>
  )
}

export default Item