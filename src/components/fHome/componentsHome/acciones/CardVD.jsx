import React from 'react'
import img3 from '../../imagesHome/ayuda.jpg'
import {useNavigate} from 'react-router-dom'
function CardVD() {
    const history = useNavigate();
    const voluntariado=(e)=>{
    history('/donacionvoluntariado')}
  return (
    <div className='card'>
        <img src={img3} alt='donacionyvoluntariado'></img>
        <div className='info'>
            <h1>Manos a la obra</h1>
            <p>Existen muchas formas de ayudar! Conoce las alternativas</p>
            <button onClick={()=>voluntariado()}>Vamos</button>
        </div>
    </div>
  )
}

export {CardVD}