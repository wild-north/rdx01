import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { changeItem } from '../actions/ItemActions'
import * as actions from '../actions/ItemActions'
import { getValue } from '../helpers/connector'

import List from '../components/List';
import Edit from '../components/Edit';


class App extends Component {

  render() {
    const {changeItem} = this.props;
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
// function mapDispatchToProps(dispatch) {
//   return {
//     pageActions: bindActionCreators(pageActions, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(mapStateToProps, {
//   changeItem,
// })(App);

export default connect(mapStateToProps, actions)(App);