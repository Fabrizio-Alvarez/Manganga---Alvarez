import React, { useEffect } from 'react'
import Item from './Item'

const ItemList = ({items}) => {

  return (
    <div className="carousel carousel-center rounded-box">
    {items.map( (itemDetalle) => {
        return (
        <div key={itemDetalle.id} className="carousel-item max-h-96 max-w-96 min-h-96 min-w-96">
            <Item itemDetalle={itemDetalle}/>
        </div>)
    })}
   </div>
  )
}

export default ItemList