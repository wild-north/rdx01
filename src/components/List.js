import React, {Component, PropTypes} from 'react';
import Item from '../components/Item';


export default class List extends Component {

  render() {
    console.log('List rendered');
    const {changeItem, todos} = this.props;

    const elements = todos.map((item, index) => {
      return <Item key={index} todoId={item.id} text={item.text} changeItem={changeItem} isChecked={item.isChecked}/>;
    });

    return <ul className="list">{elements}</ul>
  }
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  changeItem: PropTypes.func.isRequired
};