import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, PokemonCard, Quote } from '../03-examples';


export const Layout = () => {

    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    // const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Información Pokemon</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <PokemonCard
                        id={counter}
                        name={data.name}
                        sprites={[//son las imagenes
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny,
                        ]}
                    />
            }

            <button
                className="btn btn-primary mt-2"
                onClick={() => counter > 1 ? decrement() : null}
            >
                Anterior
            </button>

            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => increment()}>
                Siguiente
            </button>

        </>
    )
}
