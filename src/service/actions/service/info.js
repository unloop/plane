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

import * as api from "./../../api/service";
import {getError} from "../../../utils";
import {toastr} from "react-redux-toastr";
import {SERVICE_FETCH_FAILURE, SERVICE_FETCH_REQUEST, SERVICE_FETCH_SUCCESS} from "../../constants";
import {browserHistory} from "react-router";

export const RequestAction = {
  type: SERVICE_FETCH_REQUEST
};

export const SuccessAction = (payload) => ({
  type: SERVICE_FETCH_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: SERVICE_FETCH_FAILURE,
  payload
});

export const InfoActionCreators = (namespace, name) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.get(namespace, name)
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response);
      })
      .catch(error => {
        const header = "Service load!";
        let content = error.logs;

        switch (error.status) {
          case "Not Found":
            content = error.logs;
            browserHistory.push("/ns/" + namespace);
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