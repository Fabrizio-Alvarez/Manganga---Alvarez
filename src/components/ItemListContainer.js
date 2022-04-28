import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const detalles = [{
    'id' : '1',
    'precio' : '1500$',
    'descripcion' : 'Una remera re copada de los strokes',
    'imgUrl' : 'https://i.pinimg.com/474x/31/e3/3c/31e33cc3e88e71304ea71329f1f91d47--band-shirts-logo-t-shirts.jpg',
    'stock' : '500'
  }]

  const [detalle, setDetalle] = useState([]);

  useEffect(() => {
    const promesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        if (detalles == []) {
          reject('ha fallado la consulta')
        } else {
          console.log(detalles)
          resolve(detalles)
        }
      }, 2000);
    })
    
    promesa.then (
      result => {
          console.log(result)
          setDetalle(result)
        }
    )
      
  }, []);
    
  return (
      <div className="md:container md:mx-auto text-center">
        {detalle.map ((item) => {return <ItemList detalles={item}/>})}
      </div>
    )
}

export default ItemListContainer