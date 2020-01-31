import {combineReducers} from 'redux';
import {rootReducer} from './root.js';


export const reducer = combineReducers({
    root: rootReducer,
});