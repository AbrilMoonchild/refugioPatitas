import React from 'react'
import v1 from '../img/v1.jpg'
import '../stylesDonacion/DonaVolunt.css'
function CardVoluntario() {
  return (
    <div className='contenedordona'>
      <h1>¿COMO PUEDO AYUDAR?</h1>
       <br></br> 
        <div className='carddona'>
            <h2>VOLUNTARIADO</h2>
            <p>Ser voluntario te permitirá adquirir nuevos conocimientos y habilidades, así como desarrollar las ya existentes. Además de poder estar en contacto con personas que comparten tus inquietudes y entusiasmo, lo más importante es que marcarás una diferencia salvando vidas y ayudando a dar a los animales una segunda oportunidad.</p>
        </div>
      <img src={v1} alt='voluntariado'></img>
    </div>
  )
}

export {CardVoluntario}