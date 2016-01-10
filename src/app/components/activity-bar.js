import React, {
    Component
} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../styles/components/activity-bar.scss';

class ActivityBar extends Component {
    render() {
        return (
            <div styleName='activity-bar'>
                <div styleName='activities'>
                    <i styleName='new-entry-active'>
                        <span styleName='tool-tip'>New Entry</span>
                    </i>
                    <i styleName='all-entries'>
                        <span styleName='tool-tip'>Read All</span>
                    </i>
                </div>
            </div>
        );
    }
}
export default CSSModules(ActivityBar, styles);
