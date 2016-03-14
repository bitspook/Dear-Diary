import {
    Map,
} from 'immutable';
import Entry from './models/Entry';

const newEntry = new Entry(new Date());

const state = {
    activeEntryId: newEntry.id,
    entries: Map({
        [newEntry.id]: Map(newEntry),
    }),
};

export default state;
