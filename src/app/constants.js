import createConstants from './lib/createConstants';

let actionTypes;

actionTypes = createConstants([
    'CHANGE_ACTIVE_DATE',
    'CHANGE_ACTIVE_ENTRY_ID'
]);

export default actionTypes;
