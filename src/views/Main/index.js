import React from 'react';
import {connect} from 'react-redux';
import './style.scss';

const Main = () => (
    <div className='Main__container'>
        <div className='Main__sidebar'>
            <ul className='Main__sidebar-list'>
                <li className='Main__sidebar-list-item Main__sidebar-new-entry'></li>
                <li className='Main__sidebar-list-item Main__sidebar-browse-entries'></li>
                <li className='Main__sidebar-list-item Main__sidebar-dropbox'></li>
            </ul>
        </div>
        <div className='Main__content'></div>
    </div>
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Main);
