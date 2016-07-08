import {EditEntryActions} from '../views/EditEntry';
import makeAction from '../lib/makeAction';

export default () => EditEntryActions
    .filter(({type}) => type === 'UPDATE_ENTRY_BODY')
    .debounceTime(300)
    .map(({body, entry}) => makeAction('UPDATE_ENTRY_BODY', {body, entry}));  // eslint-disable-line object-property-newline
