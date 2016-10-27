import { CHANGE_ITEM, DELETE_ITEM, IN_PROGRESS, COMPLETED, TODO, FAILED} from '../constants/item';
import { ADD_ITEM } from '../constants/edit';
// import Immutable from 'immutable';

const conditionsOrder = [IN_PROGRESS, COMPLETED, TODO, FAILED];

const initialState = {
    // conditions: {
    //     [IN_PROGRESS]:  {id: 0, text: 'In Progress',        className: "task-in-progress"},
    //     [COMPLETED]:    {id: 1, text: 'Completed',          className: "task-completed"},
    //     [FAILED]:       {id: 2, text: 'Failed',             className: "task-failed"},
    //     [TODO]:         {id: 3, text: 'Need to be done',    className: null}
    // },
    conditions: [
        {id: 0, key: IN_PROGRESS,   text: 'In Progress',        className: "task-in-progress"},
        {id: 1, key: COMPLETED,     text: 'Completed',          className: "task-completed"},
        {id: 2, key: FAILED,        text: 'Failed',             className: "task-failed"},
        {id: 3, key: TODO,          text: 'Need to be done',    className: null}
    ],
    deleted: [],
    todos: [
        {id: 0, text: 'learn React',            condition: IN_PROGRESS  },
        {id: 1, text: 'learn Redux',            condition: IN_PROGRESS  },
        {id: 2, text: 'make TODO-APP',          condition: IN_PROGRESS  },
        {id: 3, text: 'learn ImmutableJS',      condition: TODO         },
        {id: 4, text: 'make store immutable',   condition: TODO         },
        {id: 5, text: 'learn Reselect',         condition: TODO         },
        {id: 6, text: 'not to go grazy :3',     condition: FAILED       },
        {id: 7, text: 'get some whisky',        condition: COMPLETED    }
    ]
};

export default function item(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ITEM:
            return {...state, todos: updateTodos(action.payload, state.todos)};
        case ADD_ITEM:
            return {...state, todos: addTodo(action.payload, state.todos)};
        case DELETE_ITEM:
            var {deleted, todos} = removeTodo(action.payload, state)
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

    return {
        deleted,
        todos
    };
}