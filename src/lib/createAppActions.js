import {Observable} from 'rxjs';

export default (...action$) => {
    const AppAction$ = Observable
          .merge(...action$)
          .catch((err) => {
              console.error('Ignoring the error occured somewhere on actions chain: ', err); // eslint-disable-line no-console

              return AppAction$;
          });

    return AppAction$;
};
