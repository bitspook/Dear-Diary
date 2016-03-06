import React from 'react';
import CSSModules from 'react-css-modules';
import fecha from 'fecha';
import {
    Map,
} from 'immutable';
import {
    Subject,
} from 'rxjs';
import createActionCreators from '../../lib/createActionCreators';
import styles from '../../../styles/components/editor.scss';
import DatePicker from 'react-datepicker';
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import MediumEditor from 'react-medium-editor-es6';
import '../../../styles/no-css-modules/medium-editor.scss';
import '../../../../node_modules/medium-editor/dist/css/medium-editor.css';
import {
    CHANGE_DATE,
    CHANGE_ENTRY_CONTENT,
} from './actionTypes';


const action$ = new Subject();
const actions = createActionCreators({
    CHANGE_DATE,
    CHANGE_ENTRY_CONTENT,
}, action$);

type EditorProps = {
    entry: Map
}

let Editor = ({entry} : EditorProps) => {
    const currentDate = fecha.format(
        fecha.parse(entry.get('id'), 'YYYY-MM-DD'),
        'MMMM DD, YYYY'
    );

    console.warn('New content', entry.get('content'));

    return (
        <div styleName='edit-page'>
            <div styleName='entry-date'>
                <span styleName='visible-date'>{currentDate}</span>

                <DatePicker
                    styleName='edit-date'
                    popoverTargetOffset='15px 25px'
                    onChange={
                        function onDatePickerChange(moment) {
                            actions.changeDate(moment.toDate());
                        }}
                />
            </div>

            <div >
                <MediumEditor
                    tag='pre'
                    styleName='edit-entry'
                    text={entry.get('content') || ''}
                    options={
                        {
                            targetBlank: true,
                            placeholder: {
                                text: 'Dear Diary,',
                            },
                            toolbar: {
                                buttons: ['bold', 'italic', 'strikethrough', 'anchor', 'h2', 'orderedlist', 'unorderedlist', 'quote'],
                            },
                        }}
                    onChange={function handleChangeEntryContent(content : string) {
                        actions.changeEntryContent({
                            content,
                            entry,
                        });
                    }}
                />
            </div>
        </div>
    );
};

Editor = CSSModules(Editor, styles);

export {
    Editor,
    action$,
};
