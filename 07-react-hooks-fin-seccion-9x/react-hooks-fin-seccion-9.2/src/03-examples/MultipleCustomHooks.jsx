import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';


export const MultipleCustomHooks = () => {

  const { counter, decrement, increment } = useCounter(1);//otro custom hook que se creó anteriormente
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);


  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      { 
        isLoading 
        ? <LoadingMessage /> 
        : (
          <PokemonCard 
            id={ counter } 
            name={ data.name } 
            sprites={ [//son las imagenes
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ] }
          />
        )
    }

      


      <button
        className="btn btn-primary mt-2"
        onClick={ () => counter > 1 ? decrement() : null }// null es permitido en un onclick
      >
        Anterior
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={ () => increment() }
      >
        Siguiente
      </button>

    </>
  )
}