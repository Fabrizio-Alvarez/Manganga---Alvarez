import React from 'react'

const Navbar = ({children}) => {
  return (
    <div id='navbar'>
      <div className="navbar bg-base-100 bg-zinc-900">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-pink-600">Manganga</a>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-pink-600">Merchandising</a>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-pink-600">QaA</a>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-pink-600">LineUp</a>
        </div>
        <div className="flex-none">
          <>
            {children}
          </>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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