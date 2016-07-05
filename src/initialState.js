import moment from 'moment';

const loremBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const initialState = {
    entries: {
        [moment().format('YYYY-MM-DD')]: {
            date: moment(),
            tags: ['tag1', 'tag2'],
            body: loremBody
        },
        [moment().subtract(1, 'days').format('YYYY-MM-DD')]: {
            date: moment().subtract(1, 'days'),
            tags: ['tag2', 'tag3'],
            body: loremBody
        },
        [moment().subtract(2, 'days').format('YYYY-MM-DD')]: {
            date: moment().subtract(2, 'days'),
            tags: ['tag3', 'tag4'],
            body: loremBody
        },
        [moment().subtract(3, 'days').format('YYYY-MM-DD')]: {
            date: moment().subtract(3, 'days'),
            tags: ['tag1', 'tag2'],
            body: loremBody
        },
        [moment().subtract(4, 'days').format('YYYY-MM-DD')]: {
            date: moment().subtract(4, 'days'),
            tags: ['tag5', 'tag6'],
            body: loremBody
        },
    },
    tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
    ui: {
        showCalendar: false
    }
};

export default initialState;
