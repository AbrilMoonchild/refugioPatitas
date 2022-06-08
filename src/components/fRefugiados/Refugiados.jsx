import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Bodylist } from './components/Bodylist'

function Refugiados() {
  return (
    <BrowserRouter>
      <NavLink to='Animales' > 
        <div>Animales</div>
      </NavLink>

      <Routes>
        <Route path='Animales' element={ <Bodylist/> } />
      </Routes>
    </BrowserRouter>
  )
}

export {Refugiados}