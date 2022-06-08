import React from 'react'
import {CardQ} from './Caards/CardQ'
import {CardM} from './Caards/CardM'
import {CardP} from './Caards/CardP'
import {CardV} from './Caards/CardV'
import '../stylesHome/CardsContainer.css'
function CardsContainer() {
  return (
    <div className='CardsContainer'>
      
        <CardQ></CardQ>
        <CardM></CardM>
        <CardP></CardP>
        <CardV></CardV>
    </div>
  )
}

export {CardsContainer}