import { CHECK_ITEM, DELETE_ITEM } from '../constants/item';
import { ADD_ITEM } from '../constants/edit';
// import Immutable from 'immutable';

const initialState = {
    deleted: [],
    todos: [
        {id: 0, text: 'learn React',        isChecked: false},
        {id: 1, text: 'learn Redux',        isChecked: false},
        {id: 2, text: 'make TODO-APP',      isChecked: true},
        {id: 3, text: 'learn ImmutableJS',  isChecked: false},
        {id: 4, text: 'make TODO-APP store immutable',    isChecked: false},
        {id: 5, text: 'learn Reselect',     isChecked: false},
        {id: 6, text: 'view Ilia Klimov\'s webinar about Redux',     isChecked: false},
        {id: 7, text: 'not to go grazy :3',     isChecked: false}
    ]
};

export default function item(state = initialState, action) {
    switch (action.type) {
        case CHECK_ITEM:
            return Object.assign({}, state, {todos: updateTodos(action.payload, state.todos)});
        case ADD_ITEM:
            return {...state, todos: addTodo(action.payload, state.todos)};
        case DELETE_ITEM:
            return removeTodo(action.payload, state);

        default:
            return state;
    }
}

function updateTodos({id}, todos) {
    return todos.map(todo => {
        if (todo.id === id) {
            todo.isChecked = !todo.isChecked
        }
        return todo;
    });
}

function addTodo(content, todos) {
    let updatedTodos = todos.slice();

    updatedTodos.push({
        id: todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 0,
        text: content,
        isChecked: false
    });

    return updatedTodos;
}
function removeTodo({id, index}, state) {

    let todos = state.todos.slice();
    let deleted = state.deleted.slice();

    if (todos[index].id === id) {
        deleted = deleted.concat( todos.splice(index, 1) );
    }

    return {
        deleted,
        todos
    };
}