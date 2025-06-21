import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {//viene de event.target
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }


    useEffect( () => {//se dispara al iniciar
        // console.log('useEffect called!');
    }, []);
    
    useEffect( () => { //se dispara cuando el formulario cambia
        // console.log('formState changed!');
    }, [formState]);

    useEffect( () => {//se dispara cuando el email cambia
        // console.log('email changed!');
    }, [ email ]);

    

    return (
        <>
            <h1>Formulario Simple</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username" //muy importante para que funcione el onChange
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email" //muy importante para que funcione el onChange
                value={ email }
                onChange={ onInputChange }
            />


            {
                (username === 'strider2' ) && <Message /> 
                //esto se destruye y se construye dependiendo de la condicion, 
                // por eso el useEffect siempre arranca y se destruye en base a esta condicion en el componente
            }

        </>
    )
}
