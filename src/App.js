import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
        <>
          <Navbar>
            <CartWidget items_amount='4' subtotal='5499'/>
          </Navbar>
          <ItemListContainer greeting='Bienvenido'/>
        </>
  );
}

export default App;
