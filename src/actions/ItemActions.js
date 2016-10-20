import { CHECK_ITEM } from '../constants/item';
import { createAction } from '../helpers/actions';

// export function changeItem(payload) {
//   console.log('changeItem::Item -> ', payload);
//   return {
//     type: CHECK_ITEM,
//     payload
//   }
//
// }

export const changeItem = createAction(CHECK_ITEM);