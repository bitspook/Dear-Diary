import React, {
    Component,
    PropTypes,
} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../styles/containers/app.scss';

import {
    ActivityBar,
} from '../components/ActivityBar';
import {
    connect,
} from 'react-redux';
import selector from '../selectors/appSelector';
import action$ from '../action$';

class App extends Component {
    static propTypes = {
        activeEntry: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    componentDidMount = () => {
        this.actionSubscription = action$.subscribe(
            action => this.props.dispatch(action)
        );
    };

    componentWillUnmount = () => {
        this.actionSubscription.unsubscribe();
    };

    render() {
        return (
            <div styleName='app'>
                <ActivityBar />

                <div styleName='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(selector)(CSSModules(App, styles));
