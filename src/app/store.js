import action$ from './actions';
import 'rxjs-es/add/operator/scan';
import 'rxjs-es/add/operator/startWith';
import 'rxjs-es/add/operator/map';
import 'rxjs-es/add/operator/mergeMap';
import 'rxjs-es/add/operator/do';
import 'rxjs-es/add/operator/share';
import 'rxjs-es/add/operator/retry';
import {
    combineReducers,
} from 'redux-immutable';

import initialState from './initial-state';
import reducers from './reducers';

let reducer,
    state$;

reducer = combineReducers(reducers);

state$ = action$
    .startWith({
        payload: null,
        type: '@rx-redux/INITIALIZE',
    })
    .do(action => {
        console.groupCollapsed(action.type);
        console.log(action);
        console.groupEnd();
    })
    .scan(reducer, initialState)
    .do(state => {
        console.group('Next State');
        console.log(state.toJS());
        console.groupEnd();
    })
    .share();


export default state$;
