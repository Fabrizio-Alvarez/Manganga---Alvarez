import React from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext({
    carroItems: []
});


const CartProvider = ({children}) => {

    const [carroItems, setCarroItems] = useState([]);

    const addToCarro = ( itemId ) => {
        setCarroItems ( current => {
            return current.concat(itemId);
        })
    }

    const clearCarro = () => {
        setCarroItems ([]);
    }

    const context = {
        carroItems,
        addToCarro,
        clearCarro
    };

  return (
      <CartContext.Provider value={context}>
        {children}
      </CartContext.Provider>
  )
}

export default CartProvider