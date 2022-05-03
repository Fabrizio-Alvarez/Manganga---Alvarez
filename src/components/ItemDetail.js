import React from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({detalles}) => {

  return (
        <div id='itemCount'>
          <label htmlFor="my-modal" className="btn modal-button">Buy</label>
          <input type="checkbox" id="my-modal" className="modal-toggle"/>
          <div className="modal">
            <div className="modal-box">
            <figure className='w-2/5 h-1/6' style={{display: 'inline-block'}}><img src={detalles.imgUrl} alt="T-shirts" /></figure>
            <p>{detalles.descripcion}</p>
            <p>{detalles.precio}</p>
            <ItemCount detalle={detalles}/>
            <div className="modal-action place-content-center">
              <label htmlFor="my-modal" className="btn">Buy!</label>
            </div>
          </div>
          </div>
        </div>
  )
}

export default ItemDetail