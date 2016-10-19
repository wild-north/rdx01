import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from '../constants/item'

import _ from 'lodash';

export function getPhotos(year) {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: createArray(randomInt(0,15))
      })
    }, 1000)
  }
}

function randomInt (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function createArray(size) {
  return _.fill(new Array(size),randomInt(1,100));
}