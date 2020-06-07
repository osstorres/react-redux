//modulo/accion
//ACTION TYPES acciones que vamos a ejecutar strings, como el nombre del controladir
const INCREMENTAR = 'CONTADOR/INCREMENTAR'
const DECREMENTAR = 'CONTADOR/DECREMENTAR'
const SETEAR = 'CONTADOR/SETEAR'


//action creators funciones que van a construir un objeto para poder despachar acciones

export const incrementar = () => ({
    type: INCREMENTAR,
})

export const decrementar = () => ({
    type: DECREMENTAR,
})

//setear el numero en el valor que nosotros queramos
//siempre poner payload
// intercept por redux para agregar datos

export const setear = payload => ({
    type: SETEAR,
    payload,
})
const initialState = 0


//reducer recibe estado inicial y accion
//con base en accion
//todos los reducers tienen que retornar estados inmutables

export default function (state= initialState, action) {

    console.log(action)

    switch (action.type) {

        case INCREMENTAR:
            return state + 1
        case DECREMENTAR:
            return  state - 1
        case SETEAR:
            return action.payload
        default:
            return state

    }

}