import React from 'react';
import {connect} from 'react-redux';

const Main = () => <h1>Hello world</h1>;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Main);
