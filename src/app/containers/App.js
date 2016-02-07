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
import connect from '../lib/connect';

class App extends Component {
    static propTypes = {
        activeDate: PropTypes.instanceOf(Date),
        activeEntryText: PropTypes.string,
    };

    render() {
        let {
            activeDate,
            activeEntryText,
        } = this.props;

        return (
            <div styleName='app'>
                <ActivityBar />

                <div styleName='content'>
                    <Editor
                        activeDate={activeDate}
                        activeEntryText={activeEntryText}
                    />
                </div>

            </div>
        );
    }
}

export default connect((state) => {
    return state.toJS();
})(CSSModules(App, styles));
