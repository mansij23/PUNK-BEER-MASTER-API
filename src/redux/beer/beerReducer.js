import { SET_BEER, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./beerConstants";

const initialState = {
    beer: '',
    isFetching: false,
    fetchError: false,
    searchError: false,
    beerData: [],
}

const beerReducer = (state = { ...initialState }, action) => {
    switch (action.type) {

        case SET_BEER: return {
            ...state,
            beer: action.beer
        }

        case FETCH_REQUEST:
            return {
                ...state,
                isFetching: true,
                fetchError: false,
                searchError: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                beerData: [...state.beerData, ...action.data],
                fetchError: false
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetchError: action.error
            };

        case SEARCH_REQUEST:
            return {
                ...state,
                isFetching: true,
                fetchError: false,
                searchError: false,
                beerData: [],
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                beerData: action.data,
                fetchError: false,
                searchError: false
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                searchError: true,
                fetchError: action.error
            };

        default: return state;
    }
}

export default beerReducer;