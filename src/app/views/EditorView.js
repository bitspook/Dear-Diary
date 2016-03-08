import Entry from '../models/Entry';
import fecha from 'fecha';
import {
    Map,
} from 'immutable';
import React, {
    Component,
} from 'react';
import {
    Editor,
} from '../components/Editor';

class EditorView extends Component {
    render() {
        let date,
            error,
            entry;

        try {
            date = fecha.parse(this.props.params.date, 'YYYY-MM-DD');
            entry = Map(new Entry(date));
        } catch (e) {
            error = e.message;
        }

        if (error) {
            return (
                <div>
                    Error: Invalid date in url
                </div>
            );
        }

        return (
            <Editor
                entry={entry}
            />
        );
    }
}

export default EditorView;
