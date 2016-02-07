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

class App extends Component {
    render() {
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

export default CSSModules(App, styles);
