import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import rootReducer from './reducers'

export default createStore(rootReducer, applyMiddleware(reduxLogger));