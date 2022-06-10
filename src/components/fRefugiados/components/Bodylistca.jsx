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
import imcat11 from "../gatos/Angry.jpg"
import imcat12 from "../gatos/Bart.jpg"
import imcat13 from "../gatos/Ina.jpg"
import imcat14 from "../gatos/Melon.jpg"
import imcat15 from "../gatos/Tibo.jpg"
import imcat16 from "../gatos/Tijeras.jpg"

const cards = [
    {
        id:"111",
        img: imcat1,
        raza: "Bombay",
        color: "Negro",
        edad: "1 año",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"112",
        img: imcat2,
        raza: "American wirehair",
        color: "Blanco y cafe",
        edad: "2 años",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"113",
        img: imcat3,
        raza: "Burmes",
        color: "Cafe claro",
        edad: "1 año",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"114",
        img: imcat4,
        raza: "Cymric",
        color: "Negro con blanco",
        edad: "1 año",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"115",
        img: imcat5,
        raza: "American wirehair",
        color: "Cafe con manchas",
        edad: "3 meses",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"116",
        img: imcat6,
        raza: "Ocicat",
        color: "Plomo con m. negras",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"117",
        img: imcat7,
        raza: "Cornish rex",
        color: "Cafe manchado",
        edad: "4 año",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"118",
        img: imcat8,
        raza: "American wirehair",
        color: "Cafe oscuro y blanco",
        edad: "3 meses",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"119",
        img: imcat9,
        raza: "Selkirk rex",
        color: "Blanco con m. negras",
        edad: "1/2 años",
        tamano: "Mediano",
        sexo: "Macho"
    }, 
    {
        id:"120",
        img: imcat10,
        raza: "Korat",
        color: "Plomo con cafe",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"121",
        img: imcat11,
        raza: "Comun Europeo",
        color: "Cafe Jaspeado",
        edad: "9 meses",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"122",
        img: imcat12,
        raza: "Comun Europeo",
        color: "Negro",
        edad: "2 año",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"123",
        img: imcat13,
        raza: "Siames",
        color: "Cafe/blanco",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"124",
        img: imcat14,
        raza: "Comun Europeo",
        color: "beige/blanco",
        edad: "10 meses",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"125",
        img: imcat15,
        raza: "Comun Europeo",
        color: "vrema/blanco",
        edad: "1 años",
        tamano: "Mediano",
        sexo: "Macho"
    }, 
    {
        id:"126",
        img: imcat16,
        raza: "Korat",
        color: "Naranja",
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