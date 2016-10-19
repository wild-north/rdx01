import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class ListItem extends Component {

  render() {
    const { text, checkItem, isChecked } = this.props;

    return (
      <li className={classNames('list-item', {'checked': isChecked })} onClick={checkItem}>
        <label>
          <div class="text">{text}</div>
          <div class="check">
            <input type="checkbox">
          </div>
        </label>
      </li>
    );
  }
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    checkItem: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired
};