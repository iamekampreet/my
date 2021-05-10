import { combineReducers } from 'redux';
import inputField from './input.js';

export const rootReducer = combineReducers({
    input: inputField
})