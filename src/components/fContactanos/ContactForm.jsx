import React from 'react';

export const ContactForm = () => {
    return (
        <div className="contact-form">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">PARA MAS INFORMACION</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Indicanos que te gustaria saber de nosotros</label>
                    <textarea className="form-control" id="exampleInputPassword1" placeholder="Me Gustaria Saber....." />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Ponme al dia con toda la informacion de "patitas"</label>
                </div>
                <button type="submit" className="btn btn-primary">Subir comentario</button>
                
            </form>
        </div>
    )
}
