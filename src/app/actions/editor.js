import 'rxjs-es/add/operator/filter';
import 'rxjs-es/add/operator/map';
import 'rxjs-es/add/operator/do';
import 'rxjs-es/add/operator/merge-static';
import {
    Observable,
} from 'rxjs-es/Observable';
import fecha from 'fecha';
import actionSelector from '../lib/actionSelector';
import actionTypes from '../constants';
import {
    actionTypes as editorActionTypes,
    action$ as editorAction$,
} from '../components/Editor';

let action$,
    activateDate$,
    activateEntry$;

activateDate$ = actionSelector(editorAction$, editorActionTypes.CHANGE_DATE)
    .map(({payload}) => ({
        type: actionTypes.CHANGE_ACTIVE_DATE,
        payload,
    }));

activateEntry$ = actionSelector(editorAction$, editorActionTypes.CHANGE_DATE)
    .map(({payload: date}) => ({
        type: actionTypes.CHANGE_ACTIVE_ENTRY_ID,
        payload: fecha.format(date, 'YYYY-MM-DD'),
    }));

action$ = Observable
    .merge(
        activateDate$,
        activateEntry$
    );

export default action$;
