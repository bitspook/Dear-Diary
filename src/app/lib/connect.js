import React, {
    Component,
    PropTypes,
} from 'react';

export default (selector) => {
    return (WrappedComponent) => {
        class Connect extends Component {
            static contextTypes = {
                state$: PropTypes.object,
            };

            constructor(props, context) {
                super(props, context);

                this._mounted = false;
                this.state$ = props.state$ || context.state$;

                this.stateObserver = this.state$.subscribe({
                    next: (state) => {
                        if (!this._mounted) {
                            this.state = {
                                state
                            };
                            return;
                        }

                        this.setState({state});
                    },
                });
            }

            componentDidMount = () => {
                this._mounted = true;
            };

            componentWillUnmount = () => {
                this._mounted = false;
                this.stateObserver.unsubscribe();
            };

            render() {
                return (
                    <WrappedComponent {...selector(this.state.state)}/>
                );
            }
        }

        return Connect;
    };
};
