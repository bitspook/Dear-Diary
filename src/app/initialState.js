import {
    Map
} from 'immutable';
import fecha from 'fecha';

const initialState = {
    activeEntryId: fecha.format(new Date(), 'YYYY-MM-DD'),
    activeDate: new Date(),
    entries: Map()
};

export default Map(initialState);
