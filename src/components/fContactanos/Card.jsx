import React from 'react';

export const Card = ({ info1, info2, info3,info4 }) => {
    
    return (
        <article className="card__contact">
            <section className="card__icon">
                <img className="card__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerMipPV0UrO_NW3Vog6EFLcUZK-AFY9A3g3wibr27nQuIl-ZM-YWfozB4lLMCCj4AdQs&usqp=CAU" alt="icono de contacto" />
            </section>
            <section className="card__info">
                <p> <span> { info1 }: </span> { info2 } <br /> { info3 } <br /> { info4 } </p>
            </section>
        </article>
    );
};
