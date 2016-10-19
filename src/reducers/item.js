import {
  CHECK_ITEM
} from '../constants/item'

const initialState = {
  todos: [
    {id: 0, text: 'lorem',  isChecked: false},
    {id: 1, text: 'ipsum',  isChecked: false},
    {id: 2, text: 'dolor',  isChecked: true},
    {id: 3, text: 'sit',    isChecked: true},
    {id: 4, text: 'amet',   isChecked: false}
  ]
};

export default function page(state = initialState, action) {
  switch (action.type) {
    case CHECK_ITEM:
      return {...state, todos: action.payload};


    default:
      return state;
  }
}