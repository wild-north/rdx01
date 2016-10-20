import { CHECK_ITEM } from '../constants/item';
import { ADD_ITEM } from '../constants/edit';
import { createAction } from '../helpers/actions';

export const changeItem = createAction(CHECK_ITEM);
export const addItem = createAction(ADD_ITEM);