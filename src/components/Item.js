import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class Item extends Component {

  render() {
    const { text, changeItem, isChecked } = this.props;

    return (
      <li className={classNames('list-item', {'done': isChecked })} onClick={changeItem}>
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