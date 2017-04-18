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

import * as api from '../api';
import {browserHistory} from 'react-router'
import {NAMESPACE_UPDATE_CLEAR, NAMESPACE_UPDATE_REQUEST, NAMESPACE_UPDATE_SUCCESS, NAMESPACE_UPDATE_FAILURE} from '../constants';

export const ClearAction = {
  type: NAMESPACE_UPDATE_CLEAR
};

export const RequestAction = {
  type: NAMESPACE_UPDATE_REQUEST
};

export const SuccessAction = (payload) => ({
  type: NAMESPACE_UPDATE_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: NAMESPACE_UPDATE_FAILURE,
  payload
});

export const UpdateActionCreators = (id, name, description) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.update(id, name, description)
      .then(response => {
        dispatch(SuccessAction(response));
        browserHistory.push("/ns/" + response.meta.name + "/settings");
        resolve(response);
      })
      .catch(error => {
        dispatch(FailureAction(error));
        reject(error);
      });
  });
};

export default {RequestAction, SuccessAction, FailureAction, UpdateActionCreators, ClearAction}