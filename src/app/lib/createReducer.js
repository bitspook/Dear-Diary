import identityReducer from './identityReducer';

export default (type, reducer) => (state, action) => {
    if (action.type === type) {
        if (typeof reducer !== 'function') {
            return identityReducer(state, action);
        }

        return reducer(state, action);
    }

    return state;
};
