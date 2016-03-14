import {
    applyMiddleware,
    createStore,
    compose,
    combineReducers,
} from 'redux';
import reducers from './reducers';
import createLogger from 'redux-logger';
import {
    enableBatching,
} from 'redux-batched-actions';
import {
    routerMiddleware,
} from 'react-router-redux';
import {
    browserHistory,
} from 'react-router';

const logger = createLogger({
    collapsed: true,
    logger: console,
});

const reducer = compose(
    enableBatching,
    combineReducers
)(reducers);


const store = createStore(reducer, compose(
    applyMiddleware(
        logger,
        routerMiddleware(browserHistory),
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
