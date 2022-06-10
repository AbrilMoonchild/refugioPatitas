import React from "react";
import Pata from "../otros/Gracias.png"
import "../styles/imagg.css"
import "../styles/gracias.css"



function Gracias() {

  return (

    <div className="Gracias">
        <p>su peticion de adopcion va ser procesada  </p>
        <p>Gracias por darle un nuevo hogar a tu nuevo compañero </p>
        
        <div className="imagen">
             <img src= {Pata} alt="" />
        </div>
        </div> 
      

  )

}



export {Gracias} 