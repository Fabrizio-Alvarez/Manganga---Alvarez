import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="md:container md:mx-auto text-center">
        <p className="hover:text-pink-600">{greeting}</p>
        </div>
  )
}

export default ItemListContainer