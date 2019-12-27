import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers'

export default createStore(rootReducer, applyMiddleware(reduxLogger, thunkMiddleware));