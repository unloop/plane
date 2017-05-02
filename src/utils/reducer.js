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

import {combineReducers} from "redux";

import common from "../common/reducers";
import namespace from "../namespace/reducers";
import {node, vendor} from "../settings/reducers";
import service from "../service/reducers";
import build from "../build/reducers";
import volume from "../volume/reducers";
import {registry, template, integration} from "../deploy/reducers";
import activity from "../activity/reducers";
import {reducer as toastrReducer} from "react-redux-toastr";

function get() {
  let reducers = {};
  reducers["common"] = common;
  reducers["namespace"] = namespace;
  reducers["node"] = node;
  reducers["vendor"] = vendor;
  reducers["service"] = service;
  reducers["build"] = build;
  reducers["volume"] = volume;
  reducers["template"] = template;
  reducers["registry"] = registry;
  reducers["integration"] = integration;
  reducers["activity"] = activity;
  reducers["toastr"] = toastrReducer;
  return reducers;
}

const rootReducer = combineReducers(get());

export default rootReducer
