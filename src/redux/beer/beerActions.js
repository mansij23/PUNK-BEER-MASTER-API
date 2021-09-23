import {
    SET_BEER,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
} from "./beerConstants";
import axios from 'axios';

export const setBeer = (beer) => {
    return {
        type: SET_BEER,
        beer
    }
}

export const axiosCall = (url) => {
    return axios.get(url)
}

const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

const fetchSuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        data
    }
}

const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        error
    }
}

const searchRequest = () => {
    return {
        type: SEARCH_REQUEST
    }
}

const searchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        data
    }
}

const searchFailure = (error) => {
    return {
        type: SEARCH_FAILURE,
        error
    }
}

export const fetchData = (page) => {
    return (dispatch) => {
        dispatch(fetchRequest());
        let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=24`;

        axiosCall(url)
            .then((response) => {
                dispatch(fetchSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchFailure(error.message))
            });
    }
}

export const searchBear = (beer) => {
    return (dispatch) => {
        dispatch(searchRequest());
        let url = `https://api.punkapi.com/v2/beers?beer_name=${beer}`;

        axiosCall(url)
            .then((response) => {
                dispatch(searchSuccess(response.data));
            })
            .catch(error => {
                dispatch(searchFailure(error.message))
            });
    }
}
