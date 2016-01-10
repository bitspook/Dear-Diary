import React, {
	Component,
	PropTypes
} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../styles/app.scss';
import Editor from '../components/Editor.js';

class App extends Component {
	render() {
		return ( 
			<div>
				<div styleName='nav-bar'>
					<div styleName='nav-bar-menu'> New </div>
					<div styleName='nav-bar-menu'> All </div>
				</div> 
				<Editor /> 
			</ div>
		);
	}
}

export default CSSModules(App, styles);