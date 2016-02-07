import reduce from 'ramda/src/reduce';

export default (constants) => reduce((acc, key) => {
    acc[key] = key;
    return acc;
}, {}, constants);
