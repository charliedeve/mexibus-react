import React from 'react'
import './styleHeader.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

  const navigate = new useNavigate();

  const signInBtn = () =>{
    navigate('/login')
  }

  return (
    <header className='header'>
      <div onClick={()=>{alert("Hola")}} className='logo'></div>
      <nav>
        <button
        onClick={signInBtn} 
        className='btnSignin'>Iniciar Sesión</button>
      </nav>
    </header>
  );
}