import React from 'react'
import donacion from '../img/donacion.jpg'
import '../stylesDonacion/DonaVolunt.css'
function CardAporte() {
  return (
    <div className='contenedordona'>
        <div className='carddona'>
            <h2>APORTE A PATITAS AMIGAS</h2>
            <p>Todas las personas pueden apoyar desde un boliviano, lo que deseen, o  lo que esta dentro de sus posibilidades, se deposita a las siguientes cuentas del Banco Union, Banco Naciona de Bolivia, o mediante paypal. Se le agrade de todo corazón su colaboración "Buscamos crear conciencia, de que la gente sepa que ayudar, aunque sea lo mínimo"</p>   
        </div>
        <img src={donacion} alt='padrino'></img>
    </div>
  )
}

export {CardAporte}