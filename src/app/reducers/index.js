import createReducer from '../lib/createReducer';
import actionTypes from '../constants';
import identity from 'ramda/src/identity';

export default {
    activeDate: createReducer(actionTypes.CHANGE_ACTIVE_DATE),
    activeEntryId: createReducer(actionTypes.CHANGE_ACTIVE_ENTRY_ID),
    entries: identity,
};
