import React from 'react'
import "../styles/Menuno.css"

function Menuno() {
    return (
        <li><a href="a">Animales</a>
        <ul className='submenudos'>
            <li><a href="a">Perros</a></li>
            <li><a href="a">Gatos</a></li>
            <li><a href="a">Otros</a></li>
        </ul>
     </li>
    )    
}

export {Menuno}