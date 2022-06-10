import React from "react";
import Pata from "../otros/Gracias.png"
import Background from "../otros/back.jpg"
import "../styles/imagg.css"
import "../styles/gracias.css"



function Gracias() {

  return (

    <div className="t-als">
      <div className="backg">
        <img  src= {Background} alt="" />
      <h1 className="t-als">su peticion de adopcion va ser procesada</h1>
        <div className="imagen">
             <img src= {Pata} alt="" />
        </div> 
        <h2>Gracias por darle un nuevo hogar a tu nuevo compañero </h2> 
    </div> 
      </div>
      
      

  )

}



export {Gracias} 