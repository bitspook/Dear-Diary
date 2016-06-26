import React, {
    Component,
} from 'react';
import styles from '../../styles/containers/archive.scss';
import CSSModules from 'react-css-modules';
import {
    Link,
} from 'react-router';

class Archive extends Component {
    render() {
        return (
            <div styleName='archive'>
                <ul styleName='entries-list'>
                    <li styleName='entry'>
                        <Link to='2015-02-12'>
                            <h2 styleName='entry-title'>Saturday March 3rd, 2016</h2>
                            <div styleName='entry-excerpt'>
                                <p>Immutable data encourages pure functions (data-in, data-out) and lends itself to much simpler application development and enabling techniques from functional programming such as lazy evaluation.</p>

                                <p>While designed to bring these powerful functional concepts to JavaScript, it presents an Object-Oriented API familiar to Javascript engineers and closely mirroring that of Array, Map, and Set. It is easy and efficient to convert to and from plain Javascript.</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CSSModules(Archive, styles);
