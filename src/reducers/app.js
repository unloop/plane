//
// Last.Backend LLC CONFIDENTIAL
// __________________
//
// [2014] - [2017] Last.Backend LLC
// All Rights Reserved.
//
// NOTICE:  All information contained herein is, and remains
// the property of Last.Backend LLC and its suppliers,
// if any.  The intellectual and technical concepts contained
// herein are proprietary to Last.Backend LLC
// and its suppliers and may be covered by Russian Federation and Foreign Patents,
// patents in process, and are protected by trade secret or copyright law.
// Dissemination of this information or reproduction of this material
// is strictly forbidden unless prior written permission is obtained
// from Last.Backend LLC.
//

import {createReducer} from '../utils';
import {
  APP_FETCH_REQUEST, APP_FETCH_SUCCESS, APP_FETCH_FAILURE,
  APP_LIST_FETCH_REQUEST, APP_LIST_FETCH_SUCCESS, APP_LIST_FETCH_FAILURE,
  APP_CREATE_REQUEST, APP_CREATE_SUCCESS, APP_CREATE_FAILURE,
  APP_UPDATE_REQUEST, APP_UPDATE_SUCCESS, APP_UPDATE_FAILURE,
  APP_REMOVE_REQUEST, APP_REMOVE_SUCCESS, APP_REMOVE_FAILURE,
} from '../constants';

const initialState = {};

const convert = (payload) => {
  return {
    meta: payload.meta || {},
    services: {},
    networks: payload.networks || {},
    routes: payload.routes || {}
  }
};

export default createReducer(initialState, {
  [APP_LIST_FETCH_REQUEST]: (state) => {
   return state;
  },
  [APP_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = {};
    Object.keys(payload).forEach(function (key) {
      let item = payload[key];
      newState[item.meta.name] = convert(item);
    });

    return newState;
  },
  [APP_LIST_FETCH_FAILURE]: (state) => {
    return state;
  },
  [APP_FETCH_REQUEST]: (state) => {
    return state;
  },
  [APP_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState[payload.meta.name] = convert(payload);
    return newState;
  },
  [APP_FETCH_FAILURE]: (state) => {
    return state;
  },
  [APP_CREATE_REQUEST]: (state) => {
    return state;
  },
  [APP_CREATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState[payload.meta.name] = convert(payload);
    return newState;
  },
  [APP_CREATE_FAILURE]: (state) => {
    return state;
  },

  [APP_UPDATE_REQUEST]: (state) => {
    return state;
  },
  [APP_UPDATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState[payload.meta.name] = convert(payload);
    return newState;
  },
  [APP_UPDATE_FAILURE]: (state) => {
    return state;
  },

  [APP_REMOVE_REQUEST]: (state) => {
    return state;
  },
  [APP_REMOVE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    delete newState[payload.meta.name];
    return newState;
  },
  [APP_REMOVE_FAILURE]: (state) => {
    return state;
  }
});
