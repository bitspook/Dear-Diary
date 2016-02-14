import {
    applyMiddleware,
    createStore,
} from 'redux';
import {
    combineReducers,
} from 'redux-immutable';
import reducers from './reducers';
import state from './initial-state';
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

store = createStore(reducer, state, applyMiddleware(logger));

export default store;
