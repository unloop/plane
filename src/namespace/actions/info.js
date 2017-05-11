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
import {NAMESPACE_FETCH_REQUEST, NAMESPACE_FETCH_SUCCESS, NAMESPACE_FETCH_FAILURE} from '../constants';
import {browserHistory} from 'react-router'


export const RequestAction = {
  type: NAMESPACE_FETCH_REQUEST,
};

export const SuccessAction = (payload) => ({
  type: NAMESPACE_FETCH_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: NAMESPACE_FETCH_FAILURE,
  payload
});

export const InfoActionCreators = (id) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.get(id)
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response);
      })
      .catch(error => {
        const header = "Namespace load!";
        let content = error.logs;

        switch (error.status) {
          case "Not Found":
            content = error.logs;
            browserHistory.push("/");
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

export default {RequestAction, SuccessAction, FailureAction, InfoActionCreators}