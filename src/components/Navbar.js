import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className="navbar bg-base-100 bg-zinc-900">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-pink-600" to={'/'}>Manganga</Link>
        </div>
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-pink-600" to={'/category/1'}>Remeras</Link>
        </div>
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-pink-600" to={'/category/2'}>Buzos</Link>
        </div>
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-pink-600" to={'/category/3'}>Gorras</Link>
        </div>
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl text-pink-600" to={'/category/4'}>Collares</Link>
        </div>
        <div className="flex-none">
        <>
          <CartWidget/>
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