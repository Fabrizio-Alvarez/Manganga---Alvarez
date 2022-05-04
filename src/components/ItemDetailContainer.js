import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import merchandisingData from './data/merchandisingData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const itemId = useParams()['itemId'];

  const [item, setItem] = useState({});

  useEffect(() => {
    const promesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        if (merchandisingData == []) {
          reject('ha fallado la consulta')
        } else {
          resolve(merchandisingData)
        }
      }, 2000);
    })
    
    promesa.then (
      result => {
          setItem(result.find( i => i.id == itemId))
        }
    )
  }, [itemId]);

  return(<ItemDetail detalles={item}/>)
}

export default ItemDetailContainer
