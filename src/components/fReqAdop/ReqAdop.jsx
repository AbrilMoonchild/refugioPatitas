import React from 'react'
import './ReqAdop.css'
import {Link}from"react-router-dom"
import em from './img/secig.jpg'
import em1 from './img/im1.jpeg'
import em2 from './img/im2.jpeg'
import em3 from './img/im3.jpeg'
import em4 from './img/im4.jpeg'
import em5 from './img/im5.jpeg'
import em6 from './img/im6.jpeg'
import em7 from './img/im7.jpeg'
import em8 from './img/im8.jpeg'
import moy from './img/NICK.jpg'
import iv from './img/Iver.jpg'
import alv from './img/ALV.jpeg'
import loh from './img/BAP.jpeg'

function ReqAdop() {
  return (
    <>
    <section class="textos-header">
      <h1> REQUISITOS PARA LA ADOPCIÓN DE UNA MASCOTA </h1>
      <h2>La sangre sólo hace parientes, el amor hace Familia</h2>
    </section>
    <section class="contenedor sobre-nosotros">
            <h2 class="titulo">¿Qué necesitas para adoptar tu Mascota?</h2>
            <div class="contenedor-sobre-nosotros">
                <img src={em} class="imagen-about-us"></img>
                <div class="contenido-textos">
                    <h3><span>1</span>Ser Mayor de Edad</h3>
                    <p>Adoptar una mascota requiere de mucha responsabilidad, por lo que contar con la mayoría de edad es un requisito importante.</p>
                    <h3><span>2</span>Fotocopia Cédula de Identidad</h3>
                    <p>Tu identidad es importante no sólo para ti, sino también para tu mascota. Contar con tus datos personales es necesario.</p>
                    <h3><span>3</span>Comprobante de Domicilio</h3>
                    <p>Documento que demuestre que la persona es propietaria del domicilio donde vivirá la mascota o, en caso de alquiler, que el arrendatario permite residir con animales.</p>
                    <h3><span>4</span>Contrato de Adopción</h3>
                    <p>Debes firmar un acta que te compromete a:</p>
                    <p> - Cuidar de tu mascota y mantenerla en unas condiciones óptimas de espacio, tiempo, alimentación, ejercicio...</p>
                    <p> - Dotarle de los cuidados veterinarios que necesite.</p>
                    <p> - No destinarlo a la cría o reproducción. Los animales que tengan la edad suficientes se entregarán esterilizados.</p>
                    <p> - Notificar cualquier cambio a la asociación.</p>
                    <p> - Compromiso de no abandonarlo. Si por algún motivo no puedes hacerte cargo de la mascota lo devolverás a la asociación.</p>
                </div>
            </div>
        </section>
        <section class="portafolio">
            <div class="contenedor">
                <h2 class="titulo">HISTORIAS CON FINALES FELICES . . .</h2>
                <div class="galeria-port">
                    <div class="imagen-port">
                        <img src={em1} alt=""></img>
                        <div class="hover-galeria">
                            <img src="img/icono1.png" alt=""></img>
                            <Link to = "/Refugiados "><button>Nuestro trabajo</button> </Link>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={em2} alt=""></img>
                        <div class="hover-galeria">
                            <img src="img/icono1.png" alt=""></img>
                            <Link to = "/Refugiados "><button>Nuestro trabajo</button> </Link>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={em3} alt=""></img>
                        <div class="hover-galeria">
                            <img src="img/icono1.png" alt=""></img>
                            <Link to = "/Refugiados "><button>Nuestro trabajo</button> </Link>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={em4} alt=""></img>
                        <div class="hover-galeria">
                            <img src="img/icono1.png" alt=""></img>
                            <Link to = "/Refugiados "><button>Nuestro trabajo</button> </Link>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={em5} alt=""></img>
                        <div class="hover-galeria">
                            <img src="img/icono1.png" alt=""></img>
                            <Link to = "/Refugiados "><button>Nuestro trabajo</button> </Link>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={em6} alt=""></img>
                        <div class="hover-galeria">
                            <img src="img/icono1.png" alt=""></img>
                            <Link to = "/Refugiados "><button>Nuestro trabajo</button> </Link>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={em7} alt=""></img>
                        <div class="hover-galeria">
                            <img src="img/icono1.png" alt=""></img>
                            <Link to = "/Refugiados "><button>Nuestro trabajo</button> </Link>
                        </div>
                    </div>
                    <div class="imagen-port">
                        <img src={em8} alt=""></img>
                        <div class="hover-galeria">
                            <img src="img/icono1.png" alt=""></img>
                            <Link to = "/Refugiados "><button>Nuestro trabajo</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="clientes contenedor">
            <h2 class="titulo">Comentarios de nuestros clientes</h2>
            <div class="carddance">
                <div class="card">
                    <img src={moy} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4>Nickolass Johan Moya Faverman</h4>
                        <p>Me parece una buena causa la acción que realizan, continuen con ese esmero por los animalitos que lo necesitan.</p>
                    </div>
                </div>
                <div class="card">
                    <img src={iv} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4>Iver Brayan Huanca Rada</h4>
                        <p>Excelente trabajo el servicio de adopción, ayudemos a encontrar un hogar para estos seres indefensos que merecen todo nuestro afecto y cariño.</p>
                    </div>
                </div>
            </div>
            <div class="carddance">
                <div class="card">
                    <img src={alv} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4>Álvaro Jauregui Rivera</h4>
                        <p>Los animales son los amigos más fieles que se pueden tener, excelente trabajo el que realiza refugio patitas....</p>
                    </div>
                </div>
                <div class="card">
                    <img src={loh} alt=""></img>
                    <div class="contenido-texto-card">
                        <h4>Roger Bautista Tauca</h4>
                        <p>Mil gracias a todas las personas colaboradoras de esta institución por ayudar a estos angelitos sin alas, merecen un aplauso.</p>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}
export {ReqAdop}