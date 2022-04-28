import React from 'react'
import ItemCount from './ItemCount'

const Item = ({detalles}) => {
  return (
    <div id={detalles.id} className="card bg-base-100 shadow-xl w-1/2 ">
        <figure><img src={detalles.imgUrl} alt="T-shirts" /></figure>
        <div className="card-body">
            <h2 className="card-title">T-shirts!</h2>
            <p>{detalles.descripcion}</p>
            <div className="card-actions justify-end">
            <ItemCount stock={parseInt(detalles.stock)}/>
            </div>
        </div>
    </div>
  )
}

export default Item