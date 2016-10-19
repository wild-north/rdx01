import { CHECK_ITEM } from '../constants/item'

export function changeItem(item) {

  return {
    type: CHECK_ITEM,
    payload: item
  }

}