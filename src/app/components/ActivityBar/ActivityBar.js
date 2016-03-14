import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/components/activity-bar.scss';
import {
    Link,
} from 'react-router';

let ActivityBar;

ActivityBar = () => (
    <div styleName='activity-bar'>
        <div styleName='activities'>
            <Link to='/' styleName='new-entry-active'>
                <span styleName='tool-tip'>Today</span>
            </Link>
            <Link to='/archive' styleName='all-entries'>
                <span styleName='tool-tip'>Archive</span>
            </Link>
        </div>
    </div>
);

export default CSSModules(ActivityBar, styles);
