import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import Select from './Select';

export default class Item extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onClick() {
        let { id } = this.props.item;

        this.props.onClick({id});
    }
    onRemove(e) {
        e.stopPropagation();
        let { id } = this.props.item;
        let { index } = this.props;

        this.props.deleteItem({id, index});
    }
    onSelect(e) {
        e.stopPropagation();
        console.log(e.target.value);
    }

    render() {
        const { item, conditions } = this.props;
        const selectedCondition = conditions.find(({key}) => key === item.condition);

        return (

            <li className={classNames('list-item', {[selectedCondition.className]: true})}
            >
                <div className="text">{item.text}</div>

                <div className="right">
                    <Select options={conditions} selected={selectedCondition} onSelect={this.onSelect}></Select>
                    <button className="del" onClick={this.onRemove}>[x]</button>
                </div>
            </li>
        );
    }
}
//
// Item.propTypes = {
//     item: PropTypes.object.isRequired,
//     onClick: PropTypes.func.isRequired
// };