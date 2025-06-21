// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes'; //asi se importa exp por defecto sin {}

// console.log( owners );




export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id ); //find solo regresa 1 resultado

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
//fliter regresa los resultados encontrados

// console.log( getHeroesByOwner('Marvel') );


