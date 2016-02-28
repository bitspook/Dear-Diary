import {
    CHANGE_ACTIVE_DATE,
} from '../actionTypes';
import actionSelector from '../lib/actionSelector';
import {
    actionTypes as editorActionTypes,
    action$ as editorAction$,
} from '../components/Editor';

const activateDate$ = actionSelector(editorAction$, editorActionTypes.CHANGE_DATE)
    .map(({payload}) => ({
        type: CHANGE_ACTIVE_DATE,
        payload,
    }));

export default activateDate$;
