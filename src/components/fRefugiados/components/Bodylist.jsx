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
import im11 from "../perros/merlina2.jpg"
import im12 from "../perros/mochi.jpg"
import im13 from "../perros/Bonka.jpg"
import im14 from "../perros/Dante.jpg"
import im15 from "../perros/Roti.jpg"
import im16 from "../perros/Sugus.jpg"
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
        edad: "16 años",
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
    },
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
    },
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