import React, {Component, PropTypes} from 'react';

export default class Edit extends Component {
  render() {
    return <div className="edit">
      <textarea></textarea>
      <button className="save">Save</button>
    </div>
  }
}