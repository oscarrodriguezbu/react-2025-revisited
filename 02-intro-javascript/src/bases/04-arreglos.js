

// Arreglos en JS
// const arreglo = new Array( 100 );

/* 
    new Array() no se recomienda crear un arreglo asi, a menos que se quiera asignar un tamaño al array
    como new Array(100)
    aunque se puede expandir con arreglo.push(1)

    se recomienda crear un array vacio asi:
    const arreglo = [];

    Tampoco es recomendable usar mucho el push porque modifica el array original, es
    mejor trabajar con la desestructuracion

*/

const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [ ...arreglo, 5 ]; //esto crea un nuevo array y se le agrega un valor adicional

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});

/* 
    .map() es una funcion que espera una funcion que espera un return
    una funcion dentro de una funcion es un callback
    el map crea un nuevo arreglo con las modificaciones que se le hayan hecho

*/


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );








