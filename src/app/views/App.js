import React, {
    Component,
    PropTypes,
} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../styles/containers/app.scss';
import {
    Editor,
} from '../components/Editor';
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
        const {
            activeEntry,
        } = this.props;

        return (
            <div styleName='app'>
                <ActivityBar />

                <div styleName='content'>
                    <Editor
                        entry={activeEntry}
                    />
                </div>

            </div>
        );
    }
}

export default connect(selector)(CSSModules(App, styles));
