import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './views/Main';
import initialState from './initialState';
import configureStore from './configureStore';

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);
