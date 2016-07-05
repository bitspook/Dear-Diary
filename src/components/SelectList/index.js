import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import './style.scss';

class SelectList extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.any),
        title: PropTypes.string
    };

    constructor (props, context) {
        super(props, context);

        this.state = {items: props.items};
    }

    handleFilterTags = (event) => {
        const filter = event.target.value;
        const items = this.props.items.filter((item) => item.indexOf(filter) >= 0);

        this.setState({items});
    };

    render () {
        const items = this.state.items;

        return <div className='SelectList__container'>
            <ul className='SelectList__list'>
                <li>
                    <input
                        className='SelectList__search-input'
                        onChange={this.handleFilterTags}
                        placeholder='Search'
                        tyle='search'
                    />
                </li>

                <Link
                    key='all'
                    to='/entries'
                >
                    <li className='SelectList__list-item'>All</li>
                </Link>

                {/* eslint-disable prefer-arrow-callback */}
                {items.sort().map(function (item) {
                    return (
                        <Link
                            activeClassName='SelectList__list-item-active'
                            key={item}
                            query={{tag: item}}
                            to='/entries'
                        >
                            <li className='SelectList__list-item'>{item}</li>
                        </Link>);
                })}
                {/* eslint-enable */}
            </ul>
        </div>;
    }
}

export {
    SelectList
};
