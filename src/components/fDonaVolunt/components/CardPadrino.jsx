import React from 'react'
import padrino from '../img/esterilizacion-perros-gatos.jpg'
import '../stylesDonacion/DonaVolunt.css'
function CardPadrino() {
  return (
    <div className='contenedordona'>
        <div className='carddona'>
            <h2>PADRINO DE ESTERILIZACIÓN</h2>
            <p>Con la finalidad de tener menos perros y gatos en situacion de calle, combatir la sobrepoblacion y que por ende los animales todo tipo de males, el Refugio Patitas con la cooperacion de veterinarias lanza la campaña "Sin callejeros". Lo cual consite en que una persona puede apadrinar una esterilización, ya sea para un perrito o gatito en condición vulnerable.</p>
        </div>
    <img src={padrino} alt='padrino'></img>
    </div>
)
}

export {CardPadrino}