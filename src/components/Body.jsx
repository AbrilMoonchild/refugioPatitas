import React from 'react'
import "../styles/Body.css"
import Fonduno from "../images/backpet2.jpeg"
import Fondcua from "../images/bakpet4.jpeg"
import Fondcin from "../images/bakpet5.jpeg"

function Body() {
    return (
        <div className='cuerpo'>
            I<ul>
                <li><img src={Fonduno} alt="Fondo uno" /></li>
                <li><img src={Fondcua} alt="Fondo dos" /></li>
                <li><img src={Fondcin} alt="Fondo tres" /></li>
            </ul>
        </div>
    )
}

export {Body}