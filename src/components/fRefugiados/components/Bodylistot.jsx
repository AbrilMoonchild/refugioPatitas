import React from 'react'
import "../styles/Bodylist.css"
import { Cards } from './Cards'
import { NavAdop } from "./NavAdop";
import imot1 from "../otros/cyc.jpg"
import imot2 from "../otros/kumba.jpg"
import imot3 from "../otros/mochilo.jpg"
import imot4 from "../otros/nuez.jpg"
import imot5 from "../otros/Quillo.jpg"
import imot6 from "../otros/Corsa.jpg"
import imot7 from "../otros/Gazpacho.jpg"
import imot8 from "../otros/Peluchin.jpg"
import imot9 from "../otros/Pichona.jpg"
import imot10 from "../otros/Puk.jpg"
import imot11 from "../otros/Quentin.jpg"
import imot12 from "../otros/Skinner.jpg"

const cards = [
    {
        id:"201",
        img: imot1,
        raza: "Mapuche",
        color: "Negro con cafe",
        edad: "1 año - 8 meses",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"202",
        img: imot2,
        raza: "Californiano",
        color: "Blanco con manchas",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"203",
        img: imot3,
        raza: "Jersey Wooly",
        color: "Plomo",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"204",
        img: imot4,
        raza: "Mini rex",
        color: "Blanco con plomo",
        edad: "1/2 años",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"205",
        img: imot5,
        raza: "Booted Bantman",
        color: "Blanco",
        edad: "9 meses",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"206",
        img: imot6,
        raza: "Mapuche A",
        color: "Blanco o.negros",
        edad: "10 meses",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"207",
        img: imot7,
        raza: "Californiano",
        color: "Negro manchado",
        edad: "1 1/2 años",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"208",
        img: imot8,
        raza: "Jersey Wooly",
        color: "Crema/Blanco",
        edad: "11 meses",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"209",
        img: imot9,
        raza: "Cougla",
        color: "Blanco Jaspeado",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Hembra"
    },
    {
        id:"210",
        img: imot10,
        raza: "Cobaya",
        color: "marron/blanco",
        edad: "11 meses",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"211",
        img: imot11,
        raza: "Mestizo",
        color: "Blanco",
        edad: "8 meses",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"212",
        img: imot12,
        raza: "Cobaya",
        color: "Marron con manchas",
        edad: "1 año",
        tamano: "Pequeño",
        sexo: "Macho"
    }
]

function Bodylistot(props) {
    return (
        <div className='contenido'>
            <NavAdop></NavAdop>
            <div className='cont-total'> 
            {
                cards.map(card => (
                    <Cards img={card.img} raza={card.raza} color={card.color} edad={card.edad} tamano={card.tamano} sexo={card.sexo} />
                ))
            }
        </div>
        </div>
    )
}

export {Bodylistot}