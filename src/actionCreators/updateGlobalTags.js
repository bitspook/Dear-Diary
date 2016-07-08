import makeAction from '../lib/makeAction';
import updateEntryTags from './updateEntryTags';

export default (getState) => updateEntryTags(getState)
    .map(({entry, tags}) => {
        if (entry.tags.length > tags.length) {
            // we are removing a tag
            const removedTags = entry.tags.filter((tag) => !tags.includes(tag));

            return makeAction('REMOVE_GLOBAL_TAGS', {tags: removedTags});
        }

        return makeAction('ADD_GLOBAL_TAGS', {tags});
    });
