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
import {getError} from '../../utils';
import {toastr} from 'react-redux-toastr'
import {NAMESPACE_CREATE_CLEAR, NAMESPACE_CREATE_REQUEST, NAMESPACE_CREATE_SUCCESS, NAMESPACE_CREATE_FAILURE} from '../constants';
import {browserHistory} from 'react-router'

export const ClearAction = {
  type: NAMESPACE_CREATE_CLEAR
};

export const RequestAction = {
  type: NAMESPACE_CREATE_REQUEST
};

export const SuccessAction = (payload) => ({
  type: NAMESPACE_CREATE_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: NAMESPACE_CREATE_FAILURE,
  payload
});

export const CreateActionCreators = (name, description) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.create(name, description)
      .then(response => {
        dispatch(SuccessAction(response));
        browserHistory.push("/ns/" + response.meta.name);
        resolve(response);
      })
      .catch(error => {

        const header = "Namespace create failed!";
        let content = error.message;

        switch (error.status) {
          case "Unauthorized":
            content = getError('UNAUTHORIZED');
            break;
          case "Bad Parameter":
          case "Not Unique":
            content = error.message;
            break;
          case "Incorrect json":
            content = getError('INVALID_INCOMING_JSON');
            break;
          case "Unknown":
          case "Internal Server Error":
            content = getError('INTERNAL_SERVER_ERROR');
            break;
          default:
            content = getError('INTERNAL_SERVER_ERROR');
        }

        toastr.error(header, content);

        dispatch(FailureAction({}));
        reject(error);
      });
  });
};

export default {ClearAction, RequestAction, SuccessAction, FailureAction, CreateActionCreators}