import snakeToCamel from './snakeToCamel';
import reduce from 'ramda/src/reduce';

export default (constants, subject$) => reduce((accum, type) => {
    const key = snakeToCamel(type);

    accum[key] = (payload) => {
        return subject$.next({
            payload,
            type,
        });
    };

    return accum;
}, {}, Object.keys(constants));
