import * as c from '../constants/constants';

const conditionsOrder = [c.IN_PROGRESS, c.COMPLETED, c.TODO, c.FAILED];

const initialState = {
    conditions: [
        {id: 0, key: c.IN_PROGRESS,   text: 'In Progress',        className: "task-in-progress"},
        {id: 1, key: c.COMPLETED,     text: 'Completed',          className: "task-completed"},
        {id: 2, key: c.FAILED,        text: 'Failed',             className: "task-failed"},
        {id: 3, key: c.TODO,          text: 'Need to be done',    className: null}
    ],
    deleted: [],
    todos: [
        {id: 0, text: 'learn React',            condition: c.IN_PROGRESS  },
        {id: 1, text: 'learn Redux',            condition: c.IN_PROGRESS  },
        {id: 2, text: 'make TODO-APP',          condition: c.IN_PROGRESS  },
        {id: 3, text: 'learn ImmutableJS',      condition: c.TODO         },
        {id: 4, text: 'make store immutable',   condition: c.TODO         },
        {id: 5, text: 'learn Reselect',         condition: c.TODO         },
        {id: 6, text: 'not to go grazy :3',     condition: c.FAILED       },
        {id: 7, text: 'get some whisky',        condition: c.COMPLETED    }
    ]
};

export default function item(state = initialState, action) {
    switch (action.type) {
        case c.CHANGE_ITEM_STATUS:
            return {...state, todos: updateTodos(action.payload, state.todos)};

        case c.ADD_ITEM:
            return {...state, todos: addTodo(action.payload, state.todos)};

        case c.DELETE_ITEM:
            const {deleted, todos} = removeTodo(action.payload, state)
            return {...state, deleted, todos};

        default:
            return state;
    }
}

function updateTodos(changedItem, todos) {
    return todos.map(todo => (todo.id === changedItem.id) ? changedItem : todo);
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

    return { deleted, todos };
}