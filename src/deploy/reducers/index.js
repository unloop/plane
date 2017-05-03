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
  DOCKER_REPO_LIST_FETCH_FAILURE,
  DOCKER_REPO_LIST_FETCH_REQUEST,
  DOCKER_REPO_LIST_FETCH_SUCCESS,
  DOCKER_TAG_LIST_FETCH_FAILURE,
  DOCKER_TAG_LIST_FETCH_REQUEST,
  DOCKER_TAG_LIST_FETCH_SUCCESS,
  INTEGRATION_FETCH_FAILURE,
  INTEGRATION_FETCH_REQUEST,
  INTEGRATION_FETCH_SUCCESS,
  TEMPLATE_LIST_FETCH_FAILURE,
  TEMPLATE_LIST_FETCH_REQUEST,
  TEMPLATE_LIST_FETCH_SUCCESS,
  VCS_BRANCH_LIST_FETCH_FAILURE,
  VCS_BRANCH_LIST_FETCH_REQUEST,
  VCS_BRANCH_LIST_FETCH_SUCCESS,
  VCS_REPO_LIST_FETCH_FAILURE,
  VCS_REPO_LIST_FETCH_REQUEST,
  VCS_REPO_LIST_FETCH_SUCCESS
} from "../constants";

const integrationState = {
  list: {},
  action: {
    error: {}
  }
};

export const integration = createReducer(integrationState, {
  [INTEGRATION_FETCH_REQUEST]: (state) => {
    return state;
  },
  [INTEGRATION_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    Object.keys(payload).forEach(function (key) {
      newState.list[key] = payload[key];
    });

    return newState;
  },
  [INTEGRATION_FETCH_FAILURE]: (state) => {
    return state;
  },
});

const initialTemplateState = {
  list: {},
  action: {
    error: {}
  }
};

export const template = createReducer(initialTemplateState, {
  [TEMPLATE_LIST_FETCH_REQUEST]: (state) => {
    return state;
  },
  [TEMPLATE_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    Object.keys(payload).forEach(function (key) {
      newState.list[key] = payload[key];
      newState.list[key].tags = [];
    });

    return newState;
  },
  [TEMPLATE_LIST_FETCH_FAILURE]: (state) => {
    return state;
  },
});

const initialVCSState = {
  list: {},
  action: {
    error: {}
  }
};

export const vcs = createReducer(initialVCSState, {
  [VCS_REPO_LIST_FETCH_REQUEST]: (state) => {
    return state
  },
  [VCS_REPO_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    Object.keys(payload).forEach(function (key) {
      newState.list[payload[key].name] = {
        name: payload[key].name,
        description: payload[key].description,
        private: payload[key].private,
        default_branch: payload[key].default_branch,
        branches: [],
      };
    });

    return newState;
  },
  [VCS_REPO_LIST_FETCH_FAILURE]: (state) => {
    return state
  },
  [VCS_BRANCH_LIST_FETCH_REQUEST]: (state) => {
    return state
  },
  [VCS_BRANCH_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState.list[payload.repo].branches = payload.branches || [];
    return newState;
  },
  [VCS_BRANCH_LIST_FETCH_FAILURE]: (state) => {
    return state
  }
});

const initialRegistryState = {
  list: {},
  action: {
    error: {}
  }
};

export const registry = createReducer(initialRegistryState, {
  [DOCKER_REPO_LIST_FETCH_REQUEST]: (state) => {
    return state
  },
  [DOCKER_REPO_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    Object.keys(payload).forEach(function (key) {
      let id = (payload[key].owner === "library")
        ? payload[key].name
        : payload[key].owner + "/" + payload[key].name;

      newState.list[id] = payload[key];
    });

    return newState;
  },
  [DOCKER_REPO_LIST_FETCH_FAILURE]: (state) => {
    return state
  },
  [DOCKER_TAG_LIST_FETCH_REQUEST]: (state) => {
    return state
  },
  [DOCKER_TAG_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    let id = (payload.owner === "library")
      ? payload.name
      : payload.owner + "/" + payload.name;

    newState.list[id].tags = payload.tags || [];

    return newState;
  },
  [DOCKER_TAG_LIST_FETCH_FAILURE]: (state) => {
    return state
  }
});

