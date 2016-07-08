import {Observable} from 'rxjs';

export default (...observables) => {
    const neverFailingObservable = Observable
          .merge(...observables)
          .catch((err) => {
              console.error('Ignoring the error occurred somewhere on Observable chain: ', err); // eslint-disable-line no-console

              return neverFailingObservable;
          });

    return neverFailingObservable;
};
