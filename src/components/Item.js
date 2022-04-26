import React from 'react'
import ItemCount from './ItemCount'

const Item = () => {
  return (
    <div className="card bg-base-100 shadow-xl w-1/6 h-1/6">
        <figure><img src="https://i.pinimg.com/474x/31/e3/3c/31e33cc3e88e71304ea71329f1f91d47--band-shirts-logo-t-shirts.jpg" alt="T-shirts" /></figure>
        <div className="card-body">
            <h2 className="card-title">T-shirts!</h2>
            <p>Looking for the best band merch?</p>
            <div className="card-actions justify-end">
            <ItemCount stock={6}/>
            </div>
        </div>
    </div>
  )
}

export default Item