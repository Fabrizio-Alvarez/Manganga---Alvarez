import React from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext({
    carroItems: []
});


const CartProvider = ({children}) => {

    const [carroItems, setCarroItems] = useState([]);

    const addToCarro = ( item ) => {
        let duplicado = false;
        setCarroItems ( current => {
            if (current) {
                current.forEach( (itemCarro, index, current) => {
                    if (itemCarro.itemId == item.itemId) {
                        duplicado = true
                        return current[index].cantidad = current[index].cantidad + item.cantidad
                    }
                });
                if (!duplicado) {
                    return current.concat(item);
                } else {
                    return current
                }
            } else {
                current = item;
            }
        })
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