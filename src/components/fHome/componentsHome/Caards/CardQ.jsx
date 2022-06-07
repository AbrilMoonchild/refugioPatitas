import React from 'react'
import mascota from '../../imagesHome/mascota.png'
import '../../stylesHome/CardQ.css'
function CardQ() {
  return (
    <div className='cardq'>
        <img src={mascota} alt='mascota'></img>
        <div className='textQ'>
        <h1>¿Qué es Patitas Amigas?</h1>
        <div>
        Es una entidad sin fines de lucro fundada en 2004 con la
        finalidad de velar por el bienestar de los animales en la ciudad de La Paz. 
        PATITAS AMIGAS esta legalmente establecida en Bolivia con Personería Jurídica R.P N°832/97
        </div>
        
        </div>
    </div>
  )
}

export {CardQ}