import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { fetchData } from "./beer/beerActions";
import { loadState } from "./fav/favActions";


const devTools = process.env.NODE_ENV === "production" ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, devTools);
export default store;

export function initialFetch() {
    store.dispatch(loadState());
    store.dispatch(fetchData(1));
}

