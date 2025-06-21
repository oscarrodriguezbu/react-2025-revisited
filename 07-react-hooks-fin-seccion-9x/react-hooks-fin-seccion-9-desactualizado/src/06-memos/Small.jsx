import React from 'react';
// import { memo } from 'react';

export const Small = React.memo(({ value }) => {//el memo recibe y memoriza el componente, 
// solo cuando la propiedad del componente cambie, entonces vuelve y se ejecuta

    console.log(' Me volví a dibujar :( ');

    return (
        <small>{ value }</small>
    )
})
