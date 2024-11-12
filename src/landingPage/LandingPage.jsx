import React from 'react'
import { Header } from './components/header/Header';
import { BodyLanding } from './components/body/BodyLanding';
import { Hero } from './components/header/Hero';

export const LandingPage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <BodyLanding/>
    </div>
  )
}
