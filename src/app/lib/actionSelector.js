export default (action$, type) => {
    return action$
        .filter(action => action.type === type);
};
