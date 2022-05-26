import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore';
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

const Cart = () => {

  const { carroItems, removerDeCarro } = useContext(CartContext);
  
  const [items, setItems] = useState([]);
  
  let total = 0;

  useEffect(() => {
    let itemsArr = []
    const db = getFirestore();
    let itemId = [];
    if (carroItems && carroItems.length > 0) {
      carroItems.forEach(carroItem => {
        total += carroItem.cantidad * carroItem.precio
        itemId = doc(db, 'items', carroItem.itemId.toString());
        getDoc(itemId).then( snapshot => {
          itemsArr.push(snapshot.data());
          itemsArr.forEach(item => {
            if (carroItems.some((carroItem) => (carroItem.itemId == item.id))) {
              item.cantidad = carroItem.cantidad
            }
          });
          setItems(itemsArr)
        })
      });
    }
  }, [carroItems]);

  const buyCarro = async () => {
    const buyer = {
      name: 'Juan Perez',
      phone: '+5406574638164',
      Email: 'juanprz@gmail.com'
    }

    const itemsOrden = items.map( ({id, cantidad, precio}) => ({id, cantidad, precio}) );

    const date = new Date().toISOString().slice(0,10);

    const purchaseInformation = {
      buyer,
      itemsOrden,
      date,
      total
    }

    const db = getFirestore();
    const ordenes = collection(db, 'ordenes')
    const response = await addDoc(ordenes, purchaseInformation)
  }
  if (items !== undefined && items !== []) {
    return (
      <div className="grid">
        {items.map((item) => {
          return (
            <div key={item.id} className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
              <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                <img className="aspect-video w-96 rounded-t-2xl object-cover object-center" src={item.imgUrl} />
                <div className="grid-rows-3">
                  <small className="text-blue-400 pl-4 text-xs">{item.titulo}</small>
                  <h1 className="text-2xl pl-4 font-medium text-slate-600 pb-2">{item.titulo}</h1>
                  <div className='inline-flex justify-center'>
                    <p className="inline-flex w-max text-1xl pl-4 text-sm tracking-tight font-light text-slate-400 leading-6 ">{item.descripcion}</p>
                    <button onClick={ () => {removerDeCarro(item.id)}} className='inline-flex w-max text-3xl pl-44 pb-2 float-right'>-</button>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
          <button onClick={buyCarro} className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-pink-600 active:bg-black hover:bg-black">Comprar carro</button>
      </div>
    )
  } else {
    return (
      <div>
        <div className="grid place-items-center grid-rows-3 h-screen px-5 text-gray-700">
            <div className="w-full lg:w-1/2 mx-8"/>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8 content-center">
                No hay nada en el carro
            </p>
            <Link to={'/'} className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-pink-600 active:bg-black hover:bg-black">Ir a comprar</Link>
        </div>
      </div>
    )
  }
}

export default Cart