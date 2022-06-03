import React from 'react'
import "../styles/Headlist.css"
import { Menuno } from './Menuno'

function Headlist() {
    return (
        <div className='contenedor'>
            <ul>
                <Menuno/>
            </ul>
        </div>
    )
}

export {Headlist}