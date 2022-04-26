import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
        <>
          <Navbar/>
          <ItemListContainer/>
        </>
  );
}

export default App;
