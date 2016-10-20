import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class Item extends Component {

  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(e) {
    let { todoId } = this.props;
    return this.props.changeItem({ todoId });
  }

  render() {
    const { text, changeItem, isChecked, todoId:id} = this.props;

    // (e) => changeItem(e, {id:id, isChecked: !isChecked, text: text})
    return (
      <li className={classNames('list-item', {'done': isChecked })}
          onClick={this.change}>
        <label>
          <div className="text">{text}</div>
          <div className="check">&nbsp;</div>
        </label>
      </li>
    );
  }
}

Item.propTypes = {
    text: PropTypes.string.isRequired,
    changeItem: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired
};