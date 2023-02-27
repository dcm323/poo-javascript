/* // sintaxis para crear un objetos en js
// los atributos se separan por medio de comas(,)
// dentro de un objeto puedo tener otros objetos
let persona = {
    nombre: 'Daniel',
    apellido: 'Mejía',
    edad: 27,
    direccion: {
        ciudad: 'Antioquia',
        barrio: 'Envigado',
        coordenadas:{
                latitud: '12.13',
                altitud: null
        }
    }
}
console.table(persona)
 console.log(persona)
//  para acceder a un atibuto en especifico de mi objeto uso el objeto seguido de punto(.)
// si tengo mas objetos dentro de otros objetos lo hago seguido de puntos 
 console.log(persona.apellido)
 console.log(persona.nombre)
 console.log(persona.edad)
//  accedo a objetos dentro de mi objeto 
 console.log(persona.direccion.coordenadas.latitud) */

 


let personas = [];

for (let index = 0; index < 2; index++) {
    let nombre = prompt('Ingrese nu nombre')
    let apellido = prompt('Inmgrese su apellido')
    let edad = prompt('Ingrese su edad')
    let ciudad = prompt('Ingrese su ciudad')
    let barrio = prompt('Ingrese su barrio')
    let persona = {
        nombre: nombre ,
        apellido: apellido,
        edad: edad,
        direccion:{
            ciudad:ciudad,
            barrio:barrio,
        }
    }
    personas.unshift(persona)
}

for (let index = 0; index < personas.length; index++) {
    console.log(personas[index])
    
}

// forEach se usa para arreglos

// funcion anonima: no tiene nombre 


// esto es igual a el for que tengo arriba
// solo se para recorrer arreglos ya con informacion almacenada
// se hace para recorrer un arreglo, hablando de objetos
console.log("recorrido con el forEach")
personas.forEach((persona)=>{
    console.log(persona)
})

// el map retorna los datos en un nuevo arreglo 
console.log("recorrido con el map")
personas.map((persona)=>{
    console.log(persona)
})

// objetos se pueden recorrer con los ciclos forEach o map trabajan con arreglo ya definido
/* 
for (const persona of personas) {
    console.log(persona)
} */

