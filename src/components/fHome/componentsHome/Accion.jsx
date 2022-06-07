import React from 'react'
import { CardR } from './acciones/CardR';
import { CardVD } from './acciones/CardVD';
import { CardREQ } from './acciones/CardREQ';
import '../stylesHome/CardAccion.css'
function Accion() {
    
  
  return (
    <div className='wrapper'>
        <CardR></CardR>
        <CardVD></CardVD>
        <CardREQ></CardREQ>
    </div>
    
  );
}

export {Accion}