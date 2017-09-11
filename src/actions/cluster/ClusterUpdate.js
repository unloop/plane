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

import {Cluster} from '../../api';
import { browserHistory } from 'react-router'

import {
  CLUSTER_UPDATE_REQUEST,
  CLUSTER_UPDATE_SUCCESS,
  CLUSTER_UPDATE_FAILURE
} from '../../constants';

const RequestAction = {
  type: CLUSTER_UPDATE_REQUEST
};

const SuccessAction = (payload) => ({
  type: CLUSTER_UPDATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: CLUSTER_UPDATE_FAILURE,
  payload
});

export default (repo) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    return Cluster.Create(repo)
      .then(response => {
        dispatch(SuccessAction(response));
        browserHistory.push("/");
        return null;
      })
      .catch(error => {
        dispatch(FailureAction({error}));
        reject(error)
      })
  })
};