import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Bodylistca } from './components/Bodylistca'

function Refugiados() {
  return (
    <BrowserRouter>
      <NavLink to='Animales' > 
        <div>Animales</div>
      </NavLink>

      <Routes>
        <Route path='Animales' element={ <Bodylistca/> } />
      </Routes>
    </BrowserRouter>
  )
}

export {Refugiados}