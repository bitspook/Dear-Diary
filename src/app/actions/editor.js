import {
    Observable,
} from 'rxjs';
import fecha from 'fecha';
import actionSelector from '../lib/actionSelector';
import {
    CHANGE_ACTIVE_DATE,
    CHANGE_ACTIVE_ENTRY_CONTENT,
    CHANGE_ACTIVE_ENTRY_ID,
} from '../actionTypes';
import {
    actionTypes as editorActionTypes,
    action$ as editorAction$,
} from '../components/Editor';

const activateDate$ = actionSelector(editorAction$, editorActionTypes.CHANGE_DATE)
    .map(({payload}) => ({
        type: CHANGE_ACTIVE_DATE,
        payload,
    }));

const activateEntry$ = actionSelector(editorAction$, editorActionTypes.CHANGE_DATE)
    .map(({payload: date}) => ({
        type: CHANGE_ACTIVE_ENTRY_ID,
        payload: fecha.format(date, 'YYYY-MM-DD'),
    }));

const changeEntryContent$ = actionSelector(editorAction$, editorActionTypes.CHANGE_ENTRY_CONTENT)
          .debounceTime(500)
          .map(({payload}) => {
              return {
                  type: CHANGE_ACTIVE_ENTRY_CONTENT,
                  payload,
              };
          });

const action$ = Observable
    .merge(
        activateDate$,
        activateEntry$,
        changeEntryContent$
    );

export default action$;
