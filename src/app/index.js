import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Provider from './lib/Provider';
import state$ from './state$';

ReactDOM.render(
    <Provider state$={state$}>
        <App />
    </Provider>,
    document.getElementById('app')
);
