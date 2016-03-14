import React from 'react';
import {
    render,
} from 'react-dom';
import {
    Router,
    Route,
    IndexRedirect,
} from 'react-router';
import App from './views/App';
import Editor from './views/EditorView';
import {
    Provider,
} from 'react-redux';
import store from './store';
import history from './history';
import fecha from 'fecha';

const today = fecha.format(new Date(), 'YYYY-MM-DD');

const Routes = (
    <Router history={history}>
        <Route path='/' component={App} >
            <IndexRedirect to={today} />
            <Route path='archive' component={null} />
            <Route path=':date' component={Editor} />
        </Route>
    </Router>
);

render(
    <Provider store={store}>
        {Routes}
    </Provider>,
    document.getElementById('app')
);
