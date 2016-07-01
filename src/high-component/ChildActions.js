import React, {Component} from 'react';

export default (...childActions) => (ChildComponent) => class ChldActionsWrapper extends Component {
    constructor (props, context) {
        super(props, context);

        if (typeof ChildComponent.handleChildActions !== 'function') {
            console.warn(ChildComponent.name, 'component must provide a static `handleChildActions` function'); // eslint-disable-line no-console

            return;
        }

        const ChildActions = ChildComponent
            .handleChildActions(this.props, ...childActions)
            .catch((err) => {
                console.error('Error occurred while handling child actions of ', ChildComponent.name, ':', err); // eslint-disable-line no-console

                return ChildActions;
            });

        this.childActionsSub = ChildActions.subscribe();
    }

    componentWillUnmount = () => {
        if (this.childActionsSub) {
            this.childActionsSub.unsubscribe();
        }
    }

    render () {
        return <ChildComponent {...this.props} />;
    }
};
