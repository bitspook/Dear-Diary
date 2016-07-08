import {EditEntryActions} from '../views/EditEntry';
import makeAction from '../lib/makeAction';

export default () => EditEntryActions
    .filter(({type}) => type === 'UPDATE_ENTRY_TAGS')
    .map(({entry, tags}) => makeAction('UPDATE_ENTRY_TAGS', {entry, tags}));  // eslint-disable-line object-property-newline
