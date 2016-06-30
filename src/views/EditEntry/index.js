import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Subject} from 'rxjs';
import makeAction from '../../lib/makeAction';
import {TagsRow, TagsRowActions} from '../../components/TagsRow';
import {UPDATE_ENTRY_BODY, UPDATE_ENTRY_TAGS} from './actionTypes';
import {mapStateToProps} from './selector';
import './style.scss';

const updateTagsActions = new Subject();
const updateBodyActions = new Subject();

const handleChangeTextarea = (entry) => (event) => {
    const body = event.target.value;

    updateBodyActions.next(makeAction(UPDATE_ENTRY_BODY, {
        body,
        entry
    }));
};

class EditEntryComponent extends Component {
    static propTypes = {
        entry: PropTypes.oneOfType([
            PropTypes.shape({
                body: PropTypes.string.isRequired,
                date: PropTypes.instanceOf(moment).isRequired,
                tags: PropTypes.arrayOf(PropTypes.string).isRequired
            }),
            PropTypes.instanceOf(Error)
        ]).isRequired
    };

    constructor (props, context) {
        super(props, context);

        const entry = props.entry;

        this.TagsRowActionsSub = TagsRowActions
            .filter(({type}) => type === 'UPDATE_TAGS')
            .map(({tags}) => makeAction(UPDATE_ENTRY_TAGS, {
                entry,
                tags
            }))
            .subscribe({
                error: (err) => console.warn('Error in TagsRowActions', err), // eslint-disable-line no-console
                next: (action) => updateTagsActions.next(action)
            });
    }

    componentWillUnmount = () => {
        this.TagsRowActionsSub.unsubscribe();
    };

    render () {
        const entry = this.props.entry;

        if (entry instanceof Error) {
            return (
                <div className='EditEntry__container'>
                    <div className='EditEntry__content'>
                        <div className='EditEntry__error'>{entry.message}</div>
                    </div>
                </div>
            );
        }

        return (
            <div className='EditEntry__container'>
                <div className='EditEntry__content'>
                    <h1 className='EditEntry__date'>{entry.date.format('dddd MMMM DD, YYYY')}</h1>

                    <div className='EditEntry__tags-row'><TagsRow tags={entry.tags} /></div>

                    <textarea
                        className='EditEntry__editor'
                        onChange={handleChangeTextarea(entry)}
                        placeholder='Dear Diary,'
                        value={entry.body}
                    />
                </div>
            </div>
        );
    }
}

const EditEntry = connect(mapStateToProps)(EditEntryComponent);

const EditEntryActions = () => updateBodyActions.merge(updateTagsActions);

export {
    EditEntry,
    EditEntryActions
};
