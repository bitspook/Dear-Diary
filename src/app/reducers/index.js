import createReducer from '../lib/createReducer';
import actionTypes from '../constants';
import identity from 'ramda/src/identity';

export default {
    activeDate: createReducer(actionTypes.CHANGE_ACTIVE_DATE, (state, action) => action.payload),
    activeEntry: identity,
    entries: identity,
};
