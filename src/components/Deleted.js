import React, { PropTypes } from 'react';

const Deleted = ({items}) => (
    <ul className="deleted-items">
        {items.map(function (item, index) {
            return <li key={index}>{item.text}</li>
        })}
    </ul>
);

Deleted.propTypes = {
    items: PropTypes.array.isRequired
};

export default Deleted;