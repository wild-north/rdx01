import { CHANGE_ITEM_STATUS, DELETE_ITEM } from '../constants/constants';
import { ADD_ITEM, CHANGE_TEXT } from '../constants/constants';
import { createAction } from '../helpers/actions';

export const changeItemStatus     = createAction(CHANGE_ITEM_STATUS);
export const changeContent        = createAction(CHANGE_TEXT);
export const addItem              = createAction(ADD_ITEM);
export const deleteItem           = createAction(DELETE_ITEM);