import React from 'react'
import './contactanos.css'
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: fixed;
  top: -0.6rem;
  left: 24%;
  z-index: 5;

`;

function Contactanos(props) {
  return (

    <Section>
    <Title>
      Sobre Nosotros
    </Title>

   <div className="card text-center">
     <div className="overflow">
       
     </div>
     <div className="card-body text-dark">
       <h4 className="card-title">{props.title}</h4>
       <p className="card-text text-secondary">
      
       Nos puedes encontrar en nuestras redes sociales.- 
Contactos
 Facebook .- PAGINA OFICIAL PATITAS<img src="../fContacts/icon/facbook.jpg"></img>
 WHATSAPP .- +591 70150215
 INTAGRAM .- PATITAS REFUGIO  <img src="icon/instagram.png"></img>
 Nuesta direccion:
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.028965055029!2d-68.1282544848185!3d-16.52463528860101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21f62cf95b27%3A0xc9e60dac45aa6851!2sAlbergue%20de%20Mascotas%20%22Peluch%C3%ADn%22!5e0!3m2!1ses-419!2sbo!4v1654219739744!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </p>

       <a href="#" className="btn btn-outline-success">TE ESPERAMOS</a>
       </div> 
       </div> 
   </Section>
  );
}

export {Contactanos}
    
