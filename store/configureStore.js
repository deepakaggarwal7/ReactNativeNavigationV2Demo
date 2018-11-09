import { createStore, combineReducers, compose } from 'redux';

import placeReducer from './reducers/places'

const rootReducer = combineReducers({
    places: placeReducer
});

const configureStore = () => {
   return createStore(rootReducer);
}
export default configureStore;