import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className="navbar bg-base-100 bg-zinc-900">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-pink-600" to={'/home'}>Manganga</Link>
        </div>
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-pink-600" to={'/merchandising'}>Merchandising</Link>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-pink-600">QaA</a>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-pink-600">LineUp</a>
        </div>
        <div className="flex-none">
        <>
          <CartWidget items_amount='4' subtotal='5499'/>
        </>

          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar