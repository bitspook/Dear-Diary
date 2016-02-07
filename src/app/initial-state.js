import Immutable from 'immutable';
import fecha from 'fecha';

let initialState;

initialState = {
    activeEntryId: fecha.format(new Date(), 'YYYY-MM-DD'),
    activeDate: new Date(),
    entries: {},
};

export default Immutable.fromJS(initialState);
