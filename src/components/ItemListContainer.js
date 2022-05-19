import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const categoryId = useParams()['tipoId']

  const [itemData, setItemData] = useState([]);
  const db = getFirestore()
  let itemsArr = []

  useEffect(() => {
    
      itemsArr = []
      const docs = collection(db, 'items')
        getDocs(docs).then( snapshot => {
          snapshot.docs.forEach(item => {
            if (categoryId == item.data().tipoId) {
              itemsArr.push(item.data())
            }
        });
      })
      setItemData(itemsArr);


  }, [categoryId]);

  return (
    itemData ?
      <div className="md:container md:mx-auto text-center">
      <ItemList items={itemData}/>
      </div> : ''
    )
}

export default ItemListContainer