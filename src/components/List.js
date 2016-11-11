import React, { PropTypes } from 'react';
import Item from '../components/Item';


const List = (props) => {

    const {changeItemStatus, todos, deleteItem, conditions} = props;

    return <ul className="list">{
        todos.map((item, index) => {
            return (
                <Item key={index}
                      index={index}
                      item={item}
                      conditions={conditions}
                      onChange={changeItemStatus}
                      deleteItem={deleteItem}
                />
            );
        })
    }</ul>
};

List.propTypes = {
    todos: PropTypes.array.isRequired,
    changeItemStatus: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
};

export default List;