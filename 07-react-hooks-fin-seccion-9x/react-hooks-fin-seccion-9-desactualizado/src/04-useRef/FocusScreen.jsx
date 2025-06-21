import { useRef } from 'react'; //Es para no hacer una renderizacion cuando la referencia cambie

export const FocusScreen = () => {

    const inputRef = useRef();//es la referencia a una etiqueta html

    const onClick = () => {
        //el query selector puede ser un problema cuando hay muchos inputs.
        // document.querySelector('input').select(); //el select permite poner el foco y escribir de una vez
        // console.log(inputRef);
        inputRef.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>

    </>
  )
}
