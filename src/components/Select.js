import React, {PropTypes, Component} from 'react';

export default class Select extends Component {
    onChange(e) {
        return e.target.value;
    }
    render() {
        const { options, selected} = this.props;
        return (
            <select onChange={this.onChange}>
                {options.map(({key, text}, index) => {
                    return <option key={index}
                                   value={key}
                                   selected={key === selected.key}
                            >{text}</option>;
                })}
            </select>
        );
    }
}

Select.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
};
