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

import {createReducer} from "../utils";
import {
  SERVICE_LIST_FETCH_FAILURE,
  SERVICE_LIST_FETCH_REQUEST,
  SERVICE_LIST_FETCH_SUCCESS,
  SERVICE_CREATE_FAILURE,
  SERVICE_CREATE_REQUEST,
  SERVICE_CREATE_SUCCESS,
  SERVICE_FETCH_FAILURE,
  SERVICE_FETCH_REQUEST,
  SERVICE_FETCH_SUCCESS,
  SERVICE_UPDATE_FAILURE,
  SERVICE_UPDATE_REQUEST,
  SERVICE_UPDATE_SUCCESS,
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
  SERVICE_SPEC_UPDATE_SUCCESS
} from "../constants";

const initialState = {};

function convert(payload) {
  let data = Object.assign({}, payload);
  let containers = {};

  data.pods && data.pods.forEach(function (pod) {
    pod.containers && pod.containers.forEach(function (container) {
      if (!containers[container.spec.meta.spec]) containers[container.spec.meta.spec] = [];
      container.pod = pod.meta.name;
      containers[container.spec.meta.spec].push(container);
    });
  });

  let spec = data.spec || {};
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
    pods: data.pods || {},
    state: data.state || {replicas: {}, resources: {}},
    containers: spec,
    routes: {},
    activity: {}
  };
}

export const service = createReducer(initialState, {

  // ****************************
  // SERVICE LIST REDUCER METHODS
  // ****************************

  [SERVICE_LIST_FETCH_REQUEST]: (state) => {
    return {};
  },
  [SERVICE_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    Object.keys(payload).forEach(function (key) {
      let item = payload[key];
      if (item.meta) {
        newState[item.meta.name] = convert(item);
      }
    });

    return newState;
  },
  [SERVICE_LIST_FETCH_FAILURE]: (state) => {
    return state;
  },

  // ****************************
  // SERVICE REDUCER METHODS
  // ****************************

  [SERVICE_FETCH_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    if (payload.meta) {
      newState[payload.meta.name] = convert(payload);
    }
    return newState;
  },
  [SERVICE_FETCH_FAILURE]: (state) => {
    return state;
  },
  [SERVICE_CREATE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_CREATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    if (payload.meta) {
      newState[payload.meta.name] = convert(payload);
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
      newState[payload.meta.name] = convert(payload);
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
      delete newState[payload.meta.name];
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
  [SERVICE_SPEC_CREATE_SUCCESS]: (state) => {
    return state;
  },
  [SERVICE_SPEC_CREATE_FAILURE]: (state) => {
    return state;
  },
  [SERVICE_SPEC_UPDATE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_SPEC_UPDATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    if (payload.meta) {
      newState[payload.meta.name] = convert(payload);
    }
    return newState;
  },
  [SERVICE_SPEC_UPDATE_FAILURE]: (state) => {
    return state;
  },
  [SERVICE_SPEC_REMOVE_REQUEST]: (state) => {
    return state;
  },
  [SERVICE_SPEC_REMOVE_SUCCESS]: (state) => {
    return state;
  },
  [SERVICE_SPEC_REMOVE_FAILURE]: (state) => {
    return state;
  }
});

export default service;