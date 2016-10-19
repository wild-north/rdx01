import React, {Component, PropTypes} from 'react';
import Item from '../components/Item';


export default class List extends Component {
  render() {
    /* TODO: don't forget to delete this */
    const mock = [
      {id: 0, text: 'lorem', isChecked: false},
      {id: 1, text: 'ipsum', isChecked: false},
      {id: 2, text: 'dolor', isChecked: true}
    ];
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    const {checkItem} = this.props;

    const items = this.props.items || mock;

    const elements = items.map((item) => {
      return (<Item key={item.id} text={item.text} checkItem={checkItem} isChecked={item.isChecked}/>);
    });

    return <ul className="list">{elements}</ul>
  }
}

List.propTypes = {
  // items: PropTypes.array.isRequired,
  checkItem: PropTypes.func.isRequired
};