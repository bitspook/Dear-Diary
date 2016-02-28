///<reference path='../../../node_modules/immutable/dist/Immutable.d.ts'/>
import {
    Map
} from 'immutable';

interface AppPropTypes {
    activeDate: String,
    activeEntry: Object
};

export default (state : Map<string, any>): AppPropTypes => {
    return {
        activeEntry: {},
        activeDate: state.get('activeDate')
    }
};
