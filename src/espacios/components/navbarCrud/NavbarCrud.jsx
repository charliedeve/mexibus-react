import React from 'react'
import './styleNavbar.css'
import { useNavigate } from 'react-router-dom'

const NavbarCrud = () => {

  const navigate = new useNavigate();

  return (
    <div className='container-navbar'>
      <div className='header-navbar'></div>
      <div className='container-links'>
        <div className='lineaLink' onClick={()=>navigate('/crudLinea1')}>CRUD LINEA 1</div>
        <div className='lineaLink' onClick={()=>navigate('/crudLinea2')}>CRUD LINEA 2</div>
        <div className='lineaLink' onClick={()=>navigate('/crudLinea3')}>CRUD LINEA 3</div>
        <div className='lineaLink' onClick={()=>navigate('/crudLinea4')}>CRUD LINEA 4</div>
      </div>
    </div>
  )
}

export default NavbarCrud