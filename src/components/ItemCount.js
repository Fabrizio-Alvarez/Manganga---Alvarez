import React, { useState, useEffect  } from 'react'

const ItemCount = ({detalle}) => {

  const [countStock, setCountStock] = useState(detalle.stock)
  
  useEffect(() => {
    setCountStock(detalle.stock);
    }, [detalle]);

    const addHandlerStock = () => {
      if (countCantidad > parseInt(0)) {
        setCountStock(countStock + 1);
      }
    } 

    const subsHandlerStock = () => {
      if (countStock > parseInt(0)) {
        setCountStock(countStock - 1);
      }
    }

    const [countCantidad, setCountCantidad] = useState(0)

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
    <div className='grid-cols-4 flex'>
      <span className='mx-16 my-3 title-font font-medium text-2l text-gray-900 self-center'>Stock = {parseInt(countStock)}</span>
      <button className='mx-6 my-3 btn text-3l text-center self-center' style={{"height" : "2rem", "width" : "2rem", "minHeight" : "2rem", "minWidth" : "2rem"}} onClick={() => { subsHandlerCantidad(); addHandlerStock()} }> - </button>
      <strong className='mx-6 my-3 title-font font-medium text-2l text-gray-900 self-center'> {countCantidad} </strong>
      <button className='mx-6 my-3 btn text-3l text-center self-center' style={{"height" : "2rem", "width" : "2rem", "minHeight" : "2rem", "minWidth" : "2rem"}} onClick={() => { subsHandlerStock(); addHandlerCantidad()} }> + </button>
    </div>
  )
}

export default ItemCount