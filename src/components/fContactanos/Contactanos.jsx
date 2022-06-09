import React from 'react'
import '../fContactanos/contactanos.css'
import'../fContactanos/icon/facebook.png'
function Contactanos() {
  return (
    <>
    <div>
    <div className='contenedor-titulo'>
    <h1>CONTACTOS</h1>
   
    <h2>"Nos puedes contactar por nuestras redes sociales , o visitando nuestro establecimiento"</h2>
   
    </div>
    </div>

    <div className='contenedor-casa'>
      <div>
        <h2>Dirección Casa Matriz:</h2>
        <p>Escuela militar de ingenieria , Calle 2 de irpavi(LADO MEGACENTER)</p>
      </div>
      <div>
        <h2>Telefono:</h2>
        <p>2724850/ Fax : 2724952</p>
      </div>
      <div>
        <h2>WhatsAp</h2>
        <p>Cel: 70150215</p>
        <p>Cel: 76526738</p>
      </div>
      <div>
        <h2>Facebook</h2>
        <p>Pagina Oficial: Refugio Patitas</p>
      </div>
      <div>
        <h2>Instagram</h2>
        <p>Refugio Patias 1_0_EMI</p>
      </div>
    </div>

    <div className='contenedor-logos'>
      <div>
        <img src='/src/components/fContactanos/icon/facebook.png' alt="Foto Facebook"></img>

      </div>
      </div>
      
  </>)  }
      

export {Contactanos}
