import React from 'react'
import "../styles/Header.css"
import { Menuno } from './Menuno'
import { Menudos } from './Menudos'
import { Menutres } from './Menutres'

function Header() {
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

export {Header}