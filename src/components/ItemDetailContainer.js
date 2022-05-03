import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({detalles}) => {

  const [detalle, setDetalle] = useState([]);

  useEffect(() => {
    const promesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        if (detalles == []) {
          reject('ha fallado la consulta')
        } else {
          resolve(detalles)
        }
      }, 2000);
    })
    
    promesa.then (
      result => {
          setDetalle(result)
        }
    )
      
  }, [detalle]);

    return (
            <ItemDetail detalles={detalle}/>
    )
}

export default ItemDetailContainer