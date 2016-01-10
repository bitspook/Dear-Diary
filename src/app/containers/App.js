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
            <div>
                <ActivityBar />

                <Editor />
            </div>
        );
    }
}

export default CSSModules(App, styles);
