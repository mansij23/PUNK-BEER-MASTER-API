import { ADD_FAV, REMOVE_FAV, ADD_INITIAL } from './favConstants';
import store from '../store';

const addFav = (data) => {
    return {
        type: ADD_FAV,
        data: data,
        dataId: data.id
    }
}

const removeFav = (favData, data) => {
    return {
        type: REMOVE_FAV,
        data: favData.filter((x) => data.id !== x.id),
        dataId: data.id
    }
}

const addInitial = (data) => {
    return {
        type: ADD_INITIAL,
        data
    }
}

export const addToFav = (currentItem) => {
    let favData = store.getState().favState.favData;

    return (dispatch) => {
        if (!favData.some(item => item.id === currentItem.id)) {
            dispatch(addFav(currentItem));
        }
        else {
            dispatch(removeFav(favData, currentItem));
        }
        const favState = JSON.stringify(store.getState().favState.favData);
        localStorage.setItem('favState', favState);
    }
}

export const loadState = () => {
    return (dispatch) => {
        try {
            const favState = localStorage.getItem('favState');
            if (favState === null) {
                return [];
            }
            dispatch(addInitial(JSON.parse(favState)))
        } catch (err) {
            dispatch(addInitial([]));
        }
    }
};