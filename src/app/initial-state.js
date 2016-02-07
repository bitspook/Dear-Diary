import Immutable from 'immutable';
import fecha from 'fecha';

let initialState;

initialState = {
    activeEntry: null,
    activeDate: new Date(),
    entries: {},
};

export default Immutable.fromJS(initialState);
