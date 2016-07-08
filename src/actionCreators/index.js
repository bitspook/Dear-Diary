import {Observable} from 'rxjs';
import neverFailingObservable from '../lib/neverFailingObservable';
import updateEntryBody from './updateEntryBody';
import updateEntryTags from './updateEntryTags';
import updateGlobalTags from './updateGlobalTags';
import saveEntry from './saveEntry';

export default (getState) => neverFailingObservable(Observable.merge(
    updateEntryBody(getState),
    updateEntryTags(getState),
    updateGlobalTags(getState),
    saveEntry(getState)
));
