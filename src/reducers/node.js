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

import {createReducer, getError} from "../utils";
import {
  NODE_LIST_FETCH_FAILURE,
  NODE_LIST_FETCH_REQUEST,
  NODE_LIST_FETCH_SUCCESS,
  NODE_FETCH_FAILURE,
  NODE_FETCH_REQUEST,
  NODE_FETCH_SUCCESS,
  NODE_CREATE_FAILURE,
  NODE_CREATE_REQUEST,
  NODE_CREATE_SUCCESS,
  NODE_REMOVE_FAILURE,
  NODE_REMOVE_REQUEST,
  NODE_REMOVE_SUCCESS
} from "../constants";

const initialState = {
  list: {},
  action: {
    load: {
      pending: false,
      error: {}
    },
    create: {
      pending: false,
      error: {}
    },
    remove: {
      pending: false,
      error: {}
    }
  }
};

function convert(payload) {
  return {
    alive: payload.alive || false,
    meta: payload.meta || {},
    info: payload.info || {},
    state: payload.state || {
      capacity: {},
      allocated: {}
    }
  };
}

export default createReducer(initialState, {

  // ****************************
  // NODE REDUCER METHODS
  // ****************************

  [NODE_LIST_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState;
  },
  [NODE_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";

    Object.keys(payload).forEach(function (key) {
      let item = payload[key];
      if (item.meta) {
        newState.list[key] = convert(item);
      }
    });

    return newState;
  },
  [NODE_LIST_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState;
  },
  [NODE_CREATE_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.create.pending = true;
    return newState
  },
  [NODE_FETCH_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [NODE_FETCH_SUCCESS]: (state, payload) => {
    return Object.assign({}, state);
  },
  [NODE_FETCH_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [NODE_CREATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.action.create.pending = false;
    newState.list[payload.meta.id] = convert(payload);
    return newState;
  },
  [NODE_CREATE_FAILURE]: (state, payload) => {
    let error = {};
    Object.keys(payload).map(function (key) {
      let code = payload[key];
      error[key] = getError(code);
      return error;
    });

    let newState = Object.assign({}, state);
    newState.action.create.pending = false;
    newState.action.create.error = error;

    return newState
  },
  [NODE_REMOVE_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.remove.pending = true;
    return newState
  },
  [NODE_REMOVE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.action.remove.pending = false;
    delete newState.list[payload.meta.id];
    return newState;
  },
  [NODE_REMOVE_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.remove.pending = false;
    return newState
  }

});