//PARA COPIAR Y PEGAR
import { createSlice } from '@reduxjs/toolkit';

export const templateSlice = createSlice({
    name: 'name',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */ ) => {
            //! https://react-redux.js.org/tutorials/quick-start
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = templateSlice.actions;

// O SNIPPET PARA VS CODE PARA JAVASCRIPT Y/O TYPESCRIPT:
// "Redux Slice": {
//         "prefix": "rdxS",
//         "body": [
//             "import { createSlice } from '@reduxjs/toolkit';",
//             "",
//             "export const ${1:$TM_FILENAME_BASE} = createSlice({",
//             "    name: ${2:},",
//             "    initialState: { ${3:} },",
//             "    reducers: { ${4:} },",
//             "});",
//             "",
//             "export const {} = ${1:$TM_FILENAME_BASE}.actions;",
//         ],
//         "description": "Redux Slice"
//     },