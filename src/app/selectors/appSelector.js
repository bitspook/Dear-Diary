import fecha from 'fecha';
import {
    Map,
} from 'immutable';

type TypeEntry = {
    content: string,
    date: Date,
    id: string
};

type AppProps = {
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
