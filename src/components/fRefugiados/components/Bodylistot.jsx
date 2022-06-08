import React from 'react'
import "../styles/Bodylist.css"
import { Cards } from './Cards'
import { NavAdop } from "./NavAdop";
import imot1 from "../otros/cyc.jpg"
import imot2 from "../otros/kumba.jpg"
import imot3 from "../otros/mochilo.jpg"
import imot4 from "../otros/nuez.jpg"
import imot5 from "../otros/Quillo.jpg"

const cards = [
    {
        id:"1",
        img: imot1,
        raza: "Mapuche",
        color: "Negro con cafe y N.",
        edad: "1 aÃ±o - 8 meses",
        tamano: "Medianos",
        sexo: "Machos"
    },
    {
        id:"2",
        img: imot2,
        raza: "Californiano",
        color: "Blanco con manchas n.",
        edad: "2 aÃ±os",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"3",
        img: imot3,
        raza: "Jersey Wooly",
        color: "Plomo",
        edad: "1 aÃ±o",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"4",
        img: imot4,
        raza: "Mini rex",
        color: "Blanco con plomo",
        edad: "1/2 aÃ±o",
        tamano: "PequeÃ±o",
        sexo: "Hembra"
    },
    {
        id:"5",
        img: imot5,
        raza: "Booted Bantman",
        color: "Blanco con manchas",
        edad: "9 meses",
        tamano: "Grande",
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