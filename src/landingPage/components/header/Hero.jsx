import React from 'react'
import './styleHero.css'

export const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className='hero-quare'>
          <h1>Tu Solución Ideal</h1>
          <p>Descubre cómo podemos ayudarte a alcanzar tus objetivos.</p>
          <a href="#cta" className="cta-button">Empieza Ahora</a>
        </div>
      </div>
    </header>
  )
}
