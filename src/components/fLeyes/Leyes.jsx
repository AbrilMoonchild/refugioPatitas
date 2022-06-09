import React, { Component } from 'react';
import './Leyes.css';
import iconoPdf from './iconoPdf.png';

function Leyes() {
  return (
    <>

      <div className='page-title'>
        <div className='container'>

          <h1 className='page-title-center'>Leyes y Normas</h1>

        </div>
      </div>



      <div className='leyes-text'>
        <div className='container-ley'>
          <div className='title-ley'>
            <p>CPE artículo 302 Inc. 5 (año 2009)</p>
          </div>
          <div className='text-ley'>
            <p>Son competencias exclusivas de los gobiernos municipales autónomos, en su jurisdicción Inc. 5 “Preservar, conservar y contribuir a la protección del medio ambiente y recursos naturales, fauna silvestre y animales domésticos.</p>
          </div>
        </div>

        <div className='container-ley'>
          <div className='title-ley'>
            <p>Bolivia se adhiere a la DUBA (año 2010)</p>
          </div>
          <div className='text-ley'>
            <p>El año 2010, Bolivia, mediante cancillería, se adhiere a la DUBA (Declaración Universal del Bienestar Animal)</p>
          </div>
        </div>

        <div className='container-ley'>
          <div className='title-ley'>
            <p>Ley 4095</p>
          </div>
          <div className='text-ley'>
            <div className='edicion-fecha'>
              <span className='e-f-negrilla'>Publicado en la Edición: </span>
              <span className='e-f-text'>58NEC </span>
              <span className='e-f-negrilla'>Fecha de Publicación: </span>
              <span className='e-f-text'>02/09/2009</span>
            </div>
            <p>Elimina el uso de animales silvestres y/o domésticos en espectáculos circenses en todo el territorio nacional, por considerarse la práctica un acto de crueldad en contra de los animales.</p>
          </div>
        </div>

        <div className='container-ley'>
          <div className='title-ley'>
            <p>Ley 4040</p>
          </div>
          <div className='text-ley'>
            <div className='edicion-fecha'>
              <span className='e-f-negrilla'>Publicado en la Edición: </span>
              <span className='e-f-text'>39NEC </span>
              <span className='e-f-negrilla'>Fecha de Publicación: </span>
              <span className='e-f-text'>01/07/2009</span>
            </div>
            <p>Elimina el uso de animales silvestres y/o domésticos en espectáculos circenses en todo el territorio nacional, por considerarse la práctica un acto de crueldad en contra de los animales.</p>
          </div>
        </div>

        <div className='container-ley'>
          <div className='title-ley'>
            <p>Ley 1333</p>
          </div>
          <div className='text-ley'>
            <div className='edicion-fecha'>
              <span className='e-f-negrilla'>Fecha de Publicación: </span>
              <span className='e-f-text'>27/04/1992</span>
            </div>
            <span className='e-f-negrilla' id='articulo'>Artículo 111. </span>
            <p>El que incite, promueva, capture y/o comercialice el producto de la cacería, tenencia, acopio, transporte de especies animales y vegetales, o de sus derivados sin autorización o que estén declaradas en veda o reserva, poniendo en riesgo de extinción a las mismas, sufrirá la pena de privación de libertad de hasta dos años perdiendo las especies, las que serán devueltas a su hábitat natural, si fuere aconsejable, más la multa equivalente al cien por ciento del valor de estas.</p>
          </div>
        </div>

        <div className='container-ley'>
          <div className='title-ley'>
            <p>Decreto Supremo 21774</p>
          </div>
          <div className='text-ley'>
            <div className='edicion-fecha'>
              <span className='e-f-negrilla'>Publicado en la Edición: </span>
              <span className='e-f-text'>1534 </span>
              <span className='e-f-negrilla'>Fecha de Publicación: </span>
              <span className='e-f-text'>26/11/1987</span>
            </div>
            <p>Se declara la veda indefinida y con carácter general para la captura, acoso, acondicionamiento de animales silvestres y sus productos derivados como ser: cueros, pieles y otros a partir de la fecha.</p>
          </div>
        </div>

        <div className='container-ley'>
          <div className='title-ley'>
            <p>Decreto Supremo 21312</p>
          </div>
          <div className='text-ley'>
            <div className='edicion-fecha'>
              <span className='e-f-negrilla'>Publicado en la Edición: </span>
              <span className='e-f-text'>1468 </span>
              <span className='e-f-negrilla'>Fecha de Publicación: </span>
              <span className='e-f-text'>03/07/1986</span>
            </div>
            <p>Se veda en carácter total y general la captura, acondicionamiento comercialización y exportación de animales vivos, silvestres, sus productos derivados y sesundarios, por el término de tres años.</p>
          </div>
        </div>

        <div className='container-ley'>
          <div className='title-ley'>
            <p>Ordenanzas/Leyes Municipales de Bolivia</p>
          </div>
          <div className='text-ley'>
            <p>Ordenanza Municipal de la ciudad de La Paz 239/2017.</p>
            <p>Ordenanza Municipal de la ciudad de Cochabamba 4571/2012.</p>
            <p>Ordenanza Municipal de la ciudad de Santa Cruz 030/2006.</p>
            <p>Ley Municipal de Llallagua Potosí, Nº 065 “Ley de Protección a la Salud Pública Mediante Prevención de Enfermedades Zoonóticas, Tenencia Responsable y Protección de Animales en General”.</p>
            <p>Ordenanza Municipal de la ciudad de Tarija 056/2009.</p>
            <p>Ordenanza Municipal de la ciudad de Oruro 44/11</p>
          </div>
        </div>

        <div className='container-ley'>
          <div className='title-ley'>
            <p>Resoluciones Ministeriales</p>
          </div>
          <div className='text-ley'>
            <p>El 30 de octubre del año 2000 mediante Resolución Ministerial Nº 410/00 se prohíbe las prácticas en animales vivos en establecimientos educativos públicos y privados en Bolivia.</p>
            <p>El año 2009 el ministro de Defensa emite La Resolución Ministerial Nº  0217 que  prohíbe el uso de animales en prácticas militares.</p>
          </div>
        </div>

        <div className='leyes-pdf'> 
          <div className='pdf-image'>
            <img src={iconoPdf} ></img>
          </div>
          <div className='pdf-description'>
            <p>Ley Municipal Autonómica N° 239</p>
            <p>Gobierno Autónomo Municipal de La Paz</p>
            <p>Descarga el archivo en PDF</p>
            <div>
              <object data='../docsLeyes/Ley_Municipal_293-1.pdf' type='application/pdf' width='100%' height='100%'>
              --este no sirve-
              </object>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export { Leyes }