import React, {
	Component,
	PropTypes
} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../styles/editor.scss';

class Editor extends Component {
	render() {
		var currentDate = new Date();
		currentDate = currentDate.toLocaleDateString();
		return ( 
			<div styleName='Edit-page'>
				<div>
					<input id='date' type='date' styleName='date-field' defaultValue='2016-01-10'/>

					<input type='button' value='Preview' />
				</ div>
				<div >
					<textarea styleName='text-field' defaultValue='Enter your thoughts here :-)' />
					
				</div> 
			</ div>
		);
	}
}
export default CSSModules(Editor, styles);