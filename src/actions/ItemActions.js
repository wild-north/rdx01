import {CHECK_ITEM, DELETE_ITEM} from '../constants/item';
import {ADD_ITEM, CHANGE_TEXT} from '../constants/edit';
import {createAction} from '../helpers/actions';

export const changeItem = createAction(CHECK_ITEM);

export const changeContent = createAction(CHANGE_TEXT);
export const addItem = createAction(ADD_ITEM);
export const deleteItem = createAction(DELETE_ITEM);