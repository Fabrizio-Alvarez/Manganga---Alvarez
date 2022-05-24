import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount'

const ItemDetail = ({detalles}) => {

const [ocultar, setOcultar] = useState(false);
const [terminarCompra, setTerminarCompra] = useState(false);
const [cantidad, setCantidad] = useState(parseInt(0))

const { addToCarro, carroItems } = useContext(CartContext);

const agregarAlCarro = () => {
  setTerminarCompra(true);
  setOcultar(true);
  addToCarro({itemId : detalles.id, cantidad : cantidad});
}

useEffect(() => {

}, [detalles]);
   
if (detalles.id != undefined) {
  return (
    <section key={detalles.id} className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={detalles.imgUrl}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Manganga</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detalles.titulo}</h1>
            <p className="leading-relaxed">{detalles.descripcion}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {!ocultar && <ItemCount detalle={detalles} cantidad={cantidad} setCantidad={setCantidad}/>}
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">{detalles.precio}</span>
              {!ocultar && <button onClick={ () => {agregarAlCarro()}} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">Agregar al carrito</button>}
              {terminarCompra && <Link className="flex ml-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded" to={`/cart`}>Terminar mi compra</Link>}
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
}

export default ItemDetail