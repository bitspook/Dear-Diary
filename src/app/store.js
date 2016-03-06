import {
    applyMiddleware,
    createStore,
    compose,
} from 'redux';
import {
    combineReducers,
} from 'redux-immutable';
import reducers from './reducers';
import state from './initialState';
import createLogger from 'redux-logger';
import {
    enableBatching,
} from 'redux-batched-actions';

const logger = createLogger({
    collapsed: true,
    logger: console,
    stateTransformer: (nextState) => {
        return nextState.toJS();
    },
});

const reducer = compose(
    enableBatching,
    combineReducers
)(reducers);

const store = createStore(reducer, state, compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
