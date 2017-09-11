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
  REPO_CREATE_CLEAR,
  REPO_CREATE_FAILURE,
  REPO_CREATE_REQUEST,
  REPO_CREATE_SUCCESS,
  REPO_DEPLOY_TEMPLATE_CREATE_FAILURE,
  REPO_DEPLOY_TEMPLATE_CREATE_REQUEST,
  REPO_DEPLOY_TEMPLATE_CREATE_SUCCESS,
  REPO_DEPLOY_TEMPLATE_FETCH_FAILURE,
  REPO_DEPLOY_TEMPLATE_FETCH_REQUEST,
  REPO_DEPLOY_TEMPLATE_FETCH_SUCCESS,
  REPO_DEPLOY_TEMPLATE_LIST_FETCH_FAILURE,
  REPO_DEPLOY_TEMPLATE_LIST_FETCH_REQUEST,
  REPO_DEPLOY_TEMPLATE_LIST_FETCH_SUCCESS,
  REPO_DEPLOY_TEMPLATE_REMOVE_FAILURE,
  REPO_DEPLOY_TEMPLATE_REMOVE_REQUEST,
  REPO_DEPLOY_TEMPLATE_REMOVE_SUCCESS,
  REPO_DEPLOY_TEMPLATE_SET_DEFAULT_FAILURE,
  REPO_DEPLOY_TEMPLATE_SET_DEFAULT_REQUEST,
  REPO_DEPLOY_TEMPLATE_SET_DEFAULT_SUCCESS,
  REPO_DEPLOY_TEMPLATE_UPDATE_FAILURE,
  REPO_DEPLOY_TEMPLATE_UPDATE_REQUEST,
  REPO_DEPLOY_TEMPLATE_UPDATE_SUCCESS,
  REPO_FETCH_FAILURE,
  REPO_FETCH_REQUEST,
  REPO_FETCH_SUCCESS,
  REPO_LIST_FETCH_FAILURE,
  REPO_LIST_FETCH_REQUEST,
  REPO_LIST_FETCH_SUCCESS,
  REPO_REMOVE_FAILURE,
  REPO_REMOVE_REQUEST,
  REPO_REMOVE_SUCCESS
} from "../constants";

const initialRepoState = {};

const convert = (payload) => {
  return {
    meta: payload.meta || {},
    state: payload.state || {},
    stats: payload.stats || {},
    source: payload.source || {},
    config: payload.config || {},
    tags: payload.tags || [],
    readme: payload.readme || "",
    remote: payload.remote || ""
  }
};

export const repo = createReducer(initialRepoState, {
  [REPO_FETCH_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState[payload.meta.owner + ":" + payload.meta.name] = convert(payload);
    return newState;
  },
  [REPO_FETCH_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_LIST_FETCH_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = {};
    Object.keys(payload).forEach(function (key) {
      let item = payload[key];
      newState[item.meta.owner + ":" + item.meta.name] = convert(item);
    });
    return newState;
  },
  [REPO_LIST_FETCH_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_CREATE_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_CREATE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    newState[payload.meta.owner + ":" + payload.meta.name] = convert(payload);
    return newState;
  },
  [REPO_CREATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_CREATE_CLEAR]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_REMOVE_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_REMOVE_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);
    delete newState[payload.meta.name];
    return newState;
  },
  [REPO_REMOVE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_CREATE_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_CREATE_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_CREATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_FETCH_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_FETCH_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_FETCH_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_LIST_FETCH_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_LIST_FETCH_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_LIST_FETCH_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_UPDATE_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_UPDATE_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_UPDATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_REMOVE_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_REMOVE_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_REMOVE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_SET_DEFAULT_REQUEST]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_SET_DEFAULT_SUCCESS]: (state) => {
    return Object.assign({}, state);
  },
  [REPO_DEPLOY_TEMPLATE_SET_DEFAULT_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
});

export default repo;