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

import {createReducer} from "../utils";
import {
  TEMPLATE_LIST_FETCH_FAILURE,
  TEMPLATE_LIST_FETCH_REQUEST,
  TEMPLATE_LIST_FETCH_SUCCESS,
} from "../constants";

const initialTemplateState = {
  list: {},
  action: {
    error: {}
  }
};

export const template = createReducer(initialTemplateState, {
  [TEMPLATE_LIST_FETCH_REQUEST]: (state) => {
    return state;
  },
  [TEMPLATE_LIST_FETCH_SUCCESS]: (state, payload) => {
    let newState = Object.assign({}, state);

    Object.keys(payload).forEach(function (key) {
      newState.list[key] = payload[key];
      newState.list[key].tags = [];
    });

    return newState;
  },
  [TEMPLATE_LIST_FETCH_FAILURE]: (state) => {
    return state;
  },
});