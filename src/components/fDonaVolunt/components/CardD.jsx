import React from 'react'
import '../stylesDonacion/DonaVolunt.css'
import qr1 from '../img/qr.jpg'
function CardD() {
  return (
    <>
     <div className='texto'>
      <div>
        <h3>BANCO UNION</h3>
        <p>CUENTA: 00000000001</p>
        <img src= {qr1} alt="Foto QR"></img>
      </div>
      <div>
        <h3>BANCO NACIONAL DE BOLIVIA</h3>
        <p>CUENTA: 00000000001</p>
        <img src= {qr1} alt="Foto QR"></img>
        <h2>Gracias por ayudar a los animales!</h2>
      </div>
    </div>
    </>
  )
}
export {CardD}