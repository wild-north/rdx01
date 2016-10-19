import {
  CHECK_ITEM
} from '../constants/item'

export function changeItem(year) {
  return (dispatch) => {
    dispatch({
      type: CHECK_ITEM,
      payload: year
    })

  }
}