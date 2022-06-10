const descriptionList=[
    {
        id:1,
        subtitulo:'VOLUNTARIADO',
        descripcion:'Ser voluntario te permitirá adquirir nuevos conocimientos y habilidades, así como desarrollar las ya existentes. Además de poder estar en contacto con personas que comparten tus inquietudes y entusiasmo, lo más importante es que marcarás una diferencia salvando vidas y ayudando a dar a los animales una segunda oportunidad.'
    },
    {   id:2,
        subtitulo:'PADRINO DE ESTERILIZACIÓN',
        descripcion:'Con la finalidad de tener menos perros y gatos en situacion de calle, combatir la sobrepoblacion y que por ende los animales todo tipo de males, el Refugio Patitas con la cooperacion de veterinarias lanza la campaña "Sin callejeros". Lo cual consite en que una persona puede apadrinar una esterilización, ya sea para un perrito o gatito en condición vulnerable. '
    },
    {   id:3,
        subtitulo:'APORTE A PATITAS AMIGAS',
        descripcion:'Todas las personas pueden apoyar desde un boliviano, lo que deseen, o  lo que esta dentro de sus posibilidades, se deposita a las siguientes cuentas del Banco Union, Banco Naciona de Bolivia, o mediante paypal. Se le agrade de todo corazón su colaboración "Buscamos crear conciencia, de que la gente sepa que ayudar, aunque sea lo mínimo"'
     }
    ]
for(let index =0; index<3; index++){
    const llenar={
        id,
        subtitulo,
        description
    }
    descriptionList.push(llenar)
}    
module.exports=descriptionList