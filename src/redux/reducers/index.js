import { combineReducers } from 'redux';
import { productReducer as products } from './productReducer';

const combineReducer = combineReducers({
    products,
});

export default combineReducer;
