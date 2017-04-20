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
import {SERVICE_UPDATE_FAILURE, SERVICE_UPDATE_REQUEST, SERVICE_UPDATE_SUCCESS} from "../../constants";
import {browserHistory} from "react-router";

export const RequestAction = {
  type: SERVICE_UPDATE_REQUEST,
};

export const SuccessAction = (payload) => ({
  type: SERVICE_UPDATE_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: SERVICE_UPDATE_FAILURE,
  payload
});

export const UpdateActionCreators = (service, spec) => (dispatch) => {

  const header = "Service update!";

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.update(service.meta.namespace, service.meta.name, spec)
      .then(response => {
        dispatch(SuccessAction(response));
        toastr.success(header, "successfully!");
        if (!!spec.name && service.meta.name !== spec.name) {
          browserHistory.push("/ns/" + service.meta.namespace + "/s/" + spec.name + "/settings");
        }

        resolve(response)
      })
      .catch(error => {
        let content = error.message;

        switch (error.status) {
          case "Not Found":
            content = error.message;
            browserHistory.push("/ns/" + service.meta.namespace);
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

export default {RequestAction, SuccessAction, FailureAction, UpdateActionCreators}