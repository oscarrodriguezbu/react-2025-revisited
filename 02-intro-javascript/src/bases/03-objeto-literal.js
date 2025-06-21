

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona );

// const persona2 = persona ; // esto no se hace porque entonces se reemplaza el valor de persona con persona2, 
//por eso se recomienda crear un nuevo espacio en memoria y la mejor forma es con la
//desestructuracion:
const persona2 = { ...persona };
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 )







