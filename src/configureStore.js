import {applyMiddleware, combineReducers, createStore} from 'redux';
import createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from './reducers';

const logger = createLogger({collapsed: true});

export default (initialState, browserHistory) => createStore(
    combineReducers(rootReducer),
    initialState,
    applyMiddleware(routerMiddleware(browserHistory), logger)
);
