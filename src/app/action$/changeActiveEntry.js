import fecha from 'fecha';
import {
    Observable,
} from 'rxjs';
import {
    CHANGE_ACTIVE_ENTRY_ID,
} from '../actionTypes';
import actionSelector from '../lib/actionSelector';
import {
    actionTypes as editorActionTypes,
    action$ as editorAction$,
} from '../components/Editor';
import {
    batchActions,
} from 'redux-batched-actions';
import {
    createAction,
} from 'redux-actions';
import maybeCreateNewEntry from './maybeCreateNewEntry';
import {
    push,
} from 'react-router-redux';

const changeActiveEntryId = createAction(CHANGE_ACTIVE_ENTRY_ID);

const changeActiveEntryId$ = actionSelector(editorAction$, editorActionTypes.CHANGE_DATE)
          .map(({payload}) => changeActiveEntryId(fecha.format(payload, 'YYYY-MM-DD')));


const maybeCreateNewEntry$ = maybeCreateNewEntry(changeActiveEntryId$);

const responsiblyChangeActiveEntry$ = Observable.zip(
    changeActiveEntryId$,
    maybeCreateNewEntry$,
    (changeIdAction, createEntryAction) => {
        if (createEntryAction.payload) {
            return batchActions([
                changeIdAction,
                createEntryAction,
            ]);
        }

        return batchActions([
            changeIdAction,
        ]);
    }
);

const changeEntryAndLocation$ = responsiblyChangeActiveEntry$
          .merge(
              responsiblyChangeActiveEntry$
                  .map((batchedAction) => {
                      const date = batchedAction.payload[0].payload;
                      return push(date);
                  })
          );

export default changeEntryAndLocation$;
