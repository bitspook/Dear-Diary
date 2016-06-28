import React, {PropTypes} from 'react';
import {Subject} from 'rxjs';
import './style.scss';

export const actions = new Subject();

const removeTag = (tag) => () => actions.next({
    tag,
    type: 'REMOVE'
});

export const Tag = ({value}) => (
    <span className='Tag__container'>
        <span className='Tag__body'>
            {value}
            <span className='Tag__close-button' onClick={removeTag(value)}></span>
        </span>
    </span>
);

Tag.propTypes = {
    value: PropTypes.string.isRequired
};
