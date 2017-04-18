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

import {createReducer, getError} from '../../utils';
import {
  NAMESPACE_FETCH_REQUEST, NAMESPACE_FETCH_SUCCESS, NAMESPACE_FETCH_FAILURE,
  NAMESPACE_LIST_FETCH_REQUEST, NAMESPACE_LIST_FETCH_SUCCESS, NAMESPACE_LIST_FETCH_FAILURE,
  NAMESPACE_CREATE_REQUEST, NAMESPACE_CREATE_SUCCESS, NAMESPACE_CREATE_FAILURE, NAMESPACE_CREATE_CLEAR,
  NAMESPACE_UPDATE_REQUEST, NAMESPACE_UPDATE_SUCCESS, NAMESPACE_UPDATE_FAILURE,
  NAMESPACE_REMOVE_REQUEST, NAMESPACE_REMOVE_SUCCESS, NAMESPACE_REMOVE_FAILURE, NAMESPACE_UPDATE_CLEAR
} from '../constants';

const initialState = {
  list: {},
  action: {
    load: {
      pending: false,
      error: ""
    },
    create: {
      pending: false,
      error: {
        name: "",
        description: ""
      }
    },
    update: {
      pending: false,
      error: {
        name: "",
        description: ""
      }
    },
    remove: {
      pending: false
    }
  }
};

const convert = (payload) => {
  return {
    id: payload.meta.name,
    meta: payload.meta || {},
    cost: payload.cost || 0
  }
};

export default createReducer(initialState, {
  [NAMESPACE_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState
  },
  [NAMESPACE_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";

    newState.list[payload.meta.name] = convert(payload);
    return newState;
  },
  [NAMESPACE_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState
  },
  [NAMESPACE_LIST_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState
  },
  [NAMESPACE_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";

    Object.keys(payload).forEach(function (key) {
      let item = payload[key];
      newState.list[item.meta.name] = convert(item);
    });

    return newState;
  },
  [NAMESPACE_LIST_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState
  },
  [NAMESPACE_CREATE_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.create.pending = true;
    newState.action.create.error.name = "";
    newState.action.create.error.description = "";
    return newState
  },
  [NAMESPACE_CREATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.action.create.pending = false;
    newState.action.create.error.name = "";
    newState.action.create.error.description = "";

    newState.list[payload.meta.name] = convert(payload);

    return newState;
  },
  [NAMESPACE_CREATE_FAILURE]: (state, payload) => {
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
  [NAMESPACE_CREATE_CLEAR]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.create.pending = false;
    newState.action.create.error.name = "";
    newState.action.create.error.description = "";
    return newState
  },
  [NAMESPACE_UPDATE_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.update.pending = true;
    newState.action.update.error.name = "";
    newState.action.update.error.description = "";
    return newState
  },
  [NAMESPACE_UPDATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.action.update.pending = false;
    newState.action.update.error.name = "";
    newState.action.update.error.description = "";
    newState.list[payload.meta.name] = convert(payload);

    return newState;
  },
  [NAMESPACE_UPDATE_FAILURE]: (state, payload) => {
    let error = {};

    Object.keys(payload).map(function (key) {
      let code = payload[key];
      error[key] = getError(code);
      return error;
    });

    let newState = Object.assign({}, state);
    newState.action.update.pending = false;
    newState.action.update.error = error;
    return newState
  },
  [NAMESPACE_UPDATE_CLEAR]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.update.pending = false;
    newState.action.update.error.name = "";
    newState.action.update.error.description = "";
    return newState
  },
  [NAMESPACE_REMOVE_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.remove.pending = true;
    return newState
  },
  [NAMESPACE_REMOVE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.action.remove.pending = false;
    delete newState.list[payload.meta.name];
    return newState;
  },
  [NAMESPACE_REMOVE_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.remove.pending = false;
    return newState
  }
});
