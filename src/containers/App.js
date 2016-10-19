import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from '../actions/PageActions'

import List from '../components/List';
import Edit from '../components/Edit';


class App extends Component {
  checkItem() {
    console.log('checking item...');
  }
  render() {
    const { user, page } = this.props;
    const { setChecked } = this.props.pageActions;

    return (
      <div id="todo-wrapper">
        <List checkItem={::this.checkItem}/>
        <Edit />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.items
  }
}
function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);