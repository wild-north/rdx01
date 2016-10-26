import { CHECK_ITEM, DELETE_ITEM, IN_PROGRESS, COMPLETED, TODO, FAILED} from '../constants/item';
import { ADD_ITEM } from '../constants/edit';
// import Immutable from 'immutable';

const conditionsOrder = [IN_PROGRESS, COMPLETED, TODO, FAILED];

const initialState = {
    conditions: {
        [IN_PROGRESS]:  {id: 0,     className: "task-in-progress"},
        [COMPLETED]:    {id: 1,     className: "task-completed"},
        [FAILED]:       {id: 2,     className: "task-failed"},
        [TODO]:         {id: 3,     className: null}
    },
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
        case CHECK_ITEM:
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

function updateTodos({id}, todos) {
    return todos.map(todo => {
        if (todo.id === id) {
            const currentIndex = conditionsOrder.indexOf(todo.condition);
            const newIndex = currentIndex + 1 < conditionsOrder.length ? currentIndex + 1 : 0;
            todo.condition = conditionsOrder[newIndex];
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