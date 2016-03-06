import {
    Observable,
} from 'rxjs';
import changeActiveEntryId$ from './changeActiveEntryId';
import changeEntryContent$ from './changeEntryContent';

let action$;

action$ = Observable.merge(
    changeActiveEntryId$,
    changeEntryContent$,
);

export default action$;
