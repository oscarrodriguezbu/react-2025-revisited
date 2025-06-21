import { useState } from 'react';

export const useForm = ( initialForm = {} ) => { //recibe lo que sea que se le mande como argumento
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState, //todos los valores del formulario desestructurados para que sean referenciados facilmente en el componente
        formState,// el valor del formulario
        onInputChange, //funcionar para cambiar el valor del form
        onResetForm, // funcion para limpiar el form
    }
}
