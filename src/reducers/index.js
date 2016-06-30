import {routerReducer} from 'react-router-redux';
import initialState from '../initialState';

export default {
    entries: (state, action) => {
        switch (action.type) {
        case ('UPDATE_ENTRY_TAGS'):
            return {
                ...state,
                [action.entry.date.format('YYYY-MM-DD')]: {
                    ...action.entry,
                    tags: action.tags
                }
            };

        case 'UPDATE_ENTRY_BODY':
            return {
                ...state,
                [action.entry.date.format('YYYY-MM-DD')]: {
                    ...action.entry,
                    body: action.body
                }
            };

        }

        return state || initialState.entries;

    },
    routing: routerReducer
};
