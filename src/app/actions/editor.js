import 'rxjs-es/add/operator/filter';
import 'rxjs-es/add/operator/map';
import 'rxjs-es/add/operator/do';
import fecha from 'fecha';
import actionTypes from '../constants';
import {
    actionTypes as editorActionTypes,
    action$ as editorAction$,
} from '../components/Editor';

let action$,
    activateDate$;

activateDate$ = editorAction$
    .filter(a => a.type === editorActionTypes.CHANGE_DATE)
    .map(({payload}) => ({
        type: actionTypes.CHANGE_ACTIVE_DATE,
        payload,
    }));

action$ = activateDate$;

export default action$;
