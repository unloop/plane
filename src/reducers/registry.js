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
  REGISTRY_REPO_LIST_FETCH_FAILURE,
  REGISTRY_REPO_LIST_FETCH_REQUEST,
  REGISTRY_REPO_LIST_FETCH_SUCCESS,
  REGISTRY_TAG_LIST_FETCH_FAILURE,
  REGISTRY_TAG_LIST_FETCH_REQUEST,
  REGISTRY_TAG_LIST_FETCH_SUCCESS,
} from "../constants";


const initialRegistryState = {
  list: {},
  action: {
    error: {}
  }
};

export const registry = createReducer(initialRegistryState, {
  [REGISTRY_REPO_LIST_FETCH_REQUEST]: (state) => {
    return state
  },
  [REGISTRY_REPO_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    Object.keys(payload).forEach(function (key) {
      let id = (payload[key].owner === "library")
        ? payload[key].name
        : payload[key].owner + "/" + payload[key].name;

      newState.list[id] = payload[key];
    });

    return newState;
  },
  [REGISTRY_REPO_LIST_FETCH_FAILURE]: (state) => {
    return state
  },
  [REGISTRY_TAG_LIST_FETCH_REQUEST]: (state) => {
    return state
  },
  [REGISTRY_TAG_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    let id = (payload.owner === "library")
      ? payload.name
      : payload.owner + "/" + payload.name;

    newState.list[id].tags = payload.tags || [];

    return newState;
  },
  [REGISTRY_TAG_LIST_FETCH_FAILURE]: (state) => {
    return state
  }
});