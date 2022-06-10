import React from 'react'
import { CardVoluntario } from './components/CardVoluntario'
import { CardPadrino } from './components/CardPadrino'
import { CardAporte } from './components/CardAporte'
import {CardD} from './components/CardD'
import '../fDonaVolunt/stylesDonacion/DonaVolunt.css'


function DonaVolunt() {
  return (
    <>
    <div className='textInicio'>
    <h1>AYUDANOS A SALVAR VIDAS Y EVITAR EL SUFRIMIENTO ANIMAL</h1>
    <h2>"La razon por la que debemos dedicarnos a ayudar a los animales es porque ya hay demasiada gente que se dedica a herirlos"</h2>
    <p>Tenemos animalitos albergados, ellos necesitan alimentacion y cuidado adecuado: Atún, croquetas para gato, guantes, esponjas, baldes, lavandina, ace, bañadores, periódico, camitas, ropita vieja, tela polar para madres con crías y tijeras.</p>
    <p>Las donaciones las pueden entregar en la Escuela Militar de Ingenieria- Zona Irpavi (La Paz) Teléfonos 222222 – 77776666.</p>
    <br></br>
    </div>
    <CardVoluntario></CardVoluntario>
    <CardPadrino></CardPadrino>
    <CardAporte></CardAporte>
    <CardD></CardD>
    </>
    )
}

export {DonaVolunt}