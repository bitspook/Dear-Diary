import {applyMiddleware, combineReducers, createStore} from 'redux';
import createLogger from 'redux-logger';
import {routerReducer} from 'react-router-redux';
import rootReducer from './reducers';

const logger = createLogger();

export default (initialState) => createStore(
    combineReducers({
        routing: routerReducer
    }),
    initialState,
    applyMiddleware(logger)
);
