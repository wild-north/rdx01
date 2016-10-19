import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from '../actions/PageActions'

import List from '../components/List';
import Edit from '../components/Edit';


class App extends Component {

  render() {
    const {changeItem} = this.props.pageActions;
    return (
      <div id="todo-wrapper">
        <h1>Todo List</h1>
        <List todos={this.props.todos} changeItem={changeItem}/>
        <Edit />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    todos: state.item.todos
  }
}
function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);