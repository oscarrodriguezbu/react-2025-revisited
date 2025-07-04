import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    
    const { counter, increment, decrement, reset } = useCounter(); //se le puede enviar un valor o no, ya tiene un valor por defecto


    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
        
        </>
    )
}
