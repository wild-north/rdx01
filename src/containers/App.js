import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/ItemActions'
import {getValue} from '../helpers/connector'

import List from '../components/List';
import Edit from '../components/Edit';
import Deleted from '../components/Deleted';

import { bindActionCreators } from 'redux';
// import { changeItem } from '../actions/ItemActions'


class App extends Component {

    render() {
        const {changeItem, changeContent, addItem, deleteItem, todos, deleted} = this.props;
        return (
            <div id="todo-wrapper">
                <h1>Todo List</h1>
                <List todos={todos}
                      changeItem={changeItem}
                      deleteItem={deleteItem}
                />
                <Edit content={this.props.content}
                      changeContent={changeContent}
                      addItem={addItem}
                />
                <Deleted items={deleted}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos:      state.item.todos,
    deleted:    state.item.deleted,
    content:    state.edit.content
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(mapStateToProps, {
//   changeItem,
// })(App);
