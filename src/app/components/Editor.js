import React, {
    Component,
} from 'react';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import styles from '../../styles/components/editor.scss';

class Editor extends Component {
    render() {
        let currentDate;

        currentDate = moment().format('MMMM DD, YYYY');

        return (
            <div styleName='edit-page'>
                <div>
                    <input type='text' styleName='entry-date' defaultValue={currentDate} />
                    <input styleName='preview-button' type='button' value='Preview' />
                </div>

                <div >
                    <textarea styleName='text-field' defaultValue='Enter your thoughts here' />
                </div>
            </div>
        );
    }
}
export default CSSModules(Editor, styles);
