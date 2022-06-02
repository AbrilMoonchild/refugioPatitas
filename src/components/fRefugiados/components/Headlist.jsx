import React from 'react'
import "../styles/Headlist.css"
import { Menuno } from './Menuno'
import { Menudos } from './Menudos'
import { Menutres } from './Menutres'

function Headlist() {
    return (
        <div className='contenedor'>
            <ul>
                <Menuno/>
                <Menudos/>
                <Menutres/>
            </ul>
        </div>
    )
}

export {Headlist}