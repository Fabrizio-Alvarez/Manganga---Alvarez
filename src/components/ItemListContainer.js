import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'

const ItemListContainer = ({merchandisingData}) => {
  const categoryId = useParams()['tipoId']

  const [itemData, setItemData] = useState([]);

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
        if (categoryId != undefined) {
          result = result.filter( i => i.tipoId == categoryId)
        }
        setItemData(result)
        }
    )
      
  }, [categoryId]);
  return (
      <div className="md:container md:mx-auto text-center">
      <ItemList merchandisingData={itemData}/>
      </div>
    )
}

export default ItemListContainer