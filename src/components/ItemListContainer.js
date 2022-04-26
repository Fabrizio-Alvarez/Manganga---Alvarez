import React from 'react'
import Item from './Item'

const ItemListContainer = () => {
  return (
    <div className="md:container md:mx-auto text-center">
      <div className="hover:text-pink-600">{<Item/>}</div>
    </div>
  )
}

export default ItemListContainer