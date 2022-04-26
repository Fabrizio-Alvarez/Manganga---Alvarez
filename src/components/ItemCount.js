import React, { useState } from 'react'

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(stock)

    const addHandler = () => {
        setCount(count + 1);
    } 

    const subsHandler = () => {
      if (count != 0) {
        setCount(count - 1);
      }
    } 
    
  return (
    <div id='itemCount'>
      <label htmlFor="my-modal" className="btn modal-button">Buy</label>
      <input type="checkbox" id="my-modal" className="modal-toggle"/>
      <div className="modal">
        <div className="modal-box">
        <span>Stock</span>
        <div className='grid grid-rows-3 justify-center'>
          <button onClick={subsHandler}> - </button>
          <strong> {count} </strong>
          <button onClick={addHandler}> + </button>
        </div>
        <div className="modal-action">
          <label htmlFor="my-modal" className="btn">Buy!</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ItemCount