import React from 'react'
import "../styles/Bodylist.css"
import { Cards } from './Cards'
import { NavAdop } from "./NavAdop";
import imcat1 from "../gatos/arnold.jpg"
import imcat2 from "../gatos/babe.jpg"
import imcat3 from "../gatos/baileys.jpg"
import imcat4 from "../gatos/bambu.jpg"
import imcat5 from "../gatos/cersei.jpg"
import imcat6 from "../gatos/Lamar.jpg"
import imcat7 from "../gatos/marte.jpg"
import imcat8 from "../gatos/mayo.jpg"
import imcat9 from "../gatos/pekas.jpg"
import imcat10 from "../gatos/shock.jpg"

const cards = [
    {
        id:"11",
        img: imcat1,
        raza: "Bombay",
        color: "Negro",
        edad: "1 año",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"12",
        img: imcat2,
        raza: "American wirehair",
        color: "Blanco y cafe",
        edad: "2 años",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"13",
        img: imcat3,
        raza: "Burmes",
        color: "Cafe claro",
        edad: "1 año",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"14",
        img: imcat4,
        raza: "Cymric",
        color: "Negro con blanco",
        edad: "1 año",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"15",
        img: imcat5,
        raza: "American wirehair",
        color: "Cafe con manchas",
        edad: "3 meses",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"16",
        img: imcat6,
        raza: "Ocicat",
        color: "Plomo con m. negras",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"17",
        img: imcat7,
        raza: "Cornish rex",
        color: "Cafe manchado",
        edad: "4 año",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"18",
        img: imcat8,
        raza: "American wirehair",
        color: "Cafe oscuro y blanco",
        edad: "3 meses",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"19",
        img: imcat9,
        raza: "Selkirk rex",
        color: "Blanco con m. negras",
        edad: "1/2 años",
        tamano: "Mediano",
        sexo: "Macho"
    }, 
    {
        id:"20",
        img: imcat10,
        raza: "Korat",
        color: "Plomo con cafe",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    }
]


function Bodylistca(props) {
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

export {Bodylistca}