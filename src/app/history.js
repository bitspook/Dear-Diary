import {
    browserHistory,
} from 'react-router';
import store from './store';
import {
    syncHistoryWithStore,
} from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

export default history;
