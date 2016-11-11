import React, { PropTypes } from 'react';

const Select = ({ options, selected, onSelect}) => {
    return (
        <select onChange={onSelect} defaultValue={selected.key}>
            {options.map(({key, text}, index) => <option key={index} value={key}>{text}</option>)}
        </select>
    );
};

export default Select;

Select.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
};
