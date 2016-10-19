import React, {Component, PropTypes} from 'react';
import Item from '../components/Item';


export default class List extends Component {
  render() {
    const {changeItem, todos} = this.props;
    console.log('changeItem', changeItem);

    const elements = todos.map((item, index) => {
      return <Item key={index} text={item.text} changeItem={changeItem} isChecked={item.isChecked}/>;
    });

    return <ul className="list">{elements}</ul>
  }
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  changeItem: PropTypes.func.isRequired
};

List.defaultProps = {
  items: [
    {id: 0, text: 'lorem', isChecked: false},
    {id: 1, text: 'ipsum', isChecked: false},
    {id: 2, text: 'dolor', isChecked: true}
  ]
}