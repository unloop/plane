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



import { App } from '../../api';
import {browserHistory} from 'react-router'

import {
  APP_REMOVE_REQUEST,
  APP_REMOVE_SUCCESS,
  APP_REMOVE_FAILURE
} from '../../constants';

const RequestAction = {
  type: APP_REMOVE_REQUEST
};

const SuccessAction = (payload) => ({
  type: APP_REMOVE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: APP_REMOVE_FAILURE,
  payload
});

export default (name) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    App.Remove(name)
      .then(() => {
        dispatch(SuccessAction({meta:{name: name}}));
        browserHistory.push("/");
        resolve({meta:{name: name}})
      })
      .catch(error => {
        dispatch(FailureAction({error}));
        reject(error);
      });
  });
};