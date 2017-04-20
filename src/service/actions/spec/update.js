
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

import * as api from "./../../api/spec";
import {getError} from "../../../utils";
import {toastr} from "react-redux-toastr";
import {SERVICE_SPEC_UPDATE_FAILURE, SERVICE_SPEC_UPDATE_REQUEST, SERVICE_SPEC_UPDATE_SUCCESS} from "../../constants";

export const RequestAction = {
  type: SERVICE_SPEC_UPDATE_REQUEST
};

export const SuccessAction = (payload) => ({
  type: SERVICE_SPEC_UPDATE_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: SERVICE_SPEC_UPDATE_FAILURE,
  payload
});

export const UpdateActionCreators = (service, spec, newSpec) => (dispatch) => {

  const header = "Service spec update!";

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.update(service.meta.namespace, service.meta.name, spec.meta.id, newSpec)
      .then(() => {
        dispatch(SuccessAction(service));
        toastr.success(header, "successfully!");
        resolve(service)
      })
      .catch(error => {

        let content = error.message;

        switch (error.status) {
          case "Not Found":
            content = error.message;
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