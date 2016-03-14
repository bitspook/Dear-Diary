import identityReducer from './identityReducer';

export default (type, reducer, initialState) => (state, action) => {
    if (typeof reducer !== 'function') {
        initialState = reducer;
    }

    if (action.type === type) {
        if (typeof reducer !== 'function') {
            return identityReducer(state, action);
        }

        return reducer(state, action);
    }

    return state || initialState;
};
