// { type: [todo remove], payload: id }

export const todoReducer = ( initialState = [], action ) => {


    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );//regresa un elemento

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {//regresa un arreglo

                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done// propiedad booleana que se quiere cambiar
                    }
                } 

                return todo;
            });
    
        default:
            return initialState;
    }


}