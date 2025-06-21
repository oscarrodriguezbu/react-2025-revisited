import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //inicializa los todos que estaban guardados en el local storage
}

export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer( todoReducer, [], init ); 
    //- todoReducer es un reducer que tiene initialState y action, y luego action tiene type y payload
    //- [] es initialArg
    //- init viene de const init, es lo que quiero que tenga la pantalla al cargar por primera vez
    
    // const [state, dispatch] = useReducer(reducer, initialArg, init?)
    // const [state, dispatch] = useReducer(first, second, third) la estructura con el snippet

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])// si el todos cambia, guarda en el lstorage
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}
