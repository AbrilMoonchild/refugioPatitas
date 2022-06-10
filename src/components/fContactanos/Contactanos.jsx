import React from 'react';
import { Card } from './Card';
import { ContactForm } from './ContactForm';

import './contactanos.css';

export const Contactanos = () => {
    const data = [
        {
            info1: "Patitas Amigas",
            info2: " Irpavi, Calle 2(EMI)",
            info3: "La Paz, Zona sur",
        }, {
            info1: "Teléfono",
            info2: "70150215(WhatsApp.)",
            info3: "69719895(Contacto)",
            info4: "2724850(Contacto telefonico)",
        }, {
            info1: "Correo",
            info2: "patitasAmigas@refugio.com.bo",
            info3: "Al cuidado de tus mascotas"
        }
    ]
    return (
        
        <main className="container">
            <div class="container">
                
  <h6 ss="text">CONTACTANOS</h6>
</div>
            <div className="gallery">
                {
                    data.map( ( item, index ) => (
                        <Card key={ index } { ...item } />
                    ))
                }
            </div>
            <ContactForm />
            <div className="map">
                <img src="https://i.imgur.com/ARekREH.png" />
            </div>
        </main>
    );
};
