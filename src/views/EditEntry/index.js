import React from 'react';
import {connect} from 'react-redux';
import {TagsRow} from '../../components/TagsRow';
import './style.scss';

const EditEntry = () => (
    <div className='EditEntry__container'>
        <div className='EditEntry__content'>
            <h1 className='EditEntry__date'>Sunday January 1, 1972</h1>

            <div className='EditEntry__tags-row'><TagsRow tags={['Hello', 'world']} /></div>

            <textarea
                className='EditEntry__editor'
                placeholder='Dear Diary,'
            />
        </div>
    </div>
);

const mapStateToProps = (state, {params}) => {
    const date = params.date;

    return {date};
};

export default connect(mapStateToProps)(EditEntry);
