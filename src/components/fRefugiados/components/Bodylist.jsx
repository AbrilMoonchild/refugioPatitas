import React from 'react'
import "../styles/Bodylist.css"
import { Cards } from './Cards'
import im1 from "../perros/buff.jpg"
import im2 from "../perros/chanquete.jpg"
import im3 from "../perros/Dumbo.jpg"
import im4 from "../perros/Dylan.jpg"
import im5 from "../perros/gordon.jpg"
import im6 from "../perros/paw.jpg"
import im7 from "../perros/rex.jpg"
import im8 from "../perros/rumba.jpg"
import im9 from "../perros/Socrates.jpg"
import im10 from "../perros/Thor.jpg"
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
import imot1 from "../otros/cyc.jpg"
import imot2 from "../otros/kumba.jpg"
import imot3 from "../otros/mochilo.jpg"
import imot4 from "../otros/nuez.jpg"
import imot5 from "../otros/Quillo.jpg"



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
    },
    {
        id:"11",
        img: imcat1,
        raza: "Bombay",
        color: "Negro",
        edad: "1 aÃ±o",
        tamano: "PequeÃ±o",
        sexo: "Macho"
    },
    {
        id:"12",
        img: imcat2,
        raza: "American wirehair",
        color: "Blanco con manchas negras y cafes",
        edad: "2 aÃ±os",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"13",
        img: imcat3,
        raza: "Burmes",
        color: "Cafe claro",
        edad: "1 aÃ±o",
        tamano: "PequeÃ±o",
        sexo: "Macho"
    },
    {
        id:"14",
        img: imcat4,
        raza: "Cymric",
        color: "Negro con blanco",
        edad: "1 aÃ±o",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"15",
        img: imcat5,
        raza: "American wirehair",
        color: "Cafe con manchas blancas y negras",
        edad: "3 meses",
        tamano: "PequeÃ±o",
        sexo: "Hembra"
    },
    {
        id:"16",
        img: imcat6,
        raza: "Ocicat",
        color: "Plomo con manchas negras",
        edad: "1 aÃ±o",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"17",
        img: imcat7,
        raza: "Cornish rex",
        color: "Cade con manchas negras",
        edad: "4 aÃ±os",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"18",
        img: imcat8,
        raza: "American wirehair",
        color: "Cafe oscuro con blanco",
        edad: "3 meses",
        tamano: "PequeÃ±o",
        sexo: "Hembra"
    },
    {
        id:"19",
        img: imcat9,
        raza: "Selkirk rex",
        color: "Blanco con manchas negras",
        edad: "1/2 aÃ±o",
        tamano: "Mediano",
        sexo: "Macho"
    }, 
    {
        id:"20",
        img: imcat10,
        raza: "Korat",
        color: "Plomo con cafe",
        edad: "2 aÃ±os",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"1",
        img: imot1,
        raza: "Mapuche",
        color: "Negro con cafe y Negro con blanco",
        edad: "1 aÃ±o - 8 meses",
        tamano: "Medianos",
        sexo: "Machos"
    },
    {
        id:"2",
        img: imot2,
        raza: "Californiano",
        color: "Blanco con manchas negras y cafes",
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
        color: "Blanco con manchas cafes",
        edad: "9 meses",
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