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
  VCS_REPO_LIST_FETCH_REQUEST, VCS_REPO_LIST_FETCH_SUCCESS, VCS_REPO_LIST_FETCH_FAILURE,
  VCS_BRANCH_LIST_FETCH_REQUEST, VCS_BRANCH_LIST_FETCH_SUCCESS, VCS_BRANCH_LIST_FETCH_FAILURE
} from '../constants';

export const RequestReposAction = {
  type: VCS_REPO_LIST_FETCH_REQUEST
};

export const SuccessReposAction = (payload) => ({
  type: VCS_REPO_LIST_FETCH_SUCCESS,
  payload
});

export const FailureReposAction = (payload) => ({
  type: VCS_REPO_LIST_FETCH_FAILURE,
  payload
});

export const ReposActionCreators = (vendor) => (dispatch) => {

  dispatch(RequestReposAction);

  return new Promise((resolve, reject) => {
    api.vcs.repos(vendor)
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

export const RequestBranchAction = {
  type: VCS_BRANCH_LIST_FETCH_REQUEST
};

export const SuccessBranchAction = (payload) => ({
  type: VCS_BRANCH_LIST_FETCH_SUCCESS,
  payload
});

export const FailureBranchAction = (payload) => ({
  type: VCS_BRANCH_LIST_FETCH_FAILURE,
  payload
});

export const BranchesActionCreators = (vendor, repo) => (dispatch) => {

  dispatch(RequestBranchAction);

  return new Promise((resolve, reject) => {
    api.vcs.branches(vendor, repo)
      .then(response => {
        dispatch(SuccessBranchAction({repo: repo, branches: response}));
        resolve(response);
      })
      .catch(error => {
        dispatch(FailureBranchAction(error));
        reject(error);
      });
  });
};

export default {
  RequestReposAction, SuccessReposAction, FailureReposAction, ReposActionCreators,
  RequestBranchAction, SuccessBranchAction, FailureBranchAction, BranchesActionCreators
}