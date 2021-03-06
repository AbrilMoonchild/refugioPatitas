import React from 'react'
import "../styles/Cards.css"
import {Link}from"react-router-dom"

function Cards({img, raza, color, edad, tamano, sexo}) {
    return (
        <div className='cards'>
            <div className='imagenes'>
                <img src={img} alt="Imagen mascota" />
            </div>
            <div className='informacion'>
                <span>Raza: {raza} </span>
                <span>Color: {color} </span>
                <span>Edad: {edad} </span>
                <span>Tamaño: {tamano} </span>
                <span>Sexo: {sexo} </span>
            </div>
            <div className='boton-card'>
            <Link to = "/Formulario "><button>Adopta Aqui</button> </Link>


            </div>
        </div>
    )
}

export {Cards}