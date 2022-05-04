import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({itemDetalle}) => {
  return (
    <div id={itemDetalle.id} className="card bg-base-100 shadow-xl">
        <div className="card-body">
        <figure><img src={itemDetalle.imgUrl} alt="T-shirts" className='max-h-52 max-w-52 min-h-52 min-w-52'/></figure>
            <h2 className="card-title self-center">{itemDetalle.tipo}</h2>
            <div className="card-actions justify-center">
            <Link htmlFor="my-modal" className="btn modal-button" to={`/item/${itemDetalle.id}`}>Ver</Link>
            </div>
        </div>
    </div>
  )
}

export default Item