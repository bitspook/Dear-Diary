import {
    Observable,
} from 'rxjs';
import changeActiveEntry$ from './changeActiveEntry';
import changeEntryContent$ from './changeEntryContent';

let action$;

action$ = Observable.merge(
    changeActiveEntry$,
    changeEntryContent$,
);

export default action$;
