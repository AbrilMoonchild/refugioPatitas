import React from "react";
import Pata from "../otros/Gracias.png"
import "../styles/imagg.css"
import "../styles/gracias.css"



function Gracias() {

  return (

    <div className="t-als">
      <div className="backg">

      <div className="tx">
        <h1>MUCHAS GRACIAS</h1>
        <h3>su peticion de adopcion va ser procesada</h3>
      </div>
        <div className="imagen">
             <img src= {Pata} alt="" />
        </div> 
        <h2>Gracias por darle un nuevo hogar a tu nuevo compañero </h2> 
       </div> 
     </div>
      
      

  )

}



export {Gracias} 