import React from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext({
    carroItems: [],
});


const CartProvider = ({children}) => {

    const [carroItems, setCarroItems] = useState([]);

    const addToCarro = ( item ) => {
        if (isInCarro(item.itemId)) {
            let index = carroItems.findIndex((index) => (index.itemId == item.itemId))
            let copyCarro = [...carroItems]
            copyCarro[index].cantidad += item.cantidad
            setCarroItems(copyCarro)
        } else {
            setCarroItems([...carroItems, item])
        }
    }

    const isInCarro = (id) => { 
        return carroItems.some((carroItem) => (carroItem.itemId == id))
    }

    const removerDeCarro = (itemId) => {
        if (itemId) {
            setCarroItems ( current => {
                if (current) {
                    current.forEach((item, index, current) => {
                        if (item.id = itemId) {
                            return delete(current[index]);
                        }
                    });
                    return current
                } else {
                    return []
                }
            })
        }
    }

    const clearCarro = () => {
        setCarroItems ([]);
    }

    const context = {
        carroItems,
        addToCarro,
        clearCarro,
        removerDeCarro
    };

  return (
      <CartContext.Provider value={context}>
        {children}
      </CartContext.Provider>
  )
}

export default CartProvider