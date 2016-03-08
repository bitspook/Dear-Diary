import createReducer from '../lib/createReducer';
import {
    CHANGE_ACTIVE_ENTRY_ID,
    CHANGE_ENTRY_CONTENT,
    CREATE_NEW_ENTRY,
} from '../actionTypes';

export default {
    activeEntryId: createReducer(CHANGE_ACTIVE_ENTRY_ID),
    entries: (state, action) => {
        switch (action.type) {

        case CHANGE_ENTRY_CONTENT:
            const entry = action.payload.entry;
            const content = action.payload.content;

            return state.setIn([entry.get('id'), 'content'], content);

        case CREATE_NEW_ENTRY:
            const newEntry = action.payload;
            const newState = state.set(newEntry.get('id'), newEntry);

            return newState;

        default:
            return state;
        }
    },
    routing: createReducer('@@router/LOCATION_CHANGE', (state, action) => {
        return state.merge(action.payload);
    }),
};
