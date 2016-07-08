import {Observable} from 'rxjs';
import updateEntryBody from './updateEntryBody.js';

export default (getState) => Observable.merge(
    updateEntryBody(getState)
);
