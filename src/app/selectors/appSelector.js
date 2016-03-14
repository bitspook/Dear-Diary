import {
    Map,
} from 'immutable';
import type {
    AppProps
} from '../typeDefinitions/AppProps';

export default (state, props): AppProps => {
    const allEntries = state.entries;
    const activeEntryId = state.activeEntryId;

    const activeEntry = allEntries.get(activeEntryId);

    return {
        activeEntry
    };
};
