import React from "react";
import {NavLink} from 'react-router-dom'
import '../styles/NavAdop.css'

function NavAdop() {
  return (
    <div className='menu-mascotas'>
        <ul>
            <li className="opcion"><NavLink to='/perritos'>
                    Perritos
                </NavLink></li>
            <li><NavLink to='/gatitos'>
                    Gatitos
            </NavLink></li>
            <li><NavLink to='/otros'>
                    Otros
                </NavLink></li>
        </ul>
    </div>
  )
}

export {NavAdop}