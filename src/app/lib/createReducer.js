export default (type, reducer) => (state, action) => {
    if (action.type === type) {
        return reducer(state, action);
    }

    return state;
};
