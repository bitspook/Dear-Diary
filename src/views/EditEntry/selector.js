import moment from 'moment';

export const mapStateToProps = (state, {params}) => {
    let entry;
    const date = moment(params.date, 'YYYY-MM-DD');

    if (date.isValid()) {
        entry = state.entries[params.date];

        entry = entry || {
            body: '',
            date,
            tags: []
        };
    } else {
        entry = new Error('Unable to parse date in URL');
    }

    if (date.isAfter(moment())) {
        entry = new Error('Cannot write diary entry for future');
    }

    return {entry};
};
