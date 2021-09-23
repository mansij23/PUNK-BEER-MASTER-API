import { ADD_FAV, ADD_INITIAL, REMOVE_FAV } from "./favConstants";

const initialState = {
    favData: [],
}

const favReducer = (state = { ...initialState }, action) => {
    switch (action.type) {

        case ADD_FAV: return {
            ...state,
            favData: [...state.favData, action.data]
        }

        case REMOVE_FAV: return {
            ...state,
            favData: action.data
        }

        case ADD_INITIAL: return {
            ...state,
            favData: action.data
        }

        default: return state;
    }
}

export default favReducer;