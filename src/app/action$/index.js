import {
    Observable,
} from 'rxjs';
import activateDate$ from './activateDate';
import changeEntryContent$ from './changeEntryContent';

let action$;

action$ = Observable.merge(
    activateDate$,
    changeEntryContent$
);

export default action$;
