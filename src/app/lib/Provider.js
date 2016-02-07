import {
    Children,
    Component,
    PropTypes,
} from 'react';

export default class Provider extends Component {
    static childContextTypes = {
        state$: PropTypes.object,
    };

    getChildContext() {
        return {
            state$: this.state$,
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state$ = props.state$;
    }

    render() {
        let { children } = this.props;
        return Children.only(children);
    }
}
