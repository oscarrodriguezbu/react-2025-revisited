import { useState } from 'react'; //siempre se importa primero los hooks
import PropTypes from 'prop-types'; //En vite toca instalar esto e importarlo

export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value );

    /* 
        const [ counter,       setCounter ]                      = useState( value );
              [val que cambia, la funcion que lo hace cambiar]   =   val inicial
    */

    const handleAdd = () => { 
        // console.log(event)
        setCounter( counter + 1 );// opcion sencilla
        // setCounter( (c) => c + 1 ) // el c es el valor actual por si se necesita hacer algo mas con ese valor
    }

    const handleSubstract = () => setCounter( counter - 1 ); //forma abreviada
    const handleReset = () => setCounter( value ); //forma abreviada

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            {/* 
                <button onClick={ handleAdd }> +1 </button> 
                es lo mismo que 
                <button onClick={ (event)=> handleAdd(event) }> +1 </button>
                cuando hay un argumento que solo sirve para ser enviado a un callback
                entonces se puede abreviar enviando solo el nombre de la funcion a 
                la que se le va a enviar el argumento
            */}
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


