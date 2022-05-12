import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import merchandisingData from './data/merchandisingData';

const Cart = () => {

  
  const { carroItems } = useContext(CartContext);
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (carroItems.length > 0) {
      carroItems.forEach(carroItem => {
        setItems(items.concat(merchandisingData.filter( i => i.id == carroItem)))
      });
    }
  }, [carroItems]);
  
  if (items !== undefined && items.length > 0) {
    return (
      items.map((item) => {
        return (
          <div key={item.id} className="card card-side bg-base-100 shadow-xl">
            <figure><img src={item.imgUrl} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">{item.titulo}</h2>
              <p>{item.descripcion}</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
          )
        })
    )
  }
}

export default Cart