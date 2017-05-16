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
  SERVICE_CREATE_FAILURE,
  SERVICE_CREATE_REQUEST,
  SERVICE_CREATE_SUCCESS,
  SERVICE_FETCH_FAILURE,
  SERVICE_FETCH_REQUEST,
  SERVICE_FETCH_SUCCESS,
  SERVICE_REMOVE_FAILURE,
  SERVICE_REMOVE_REQUEST,
  SERVICE_REMOVE_SUCCESS,
  SERVICE_SPEC_CREATE_FAILURE,
  SERVICE_SPEC_CREATE_REQUEST,
  SERVICE_SPEC_CREATE_SUCCESS,
  SERVICE_SPEC_REMOVE_FAILURE,
  SERVICE_SPEC_REMOVE_REQUEST,
  SERVICE_SPEC_REMOVE_SUCCESS,
  SERVICE_SPEC_UPDATE_FAILURE,
  SERVICE_SPEC_UPDATE_REQUEST,
  SERVICE_SPEC_UPDATE_SUCCESS,
  SERVICE_UPDATE_FAILURE,
  SERVICE_UPDATE_REQUEST,
  SERVICE_UPDATE_SUCCESS,
  SERVICES_FETCH_FAILURE,
  SERVICES_FETCH_REQUEST,
  SERVICES_FETCH_SUCCESS
} from "../constants";

const initialState = {
  list: {},
  action: {
    load: {
      pending: false,
      error: {}
    }
  }
};

function convert(payload) {
  let data = Object.assign({}, payload);
  let containers = {};

  data.pods && data.pods.forEach(function (pod) {
    pod.containers && pod.containers.forEach(function (container) {
      if (!containers[container.spec]) containers[container.spec] = [];
      container.pod = pod.meta.name;
      containers[container.spec].push(container);
    });
  });

  let spec = data.spec || [];
  for (let key in spec) {
    spec[key].containers = {
      old: containers[spec[key].meta.parent] || [],
      new: containers[spec[key].meta.id] || []
    };
    spec[key].ready = (spec[key].containers.old.length === 0);
  }

  return {
    meta: data.meta,
    dns: data.dns || {},
    sources: data.sources || {},
    pods: data.pods || [],
    state: data.state || {replicas: {}, resources: {}},
    spec: spec
  };
}

export default createReducer(initialState, {

  // ****************************
  // SERVICE REDUCER METHODS
  // ****************************

  [SERVICE_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState
  },
  [SERVICE_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";
    if (payload.meta) {
      newState.list[payload.meta.name] = convert(payload);
    }
    return newState;
  },
  [SERVICE_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState;
  },
  [SERVICES_FETCH_REQUEST]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = true;
    return newState;
  },
  [SERVICES_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    newState.list = {};
    newState.action.load.pending = false;
    newState.action.load.error = "";

    Object.keys(payload).forEach(function (key) {
      let item = payload[key];
      if (item.meta) {
        newState.list[item.meta.name] = convert(item);
      }
    });

    newState.selected = newState.list[Object.getOwnPropertyNames(newState.list)[0]] || {};

    return newState;
  },
  [SERVICES_FETCH_FAILURE]: (state) => {
    let newState = Object.assign({}, state);
    newState.action.load.pending = false;
    return newState;
  },
  [SERVICE_CREATE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_CREATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    if (payload.meta) {
      newState.list[payload.meta.name] = convert(payload);
    }
    return newState;
  },
  [SERVICE_CREATE_FAILURE]: (state) => {
    return state;
  },
  [SERVICE_UPDATE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_UPDATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    if (payload.meta) {
      newState.list[payload.meta.name] = convert(payload);
    }
    return newState;
  },
  [SERVICE_UPDATE_FAILURE]: (state) => {
    return state;
  },
  [SERVICE_REMOVE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_REMOVE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    if (payload.meta) {
      delete newState.list[payload.meta.name];
    }
    return newState;
  },
  [SERVICE_REMOVE_FAILURE]: (state) => {
    return state;
  },

  // ****************************
  // SERVICE SPEC REDUCER METHODS
  // ****************************

  [SERVICE_SPEC_CREATE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_SPEC_CREATE_SUCCESS]: (state, payload) => {
    return state;
  },
  [SERVICE_SPEC_CREATE_FAILURE]: (state) => {
    return state;
  },
  [SERVICE_SPEC_UPDATE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_SPEC_UPDATE_SUCCESS]: (state, payload) => {
    return state;
  },
  [SERVICE_SPEC_UPDATE_FAILURE]: (state) => {
    return state;
  },
  [SERVICE_SPEC_REMOVE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_SPEC_REMOVE_SUCCESS]: (state, payload) => {
    return state;
  },
  [SERVICE_SPEC_REMOVE_FAILURE]: (state) => {
    return state;
  }
});
