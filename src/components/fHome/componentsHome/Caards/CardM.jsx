import React from 'react'
import idea from '../../imagesHome/light-bulb.png'
import '../../stylesHome/CardQ.css'
function CardM() {
  return (
    <div className='cardq'>
        <img src={idea} alt='mascota'></img>
        <div className='textQ'>
        <h1>Nuestra Misión</h1>
        <div>Lograr el bienestar de los animales en general, 
        mediante la acción, educación, la creación y el cumplimiento de las leyes.</div>
        </div>
    </div>
  )
}

export {CardM}