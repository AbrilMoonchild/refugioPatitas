import React from 'react'
import img2 from '../../imagesHome/requisitos.jpg'
import {useNavigate} from 'react-router-dom'
function CardREQ() {
    const history = useNavigate();
    const requisitos=(e)=>{
    history('/reqadop')}
  return (
    <div className='card'>
    <img src={img2} alt='requisitos'></img>
    <div className='info'>
        <h1>Requisitos</h1>
        <p>Conoce los requisitos necesarios para la adopcion</p>
        <button onClick={()=>requisitos()}>Ver requisitos</button>
    </div>
    </div>
  )
}

export {CardREQ}