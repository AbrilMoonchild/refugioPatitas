import React from 'react'
import { Slider } from './componentsHome/Slider'
import { CardsContainer } from './componentsHome/CardsContainer'
import { Accion } from './componentsHome/Accion'
import './stylesHome/Home.css'

function Home() {
 
  
  return (
    <div className='home'>
      
      
      <Slider></Slider>
      <div className='title'>ACERCA DE NOSOTROS</div>
      <CardsContainer></CardsContainer>
      <div className='title'>¡Anímate a la acción!</div>
      <Accion></Accion>
      
    </div>
    
  )
}

export {Home}