'use strict';

// export const createAction = type => payload => ({type, payload});

/**
 *  Function `createAction` doing this:
 *
 *  function createAction(type) {
 *      return function (payload) {
 *           return {type, payload}
 *       }
 *   }
 *
 */


export function createAction(type) {
    return function (payload) {
        console.log({type, payload});
        return {type, payload};
    }
}