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

import {toastr} from 'react-redux-toastr'
import {browserHistory} from 'react-router'
import {NAMESPACE_REMOVE_REQUEST, NAMESPACE_REMOVE_SUCCESS, NAMESPACE_REMOVE_FAILURE} from '../constants';

import * as api from '../api';
import {getError} from '../../utils';

export const RequestAction = {
  type: NAMESPACE_REMOVE_REQUEST
};

export const SuccessAction = (payload) => ({
  type: NAMESPACE_REMOVE_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: NAMESPACE_REMOVE_FAILURE,
  payload
});

export const RemoveActionCreators = (name) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.remove(name)
      .then(() => {
        dispatch(SuccessAction({meta:{name: name}}));
        browserHistory.push("/");
        resolve({meta:{name: name}})
      })
      .catch(error => {
        dispatch(FailureAction(error));
        const header = "Namespace remove!";
        let content = error.logs;

        switch (error.status) {
          case "Not Found":
            content = error.logs;
            browserHistory.push("/");
            break;
          case "Forbidden":
            content = getError('NAMESPACE_NOT_EMPTY');
            break;
          case "Unauthorized":
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

export default {RequestAction, SuccessAction, FailureAction, RemoveActionCreators}