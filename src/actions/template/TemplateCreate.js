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

import {Template} from "../../api";

import {
  REPO_DEPLOY_TEMPLATE_CREATE_REQUEST,
  REPO_DEPLOY_TEMPLATE_CREATE_SUCCESS,
  REPO_DEPLOY_TEMPLATE_CREATE_FAILURE
} from "../../constants";

const RequestAction = {
  type: REPO_DEPLOY_TEMPLATE_CREATE_REQUEST
};

const SuccessAction = (payload) => ({
  type: REPO_DEPLOY_TEMPLATE_CREATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: REPO_DEPLOY_TEMPLATE_CREATE_FAILURE,
  payload
});

export default (repo, data) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    Template.Create(repo.meta.owner, repo.meta.name, data)
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response);
      })
      .catch(error => {
        dispatch(FailureAction({error}));
        reject(error);
      });
  });
};