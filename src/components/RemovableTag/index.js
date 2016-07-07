import React, {Component, PropTypes} from 'react';
import {Subject} from 'rxjs';
import makeAction from '../../lib/makeAction';
import {REMOVE_TAG} from './actionTypes';
import './style.scss';

const removeTagActions = new Subject();

class RemovableTag extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired
    }

    handleRemoveTag = () => removeTagActions.next(makeAction(REMOVE_TAG, {tag: this.props.value}));

    render () {
        const value = this.props.value;

        return (
            <span className='Tag__container'>
                <span className='Tag__body'>
                    {value}
                    <span className='Tag__close-button' onClick={this.handleRemoveTag}></span>
                </span>
            </span>
        );
    }
}

const RemovableTagActions = removeTagActions;

export {
    RemovableTag,
    RemovableTagActions
};
