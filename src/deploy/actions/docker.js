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

import api from '../api';
import {
  DOCKER_REPO_LIST_FETCH_REQUEST, DOCKER_REPO_LIST_FETCH_SUCCESS, DOCKER_REPO_LIST_FETCH_FAILURE,
  DOCKER_TAG_LIST_FETCH_REQUEST, DOCKER_TAG_LIST_FETCH_SUCCESS, DOCKER_TAG_LIST_FETCH_FAILURE
} from '../constants';

export const RequestReposAction = {
  type: DOCKER_REPO_LIST_FETCH_REQUEST
};

export const SuccessReposAction = (payload) => ({
  type: DOCKER_REPO_LIST_FETCH_SUCCESS,
  payload
});

export const FailureReposAction = (payload) => ({
  type: DOCKER_REPO_LIST_FETCH_FAILURE,
  payload
});

export const ReposActionCreators = (name) => (dispatch) => {

  dispatch(RequestReposAction);

  return new Promise((resolve, reject) => {
    api.docker.repos(name)
      .then(response => {
        dispatch(SuccessReposAction(response));
        resolve(response);
      })
      .catch(error => {
        dispatch(FailureReposAction(error));
        reject(error);
      });
  });
};

export const RequestTagsAction = {
  type: DOCKER_TAG_LIST_FETCH_REQUEST
};

export const SuccessTagsAction = (payload) => ({
  type: DOCKER_TAG_LIST_FETCH_SUCCESS,
  payload
});

export const FailureTagsAction = (payload) => ({
  type: DOCKER_TAG_LIST_FETCH_FAILURE,
  payload
});

export const TagsActionCreators = (owner, name) => (dispatch) => {

  dispatch(RequestTagsAction);

  return new Promise((resolve, reject) => {
    api.docker.tags(owner, name)
      .then(response => {
        dispatch(SuccessTagsAction(response));
        resolve(response);
      })
      .catch(error => {
        dispatch(FailureTagsAction(error));
        reject(error);
      });
  });
};

export default {
  RequestReposAction, SuccessReposAction, FailureReposAction, ReposActionCreators,
  RequestTagsAction, SuccessTagsAction, FailureTagsAction, TagsActionCreators
}