import React, {Component, PropTypes} from 'react';

export default class Deleted extends Component {
    render() {
        const {items} = this.props;
        return (
            <ul className="deleted-items">
                {items.map(function(item, index) {
                    return <li key={index}>{item.text}</li>
                })}
            </ul>
        )
    }
}

Deleted.propTypes = {
    items: PropTypes.array.isRequired
};