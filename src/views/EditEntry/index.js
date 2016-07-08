import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Observable, Subject} from 'rxjs';
import InfiniteCalendar from 'react-infinite-calendar';
import {push} from 'react-router-redux';
import 'react-infinite-calendar/styles.css';
import makeAction from '../../lib/makeAction';
import {EditableTagsRow, EditableTagsRowActions} from '../../components/EditableTagsRow';
import ChildActions from '../../high-component/ChildActions';
import {UPDATE_TAGS, UPDATE_ENTRY_BODY, UPDATE_ENTRY_TAGS, TOGGLE_CALENDAR_VISIBILITY} from './actionTypes';
import {mapStateToProps} from './selector';
import calendarTheme from './calendarTheme';
import './style.scss';

const Actions = new Subject();

@connect(mapStateToProps)
@ChildActions(EditableTagsRowActions)
class EditEntry extends Component {
    static propTypes = {
        entry: PropTypes.oneOfType([
            PropTypes.shape({
                body: PropTypes.string.isRequired,
                date: PropTypes.instanceOf(moment).isRequired,
                tags: PropTypes.arrayOf(PropTypes.string).isRequired
            }),
            PropTypes.instanceOf(Error)
        ]).isRequired,
        showCalendar: PropTypes.bool.isRequired
    };

    static handleChildActions = (props, childActions) => childActions
        .filter(({type}) => type === 'UPDATE_TAGS')
        .map(({tags}) => makeAction(UPDATE_ENTRY_TAGS, {
            entry: props.entry,
            tags
        }))
        .do((action) => Actions.next(action));

    handleChangeTextarea = (event) => {
        const body = event.target.value;

        Actions.next(makeAction(UPDATE_ENTRY_BODY, {
            body,
            entry: this.props.entry
        }));
    };

    handleClickDate = () => {
        Actions.next(makeAction(TOGGLE_CALENDAR_VISIBILITY));
    };

    handleClickOutsideCalendar = () => {
        Actions.next(makeAction(TOGGLE_CALENDAR_VISIBILITY));
    };

    handleSelectDate = (selectedDate) => {
        if (selectedDate.isSame(this.props.entry.date)) {
            return;
        }

        Actions.next(push('/entries/' + selectedDate.format('YYYY-MM-DD')));
        Actions.next(makeAction(TOGGLE_CALENDAR_VISIBILITY));
    };

    render () {
        const entry = this.props.entry;
        const showCalendar = this.props.showCalendar;

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
                    <h1
                        className='EditEntry__date'
                        onClick={this.handleClickDate}
                    >{entry.date.format('dddd MMMM DD, YYYY')}</h1>

                    <div className='EditEntry__tags-row'><EditableTagsRow tags={entry.tags} /></div>

                    <textarea
                        className='EditEntry__editor'
                        onChange={this.handleChangeTextarea}
                        placeholder='Dear Diary,'
                        value={entry.body}
                    />

                    {showCalendar ?
                        <div
                            className={'EditEntry__modal-wrapper-visible'}
                            onClick={this.handleClickOutsideCalendar}
                        >
                            <div className='EditEntry__modal-content' onClick={function (e) { e.stopPropagation(); }}>
                                <InfiniteCalendar
                                    height={600}
                                    hideYearsOnSelect={false}
                                    keyboardSupport={false}
                                    max={moment().add(10, 'days')}
                                    maxDate={moment()}
                                    onSelect={this.handleSelectDate}
                                    selectedDate={entry.date}
                                    shouldHeaderAnimate={false}
                                    theme={calendarTheme}
                                    width={600}
                                />
                            </div>
                        </div> :
                        null
                    }
                </div>
            </div>
        );
    }
}

const EditEntryActions = Actions;

export {
    EditEntry,
    EditEntryActions
};
