import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const itemId = useParams()['itemId'];

  const [item, setItem] = useState({});

  const db = getFirestore()

  useEffect(() => {
    let docId = doc(db, 'items', itemId);
    getDoc(docId).then( snapshot => {
      setItem(snapshot.data());
    })
  }, [itemId]);

  return(<ItemDetail detalles={item}/>)
}

export default ItemDetailContainer
