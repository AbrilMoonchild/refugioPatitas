import React from 'react'
import corazon from '../imagesHome/love.png'
import '../stylesHome/CardQ.css'
function CardV() {
  return (
    <div className='cardq'>
        <img src={corazon} alt='mascota'></img>
        <div className='textQ'>
        <h1>Nuestros Valores</h1>
        <div>Compasión, amor, ética, bienestar animal y responsabilidad 
        serán nuestros valores al momento de ayudar a los animales.</div>
        </div>
    </div>
  )
}

export {CardV}