import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/components/activity-bar.scss';
import {
    Link,
} from 'react-router';
import fecha from 'fecha';

let ActivityBar;

const today = fecha.format(new Date(), 'YYYY-MM-DD');

ActivityBar = () => (
    <div styleName='activity-bar'>
        <div styleName='activities'>
            <Link
                activeClassName={styles['new-entry-active']}
                to={today}
                styleName='new-entry'
            >
                <span styleName='tool-tip'>Today</span>
            </Link>
            <Link
                activeClassName={styles['archive-active']}
                to='/archive'
                styleName='archive'
            >
                <span styleName='tool-tip'>Archive</span>
            </Link>
        </div>
    </div>
);

export default CSSModules(ActivityBar, styles);
