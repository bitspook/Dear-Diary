import action$ from './actions';
import 'rxjs-es/add/operator/scan';
import 'rxjs-es/add/operator/startWith';
import 'rxjs-es/add/operator/map';
import 'rxjs-es/add/operator/mergeMap';
import 'rxjs-es/add/operator/do';
import 'rxjs-es/add/operator/share';
import Immutable from 'immutable';
import fecha from 'fecha';
import {
    combineReducers,
} from 'redux-immutable';

let initialState,
    reducers,
    state$;

initialState = Immutable.fromJS({
    date: fecha.format(new Date(), 'YYYY-MM-DD'),
});

reducers = combineReducers({
    date: (state, action) => {
        if (action.type === 'CHANGE_CURRENT_DATE') {
            return fecha.format(action.payload, 'YYYY-MM-DD');
        }

        return state;
    },
});

state$ = action$
    .scan(reducers, initialState)
    .startWith(initialState)
    .share();


export default state$;
