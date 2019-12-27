import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'semantic-ui-css/semantic.min.css'

import {Provider} from 'react-redux';
import store from './store';
import AppContainer from "./containers/App";

ReactDOM.render(<Provider store={store}>
    <AppContainer />
</Provider>, document.getElementById('root'));
