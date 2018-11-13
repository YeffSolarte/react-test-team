import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import contactReducer from './contactReducer';

export default combineReducers({
    productsReducer,
    categoriesReducer,
    contactReducer
});