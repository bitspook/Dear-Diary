import React, {PropTypes} from 'react';
import {Tag, actions as TagActions} from '../Tag';
import './style.scss';

const addNewTag = (value) => {
    console.warn(value);
};

export const TagsRow = ({tags}) => (
    <div className='TagsRow__container'>
        {tags.map((tag) => <Tag key={tag} value={tag} />)}

        <input
            className='TagsRow-new-tag-input'
            placeholder='Add tag'
            onKeyUp={addNewTag}
        />
    </div>
);

TagsRow.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};
