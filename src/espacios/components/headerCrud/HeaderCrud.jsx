import React from 'react'
import './styleHeaderCrud.css'
import { useNavigate } from 'react-router-dom'

export const HeaderCrud = () => {

  const navigate = new useNavigate();

  const logout = (e)=>{
    if(e.target.value == 'logout'){
      navigate('/login')
    }
  }

  return (
    <div className='headerCrud-container'>
        <nav className='navbarCrud'>
        <select className="logout-select" onChange={logout}>
          <option value="default" disabled selected>
            Opciones
          </option>
          <option value="profile">Mi Perfil</option>
          <option value="settings">Configuración</option>
          <option value="logout">Cerrar Sesión</option>
        </select>
        </nav>
    </div>
  )
}
