import React from 'react'
import blanco from '../../imagesHome/objetivo.png'
import '../../stylesHome/CardQ.css'
function CardP() {
  return (
    <div className='cardq'>
        <img src={blanco} alt='mascota'></img>
        <div className='textQ'>
        <h1>¿Qué promovemos?</h1>
        <div>El derecho a los animales a una vida digna o cuando sea imprescindible una muerte sin sufrimiento.
        La defensa de las especies silvestres como parte de la biodiversidad del planeta y el respeto a su entorno natural.
        El cumplimiento de las disposiciones legales que amparan a los animales.
        Los principios de Bienestar Animal.</div>
        </div>
    </div>
  )
}

export {CardP}