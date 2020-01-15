import reduxLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";

import books from './books';
import cart from "./cart";
import filter from './filter'

const reducers =  combineReducers({
    books, cart, filter
});

export default createStore(reducers, applyMiddleware(reduxLogger, thunkMiddleware));