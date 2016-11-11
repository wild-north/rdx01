import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Select from './Select';

const Item = (props) => {

    const { item, conditions, deleteItem } = props;
    const selectedCondition = conditions.find(({key}) => key === item.condition);

    const onSelect = (e) => {
        console.log(e.target.value);
    };

    const removeItem = (id) => () => {
        deleteItem({ id });
    };

    return (

        <li className={classNames('list-item', {[selectedCondition.className]: true})}>
            <div className="text">{item.text}</div>
            <div className="right">
                <Select options={conditions} selected={selectedCondition} onSelect={onSelect}></Select>
                <button className="del" onClick={removeItem(item.id)}>[x]</button>
            </div>
        </li>
    );
}

export default Item;
//
// Item.propTypes = {
//     item: PropTypes.object.isRequired,
//     onClick: PropTypes.func.isRequired
// };