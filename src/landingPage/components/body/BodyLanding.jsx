import React from 'react'
import './styleBody.css'
import { useNavigate } from 'react-router-dom'

export const BodyLanding = () => {

  const navigate = useNavigate();

  return (
    <div className='container-body'>
      <h1>Selecciona la línea que prefieras</h1>
      <div className='container-cards'>
        <div onClick={() => { navigate('/landingPLinea') }} className='card-linea1'>
        </div>
        <div className='card-linea2'>
        </div>
        <div className='card-linea3'>
        </div>
        <div className='card-linea4'>
        </div>
      </div>
      <br />
      <hr className='separador'/>
      <br />
      <section className='about'>
          <h1>Information about enterprise
          </h1>
        </section>
    </div>
  )
}