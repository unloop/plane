
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

import {Service} from "../../../api";

import {
  SERVICE_SPEC_UPDATE_FAILURE,
  SERVICE_SPEC_UPDATE_REQUEST,
  SERVICE_SPEC_UPDATE_SUCCESS
} from "../../../constants";

const RequestAction = {
  type: SERVICE_SPEC_UPDATE_REQUEST
};

const SuccessAction = (payload) => ({
  type: SERVICE_SPEC_UPDATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: SERVICE_SPEC_UPDATE_FAILURE,
  payload
});

export default (app, service, spec, newSpec) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    Service.SpecUpdate(app.meta.name, service.meta.name, spec.meta.id, newSpec)
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response)
      })
      .catch(error => {
        dispatch(FailureAction({error}));
        reject(error);
      });
  });
};