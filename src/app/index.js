import React from 'react';
import {
    render,
} from 'react-dom';
import {
    Router,
    Route,
    Redirect,
    browserHistory,
} from 'react-router';
import {
    syncHistoryWithStore,
} from 'react-router-redux';
import App from './views/App';
import Editor from './views/EditorView';
import {
    Provider,
} from 'react-redux';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => {
        return state.get('routing').toJS();
    },
});

const Routes = (
    <Router history={history}>
        <Route path='/' component={App} >
            <Route path='/:date' component={Editor} />
        </Route>
    </Router>
);

render(
    <Provider store={store}>
        {Routes}
    </Provider>,
    document.getElementById('app')
);
