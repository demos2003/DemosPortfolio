import React from 'react'
import Navbar from './Navbar1'
import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='nav-bar'>
        <div>
           <Navbar/>
        </div>
        <div>
            <Outlet/>
        </div>

    </div>
  )
}

export default Navigation