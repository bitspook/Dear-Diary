import {
    CHANGE_ACTIVE_ENTRY_CONTENT,
} from '../actionTypes';
import actionSelector from '../lib/actionSelector';
import {
    actionTypes as editorActionTypes,
    action$ as editorAction$,
} from '../components/Editor';

const changeEntryContent$ = actionSelector(editorAction$, editorActionTypes.CHANGE_ENTRY_CONTENT)
    .debounceTime(500)
    .map(({payload}) => {
        return {
            type: CHANGE_ACTIVE_ENTRY_CONTENT,
            payload,
        };
    });

export default changeEntryContent$;
