import React from 'react'
import "../styles/Bodylist.css"
import { Cards } from './Cards'
import { NavAdop } from "./NavAdop";
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
import im11 from "../perros/merlina2.jpg"
import im12 from "../perros/mochi.jpg"
import im13 from "../perros/Bonka.jpg"
import im14 from "../perros/Dante.jpg"
import im15 from "../perros/Roti.jpg"
import im16 from "../perros/Sugus.jpg"

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
        color: "Blanco m. negras",
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
        color: "Cafe oscuro/blanco",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"9",
        img: im9,
        raza: "Mestizo",
        color: "Cafe claro/blanco",
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
        img: im11,
        raza: "Bichon Maltes",
        color: "blanco",
        edad: "2 años",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"12",
        img: im12,
        raza: "Bull Terrier",
        color: "blanco",
        edad: "1 años",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"13",
        img: im13,
        raza: "Mestizo",
        color: "Blanco/Negro",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"14",
        img: im14,
        raza: "Mestizo",
        color: "Negro con blanco",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"15",
        img: im15,
        raza: "Rottweiler",
        color: "Negro",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"16",
        img: im16,
        raza: "Pitt Bull",
        color: "Cafe Claro",
        edad: "1 1/2 años",
        tamano: "Grande",
        sexo: "Macho"
    }
]

function Bodylistpe(props) {
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

export {Bodylistpe}