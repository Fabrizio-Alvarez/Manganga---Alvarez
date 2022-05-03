import React, { useState, useEffect } from 'react'

const ItemCount = ({detalle}) => {

    const [countStock, setCountStock] = useState(parseInt(detalle.stock))

    const addHandlerStock = () => {
      if (countCantidad > parseInt(0)) {
        setCountStock(countStock + 1);
      }
    } 

    const subsHandlerStock = () => {
      if (countStock > parseInt(0)) {
        setCountStock(countStock - 1);
        return (<label htmlFor="my-modal" className="btn">Buy!</label>)
      }
    }

    const [countCantidad, setCountCantidad] = useState(parseInt(0))

    const addHandlerCantidad = () => {
      if (countStock > parseInt(0)) {
        setCountCantidad(countCantidad + 1);
      }
    } 

    const subsHandlerCantidad = () => {
      if (countCantidad > parseInt(0)) {
        setCountCantidad(countCantidad - 1);
      }
    } 
    
  return (
    <>
    <span>Stock = {countStock}</span>
        <div className='grid grid-cols-3 justify-center'>
          <button className='mx-5 btn btn-outline flex text-3xl text-center' onClick={() => { subsHandlerCantidad(); addHandlerStock()} }> - </button>
          <strong className='mx-5 text-3xl'> {countCantidad} </strong>
          <button className='mx-5 btn btn-outline text-3xl text-center' onClick={() => { subsHandlerStock(); addHandlerCantidad()} }> + </button>
    </div>
    </>
  )
}

export default ItemCount