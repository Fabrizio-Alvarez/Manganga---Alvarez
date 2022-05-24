import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const CartWidget = () => {

  const {carroItems} = useContext(CartContext);
  
  const [subtotal, setSubtotal] = useState(parseInt(0));

  const [cantidad, setCantidad] = useState(parseInt(0))

  const [itemsCarro, setItemsCarro] = useState([]);

  const [item, setItem] = useState({})

  let itemId = [];
  
  useEffect(() => {
    const db = getFirestore();
    if (carroItems && carroItems.length > 0) {
      carroItems.forEach(carroItem => {
        itemId = doc(db, 'items', toString(carroItem.itemId))
        getDoc(itemId).then( snapshot  => {
          setItem(snapshot.data());
          if (itemsCarro.length > 0) {
            snapshot.data(item)
            setItemsCarro(itemsCarro.concat(item))
          } else {
            snapshot.data(item)
            setItemsCarro(item)
          }
        })
        setCantidad(parseInt(cantidad) + parseInt(carroItem.cantidad))
      });
    }
  }, [carroItems]);
  
  useEffect(() => {
    if (itemsCarro != undefined && itemsCarro.length > 0) {
      itemsCarro.forEach(item => {
        carroItems.forEach(carroItem => {
          if (carroItem.itemId == item.id) {
            setSubtotal(subtotal + (parseInt(item.precio) * parseInt(carroItem.cantidad)))
          }
        })
      });
    }
  }, [itemsCarro]);
  

  return (
    <div className="dropdown dropdown-end">
    <label tabIndex="0" className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        {(cantidad && cantidad > 0) ? <span className="badge badge-sm indicator-item">{cantidad}</span> : ''}
      </div>
    </label>
    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
      <div className="card-body">
        <span className="font-bold text-lg">{} Items</span>
        <span className="text-info">Subtotal: {subtotal}</span>
        <div className="card-actions">
          <Link className="btn btn-primary btn-block" to={`/cart`}>Ver Carro</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartWidget