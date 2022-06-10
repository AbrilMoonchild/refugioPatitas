import React from 'react'
import img1 from '../../imagesHome/adoptar.jpg'
import {useNavigate} from 'react-router-dom'
function CardR() {
    const history = useNavigate();
    const adoptar=(e)=>{
    history('/refugiados')}
  return (
    <div className='card'>
        <img src={img1} alt='refugiados'></img>
        <div className='info'>
            <h1>Una nueva oportunidad</h1>
            <p>Descubre a los animales que esperan por ti, y un nuevo hogar lleno de amor</p>
            <button onClick={()=>adoptar()}>Ver los candidatos</button>
        </div>
    </div>
  )
}

export {CardR}