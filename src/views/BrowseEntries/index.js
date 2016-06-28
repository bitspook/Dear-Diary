import React from 'react';
import {connect} from 'react-redux';

const BrowseEntries = () => <h1>Browse Entries</h1>;

const mapStateToProps = (state, {location: {query}}) => {
    const tag = query.tag || null;

    return {tag};
};

export default connect(mapStateToProps)(BrowseEntries);
