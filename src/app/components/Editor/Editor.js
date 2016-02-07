import React from 'react';
import CSSModules from 'react-css-modules';
import fecha from 'fecha';
import {
    Subject,
} from 'rxjs-es/Subject';

import createActionCreators from '../../lib/createActionCreators';

import styles from '../../../styles/components/editor.scss';

import DatePicker from 'react-datepicker';
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';

import MediumEditor from 'react-medium-editor';

import '../../../styles/no-css-modules/medium-editor.scss';
import '../../../../node_modules/medium-editor/dist/css/medium-editor.css';

import actionTypes from './actionTypes';

let Editor,
    action$,
    actions;

action$ = new Subject();
actions = createActionCreators(actionTypes, action$);

Editor = ({activeDate}) => {
    let currentDate;

    currentDate = fecha.format(activeDate, 'MMMM DD, YYYY');

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