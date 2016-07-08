import {Observable} from 'rxjs';
import makeAction from '../lib/makeAction';
import updateEntryTags from './updateEntryTags';
import updateEntryBody from './updateEntryBody';


const saveEntryService = (body) => {
    const apiUrl = '/api/entries';
    const requestOptions = {
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
        method: 'POST'
    };

    return fetch(apiUrl, requestOptions)
        .then((res) => res.json())
        .then((res) => {
            if (res.status !== 'Ok') {
                throw new Error('Failed to save entry: ' + res.status);
            }

            return res;
        });
};

export default (getState) => {
    const saveEntryStart = updateEntryTags(getState)
        .merge(updateEntryBody(getState))
        .map(({body, entry, tags}) => makeAction('SAVE_ENTRY_START', {body, entry, tags})); // eslint-disable-line object-property-newline

    const saveEntryAsync = saveEntryStart
        .flatMap(({body, entry, tags}) => {
            const newEntry = {date: entry.date.format('YYYY-MM-DD')};

            if (body) {
                newEntry.body = body;
            }

            if (tags) {
                newEntry.tags = tags;
            }

            return Observable
                .fromPromise(saveEntryService(newEntry))
                .map(() => makeAction('SAVE_ENTRY_SUCCESS', {date: entry.date}))
                .catch((error) => Observable.of(makeAction('SAVE_ENTRY_FAIL', {date: entry.date, error}))); // eslint-disable-line object-property-newline
        });

    return Observable.merge(
        saveEntryStart,
        saveEntryAsync
    );
};
