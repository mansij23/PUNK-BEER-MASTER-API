import { combineReducers } from 'redux';
import beerReducer from './beer/beerReducer';
import favReducer from './fav/favReducer';

const rootReducer = combineReducers({
    beerState: beerReducer,
    favState: favReducer,
})

export default rootReducer;