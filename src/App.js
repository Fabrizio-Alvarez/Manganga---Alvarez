import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import merchandisingData from './components/data/merchandisingData';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar merchandisingData={merchandisingData}/>
        <Routes>
          <Route path='/' element={<ItemListContainer merchandisingData={merchandisingData}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:tipoId' element={<ItemListContainer merchandisingData={merchandisingData}/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
      
  );
}

export default App;
