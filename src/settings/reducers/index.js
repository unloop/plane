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

import {createReducer} from "../../utils";
import {
  NODE_FETCH_FAILURE,
  NODE_FETCH_REQUEST,
  NODE_FETCH_SUCCESS,
  NODES_FETCH_FAILURE,
  NODES_FETCH_REQUEST,
  NODES_FETCH_SUCCESS,
  VENDORS_FETCH_FAILURE,
  VENDORS_FETCH_REQUEST,
  VENDORS_FETCH_SUCCESS,
  VENDOR_CONNECT_FETCH_FAILURE,
  VENDOR_CONNECT_FETCH_REQUEST,
  VENDOR_CONNECT_FETCH_SUCCESS,
  VENDOR_DISCONNECT_FETCH_FAILURE,
  VENDOR_DISCONNECT_FETCH_REQUEST,
  VENDOR_DISCONNECT_FETCH_SUCCESS
} from "../constants";

const initialNodeState = {
  list: {},
  action: {
    load: {
      pending: false,
      error: {}
    }
  }
};

function convert(payload) {
  return {
    meta: payload.meta || {},
    state: payload.state || {},
  };
}

export const node = createReducer(initialNodeState, {

  // ****************************
  // NODE REDUCER METHODS
  // ****************************

  [NODE_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState
  },
  [NODE_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";
    if (payload.meta) {
      newState.list[0] = convert(payload);
    }
    return newState;
  },
  [NODE_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState;
  },
  [NODES_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState;
  },
  [NODES_FETCH_SUCCESS]: (state, payload) => {
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
  [NODES_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState;
  }

});

const initialVendorState = {
  list: {},
  action: {
    load: {
      pending: false,
      error: {}
    }
  }
};

export const vendor = createReducer(initialVendorState, {

  // ****************************
  // VENDOR REDUCER METHODS
  // ****************************

  [VENDORS_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState;
  },
  [VENDORS_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";
    newState.list = payload;
    return newState;
  },
  [VENDORS_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState;
  },
  [VENDOR_CONNECT_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState;
  },
  [VENDOR_CONNECT_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";
    newState.list = payload;
    return newState;
  },
  [VENDOR_CONNECT_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState;
  },
  [VENDOR_DISCONNECT_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState;
  },
  [VENDOR_DISCONNECT_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";
    newState.list = payload;
    return newState;
  },
  [VENDOR_DISCONNECT_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState;
  }

});
