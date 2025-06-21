import { getHeroeById } from './bases/08-imp-exp'

/* 
    Las promesas son asincronas
    Necesitan un callback: resolve y reject para notificar el resultado de la promesa

    then: la promesa se hizo correctamente
    catch: dio un error y hay que manejar una excepcion 
    finally: se ejecuta al final de todo

*/

/* 

const promesa = new Promise( (resolve, reject) => {

    setTimeout( () =>  {
        // Tarea
        // importen el 
        const p1 = getHeroeById(2);
        resolve( p1 );
        // reject( 'No se pudo encontrar el héroe' );
    }, 2000 )

});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
})
.catch( err => console.warn( err ) ); 

*/


//version simplificada:
const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000 )
    
    });


}


getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );

    // .then( console.log ) // es lo mismo que .then ( heroe => console.log('Heroe', heroe))
    // .catch( console.warn ); // es lo mismo que .catch ( err => console.log(err))
    //porque reciben el primer argumento de lo que sea que reciban en:
    // resolve( p1 );
    // reject( 'No se pudo encontrar el héroe' );
    

