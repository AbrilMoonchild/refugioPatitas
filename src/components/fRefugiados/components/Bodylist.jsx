import React from 'react'
import "../styles/Bodylist.css"
import { Cards } from './Cards'
import im1 from "../images/buff.jpg"
import im2 from "../images/chanquete.jpg"
import im3 from "../images/Dumbo.jpg"
import im4 from "../images/Dylan.jpg"
import im5 from "../images/gordon.jpg"
import im6 from "../images/paw.jpg"
import im7 from "../images/rex.jpg"
import im8 from "../images/rumba.jpg"
import im9 from "../images/Socrates.jpg"
import im10 from "../images/Thor.jpg"

const cards = [
    {
        id:"1",
        img: im1,
        raza: "Mestizo",
        color: "Blanco con negro",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"2",
        img: im2,
        raza: "Mestizo",
        color: "Blanco con negro",
        edad: "6 años",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"3",
        img: im3,
        raza: "Mestizo",
        color: "Cafe claro",
        edad: "1 año",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"4",
        img: im4,
        raza: "Mestizo",
        color: "Cafe claro",
        edad: "1/2 año",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"5",
        img: im5,
        raza: "Pitbull",
        color: "Blanco con manchas negras",
        edad: "3 meses",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"6",
        img: im6,
        raza: "Mestizo",
        color: "Cafe claro",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"7",
        img: im7,
        raza: "Mestizo",
        color: "Negro",
        edad: "4 años",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"8",
        img: im8,
        raza: "Mestizo",
        color: "Cade oscuro con blanco",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"9",
        img: im9,
        raza: "Mestizo",
        color: "Cafe claro con blanco",
        edad: "1/2 año",
        tamano: "Mediano",
        sexo: "Macho"
    }, 
    {
        id:"10",
        img: im10,
        raza: "Mestizo",
        color: "Negro con blanco",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    }
]

function Bodylist(props) {
    return (
        <div className='cont-total'> 
            {
                cards.map(card => (
                    <Cards img={card.img} raza={card.raza} color={card.color} edad={card.edad} tamano={card.tamano} sexo={card.sexo} />
                ))
            }
        </div>
    )
}

export {Bodylist}