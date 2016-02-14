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

let logger,
    reducer,
    store;

logger = createLogger({
    collapsed: true,
    logger: console,
    stateTransformer: (nextState) => {
        return nextState.toJS();
    },
});

reducer = combineReducers(reducers);

store = createStore(reducer, state, compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
