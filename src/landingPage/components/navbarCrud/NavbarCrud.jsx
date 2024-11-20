import React from 'react'
import './styleNavbar.css'

const NavbarCrud = () => {
  return (
    <div className='container-navbar'>
        <div className='header-navbar'></div>
        <div className='container-links'>
          <div className='linea1Link'><a href="">CRUD LINEA 1</a></div>
          <div className='linea2Link'><a href="">CRUD LINEA 2</a></div>
          <div className='linea3Link'><a href="">CRUD LINEA 3</a></div>
          <div className='linea4Link'><a href="">CRUD LINEA 4</a></div>
        </div>
    </div>
  )
}

export default NavbarCrud