import createReducer from '../lib/createReducer';
import {
    CHANGE_ACTIVE_DATE,
    CHANGE_ACTIVE_ENTRY_ID,
} from '../actionTypes';
import identity from 'ramda/src/identity';

export default {
    activeDate: createReducer(CHANGE_ACTIVE_DATE),
    activeEntryId: createReducer(CHANGE_ACTIVE_ENTRY_ID),
    entries: identity,
};
