const INITIAL_STATE = {
    dados: ['Portugal', 'Africa']
}

export default function pais(state = INITIAL_STATE, action) {
    if(action.type === 'ADD_PAIS') {
        return { ...state }
    } else {
        return state
    }
}