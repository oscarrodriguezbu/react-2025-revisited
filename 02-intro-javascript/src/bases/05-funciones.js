
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

/* 
    con function es facil cambiar su valor por cualquier cosa, si luego 
    pongo saludar = 20, ya deja de ser funcion y cambia a 20
    para eso hay que colocar las funciones con const
*/

const saludar2 = ( nombre ) => { //funcion de flecha
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`; //version simplificada de la anterior funcion que solo tiene un return
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );


const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
}); //version sencilla sin return pero con parentesis porque retorna un objeto


const user = getUser();
console.log(user);

// Tarea
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
}) 

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );



