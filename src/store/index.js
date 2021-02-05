import { createStore, combineReducers } from 'redux'

/// PRIMEIRO REDUCER START
const estadoInicial = {
    data : ['Portugal', 'Africa'], 
}


function pais(state = estadoInicial, action) {
    switch(action.type) {
        case "add-pais":
            return { ...state, data: [...state.data, action.titulo] }
            case "Brazil":
                return "outro pais"
            default:
            return state
        }
    }

/// PRIMEIRO REDUCER END

/// SEGUNDO REDUCER START
const estadoPessoa = {
    data : ['Larissa', 'Matheus'], 
}


function pessoa(state = estadoPessoa, action) {
    switch(action.type) {
        case "add-pessoa":
            return { ...state, data: [...state.data, action.nome] }
            case "Cristiano":
                return "outra pessoa"
            default:
                return state
    }
}

/// SEGUNDO REDUCER END

const todosReducers = combineReducers({
    pais,
    pessoa
})

const store = createStore(todosReducers)

export default store