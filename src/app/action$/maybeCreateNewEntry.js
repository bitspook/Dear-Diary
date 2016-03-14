import fecha from 'fecha';
import Entry from '../models/Entry';
import store from '../store';
import {
    CREATE_NEW_ENTRY,
} from '../actionTypes';
import {
    createAction,
} from 'redux-actions';
import {
    Map,
} from 'immutable';

const createNewEntry = createAction(CREATE_NEW_ENTRY);

const maybeCreateNewEntry$ = (changeActiveEntryId$) => changeActiveEntryId$
          .map(({payload: newEntryId}) => {
              const oldEntry = store.getState().entries.get(newEntryId);

              if (!oldEntry) {
                  return Map(new Entry(fecha.parse(newEntryId, 'YYYY-MM-DD')));
              }

              return null;
          })
          .map(createNewEntry);

export default maybeCreateNewEntry$;
