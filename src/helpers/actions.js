'use strict';

export const createAction = type => {
  console.log('~~~~~type~~~~~~~', type);
  return payload => {
    console.log('~~~~~payload~~~~~~~', payload);
    return ({ type, payload });
  };
}



/*
var createAction = function createAction(type) {
  return function (payload) {
    return { type: type, payload: payload };
  };
};
 */
