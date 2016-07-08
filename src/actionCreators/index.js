import {Observable} from 'rxjs';
import updateEntryBody from './updateEntryBody';
import updateEntryTags from './updateEntryTags';
import updateGlobalTags from './updateGlobalTags';

export default (getState) => Observable.merge(
    updateEntryBody(getState),
    updateEntryTags(getState),
    updateGlobalTags(getState)
);
