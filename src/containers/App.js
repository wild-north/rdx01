import React from 'react';

import List from '../components/List';
import Edit from '../components/Edit';
import Deleted from '../components/Deleted';

import { connect } from 'react-redux';
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux';

const App = (props) => {

    const { changeItemStatus, changeContent, addItem, deleteItem,
            todos, deleted, conditions, content } = props;

    return (
        <div id="todo-wrapper">
            {/*<h1>Todo List</h1>*/}
            <List todos={todos}
                  conditions={conditions}
                  changeItemStatus={changeItemStatus}
                  deleteItem={deleteItem}
            />
            <Edit content={content}
                  changeContent={changeContent}
                  addItem={addItem}
            />
            <Deleted items={deleted}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos:      state.item.todos,
    deleted:    state.item.deleted,
    conditions: state.item.conditions,

    content:    state.edit.content
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);