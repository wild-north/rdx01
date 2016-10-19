import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class Item extends Component {

  render() {
    const { text, checkItem, isChecked } = this.props;

    return (
      <li className={classNames('list-item', {'checked': isChecked })} onClick={checkItem}>
        <label>
          <div className="text">{text}</div>
          <div className="check">
            <input type="checkbox"/>
          </div>
        </label>
      </li>
    );
  }
}

Item.propTypes = {
    text: PropTypes.string.isRequired,
    checkItem: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired
};