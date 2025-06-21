import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {//aqui es como si se llamara a increment del componente ShowIncrement
      //por ejemplo en increment se manda un 5 y se recibe acá
      setCounter((counter) => counter + value);
    },
    [],
  );

  useEffect(() => {
    // incrementFather(); //esto haria un ciclo infinito
  }, [incrementFather])


  // const incrementFather = () => {
  //     setCounter( counter + 1);
  // }


  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  )
}
