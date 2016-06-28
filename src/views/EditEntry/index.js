import React from 'react';
import {connect} from 'react-redux';

const EditEntry = () => <h1>Edit Entry</h1>;

const mapStateToProps = (state, {params}) => {
    const date = params.date;

    return {date};
};

export default connect(mapStateToProps)(EditEntry);
