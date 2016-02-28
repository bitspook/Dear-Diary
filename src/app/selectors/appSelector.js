import fecha from 'fecha';
import {
    Map,
} from 'immutable';
import {
    TypeEntry,
} from '../typeDefinitions/entry';

export type AppProps = {
    activeDate: Date,
    activeEntry: TypeEntry
};

export default (state : Map) : AppProps => {
    const allEntries = state.get('entries');
    const activeEntryId = state.get('activeEntryId');

    let entry = allEntries.get(activeEntryId) || {
        content: '',
        date: new Date(),
        id: fecha.format(new Date(), 'YYYY-MM-DD'),
    };

    return {
        activeEntry: entry,
        activeDate: state.get('activeDate'),
    };
};
