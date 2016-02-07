export default (string) => {
    return string.toLowerCase().replace(/_(.)/g, (match, group1) => group1.toUpperCase());
};
