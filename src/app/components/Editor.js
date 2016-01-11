import React, {
    Component,
} from 'react';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import styles from '../../styles/components/editor.scss';
import DatePicker from 'react-datepicker';

import '../../../node_modules/react-datepicker/dist/react-datepicker.css';

class Editor extends Component {
    handleDateChange = () => {
        return false;
    };

    render() {
        let currentDate;

        currentDate = moment().format('MMMM DD, YYYY');

        return (
            <div styleName='edit-page'>
                <div styleName='entry-date'>
                    <span styleName='visible-date'>{currentDate}</span>

                    <DatePicker
                        styleName='edit-date'
                        popoverTargetOffset='10px -125px'
                        onChange={this.handleDateChange}
                    />
                </div>

                <div >
                    <textarea styleName='text-field' defaultValue='Enter your thoughts here' />
                </div>
            </div>
        );
    }
}
export default CSSModules(Editor, styles);
