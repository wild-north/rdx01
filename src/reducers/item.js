import {
  CHECK_ITEM
} from '../constants/item'

const initialState = {
  test: 'test',
  todos: [
    {id: 0, text: 'lorem',  isChecked: false},
    {id: 1, text: 'ipsum',  isChecked: false},
    {id: 2, text: 'dolor',  isChecked: true},
    {id: 3, text: 'sit',    isChecked: true},
    {id: 4, text: 'amet',   isChecked: false}
  ]
};

export default function item(state = initialState, action) {
  // console.log('action ->', action);
  // console.log('state ->', state);
  switch (action.type) {
    case CHECK_ITEM:
      // return {...state, todos: action.payload};
      let newState = Object.assign({}, state, { todos: updateTodos(action.payload, state.todos) } );
      console.log(newState);
      return newState;

    default:
      return state;
  }
}

function updateTodos({ todoId }, todos) {
  return todos.map(todo => {
    if (todo.id === todoId) {
      todo.isChecked = !todo.isChecked
    }
    return todo;
  });
}