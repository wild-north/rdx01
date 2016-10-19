import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { getPhotos } = this.props.pageActions;

    return (
      <div id="todo-wrapper">
        <ul class="list">
          <ListItem text={text} checkItem={checkItem}/>
          <li class="list-item">
            <label for="checked-02">
              <div class="text">do nothing</div>
              <div class="check">
                <input type="checkbox" id="checked-02">
              </div>
            </label>
          </li>
          <li class="list-item">
            <label for="checked-03">
              <div class="text">learn rudux</div>
              <div class="check">
                <input type="checkbox" id="checked-03">
              </div>
            </label>
          </li>
        </ul>
        <div class="edit">
          <textarea></textarea>
          <button class="save">Save</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}
function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);