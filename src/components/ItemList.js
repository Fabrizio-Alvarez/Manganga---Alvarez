import React from 'react'
import Item from './Item'

const ItemList = ({detalles}) => {
  return (
    <div className="carousel carousel-center rounded-box">
    <div className="carousel-item">
        <Item detalles={detalles}/>
    </div> 
    <div className="carousel-item">
        <Item detalles={detalles}/>
    </div> 
    <div className="carousel-item">
        <Item detalles={detalles}/>
    </div> 
    <div className="carousel-item">
        <Item detalles={detalles}/>
    </div> 
    <div className="carousel-item">
        <Item detalles={detalles}/>
    </div> 
    <div className="carousel-item">
        <Item detalles={detalles}/>
    </div> 
    <div className="carousel-item">
        <Item detalles={detalles}/>
    </div>
  </div>
  )
}

export default ItemList