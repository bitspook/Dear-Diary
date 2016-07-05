import React, {PropTypes} from 'react';
import moment from 'moment';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import './style.scss';

const Main = ({children}) => (
    <div className='Main__container'>
        <div className='Main__sidebar'>
            <ul className='Main__sidebar-list'>
                <Link
                    activeClassName='Main__sidebar-list-item-active'
                    to={'/entries/' + moment().format('YYYY-MM-DD')}
                >
                    <li className='Main__sidebar-list-item Main__sidebar-new-entry'></li>
                </Link>

                <Link
                    activeClassName='Main__sidebar-list-item-active'
                    to={'/entries/'}
                >
                    <li className='Main__sidebar-list-item Main__sidebar-browse-entries'></li>
                </Link>
            </ul>
        </div>
        <div className='Main__content'>{children}</div>
    </div>
);

Main.propTypes = {
    children: PropTypes.element.isRequired
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Main);
