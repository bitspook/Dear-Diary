import React, {
    Component,
} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../styles/containers/app.scss';
import Editor from '../components/editor';
import ActivityBar from '../components/activity-bar';

class App extends Component {
    render() {
        return (
            <div styleName='container'>
                <ActivityBar />

                <div styleName='content'>
                    <Editor />
                </div>

            </div>
        );
    }
}

export default CSSModules(App, styles);
