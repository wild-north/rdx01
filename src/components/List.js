import React, {Component, PropTypes} from 'react';
import Item from '../components/Item';


export default class List extends Component {

    render() {
        const {changeItemStatus, todos, deleteItem, conditions} = this.props;


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
    }
}

List.propTypes = {
    todos: PropTypes.array.isRequired,
    changeItemStatus: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
};