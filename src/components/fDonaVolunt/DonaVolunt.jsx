import React from 'react'
import '../fDonaVolunt/DonaVolunt.css'
import qr1 from './img/qr.jpg'
import refugio from './img/refugio.jpg'
function DonaVolunt() {
  return (
    <>
    <div>
    <h1>AYUDANOS A SALVAR VIDAS Y EVITAR EL SUFRIMIENTO ANIMAL</h1>
    <h2>"La razon por la que debemos dedicarnos a ayudar a los animales es porque ya hay demasiada gente que se dedica a herirlos"</h2>
    <p>Tenemos animalitos albergados, ellos necesitan alimentacion y cuidado adecuado: Atún, croquetas para gato, guantes, esponjas, baldes, lavandina, ace, bañadores, periódico, camitas, ropita vieja, tela polar para madres con crías y tijeras.</p>
    <p>Las donaciones las pueden entregar en la Escuela Militar de Ingenieria- Zona Irpavi (La Paz) Teléfonos 222222 – 77776666.</p>
    <h2>Gracias por ayudar a los animales!</h2>
    <h2>¿COMO PUEDES AYUDAR?</h2>
    </div>

    <div className='contenedor-ayuda'>
      <div>
        <h2>VOLUNTARIADO</h2>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
      </div>
      <div>
        <h2>PADRINO DE ESTERILIZACIÓN</h2>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
      </div>
      <div>
        <h2>APORTE A PATITAS AMIGAS</h2>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
      </div>
    </div>

    <div className='contenedor-donacion'>
      <div>
        <img src= {qr1} alt="Foto QR"></img>
        <h3>BANCO UNION</h3>
        <p>CUENTA: 00000000001</p>
      </div>
      <div>
        <img src={qr1} alt="foto QR"></img>
        <h3>BANCO NACIONAL DE BOLIVIA</h3>
        <p>CUENTA: 00000000001</p>
      </div>
      <div>
        <h3>PAYPAL</h3>
      </div>
    </div>
    <div className='contenedor-imagen'>
      <img src={refugio} alt="refugio"></img>
      <h2>"Quien alimenta a un animal hambriento, alimenta su propia alma"</h2>
    </div>
    </>
    )
}

export {DonaVolunt}