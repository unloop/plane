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
import {SERVICE_REMOVE_REQUEST, SERVICE_REMOVE_SUCCESS, SERVICE_REMOVE_FAILURE} from '../constants';

export const RequestAction = {
  type: SERVICE_REMOVE_REQUEST
};

export const SuccessAction = (payload) => ({
  type: SERVICE_REMOVE_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: SERVICE_REMOVE_FAILURE,
  payload
});

export const RemoveActionCreators = (namespace, id) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.remove(namespace, id)
      .then(() => {
        dispatch(SuccessAction({id: id}));
        browserHistory.push("/ns/" + id);
        resolve({id: id})
      })
      .catch(error => {
        dispatch(FailureAction(error));
        reject(error);
      });
  });
};

export default {RequestAction, SuccessAction, FailureAction, RemoveActionCreators}