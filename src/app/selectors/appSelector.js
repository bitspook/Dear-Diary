import {
    Map,
} from 'immutable';

type AppProps = {
    activeEntry: Map,
};

export default (state : Map): AppProps => {
    const allEntries = state.get('entries');
    const activeEntryId = state.get('activeEntryId');

    const activeEntry = allEntries.get(activeEntryId);

    return {
        activeEntry,
    };
};
