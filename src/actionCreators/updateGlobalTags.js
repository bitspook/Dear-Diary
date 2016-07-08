import makeAction from '../lib/makeAction';
import updateEntryTags from './updateEntryTags';

export default (getState) => updateEntryTags(getState)
    .map(({tags}) => makeAction('UPDATE_TAGS', {tags}));
