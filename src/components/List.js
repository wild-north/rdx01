import React, {Component, PropTypes} from 'react';
import Item from '../components/Item';


export default class List extends Component {

    render() {
        const {changeItem, todos, deleteItem, conditions} = this.props;

        const elements = todos.map((item, index) => {
            return (
                <Item key={index}
                      index={index}
                      item={item}
                      conditions={conditions}
                      changeItem={changeItem}
                      deleteItem={deleteItem}
                />
            );
        });

        return <ul className="list">{elements}</ul>
    }
}

List.propTypes = {
    todos: PropTypes.array.isRequired,
    changeItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
};