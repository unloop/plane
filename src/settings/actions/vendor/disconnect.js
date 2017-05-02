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

import * as api from "./../../api/vendor";
import {VENDOR_DISCONNECT_FETCH_REQUEST, VENDOR_DISCONNECT_FETCH_SUCCESS, VENDOR_DISCONNECT_FETCH_FAILURE} from '../../constants';

export const RequestAction = {
  type: VENDOR_DISCONNECT_FETCH_REQUEST
};

export const SuccessAction = (payload) => ({
  type: VENDOR_DISCONNECT_FETCH_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: VENDOR_DISCONNECT_FETCH_FAILURE,
  payload
});

export const DisconnectActionCreators = (vendor) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.disconnect(vendor)
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response);
      })
      .catch(error => {
        dispatch(FailureAction(error));
        reject(error);
      });
  });
};

export default {RequestAction, SuccessAction, FailureAction, DisconnectActionCreators}