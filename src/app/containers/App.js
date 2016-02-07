import React, {
    Component,
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
    render() {
        console.warn('Props', this.props);
        return (
            <div styleName='app'>
                <ActivityBar />

                <div styleName='content'>
                    <Editor />
                </div>

            </div>
        );
    }
}

export default connect((state) => {
    return state.toJS();
})(CSSModules(App, styles));
