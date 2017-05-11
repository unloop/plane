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

import {requestJSON} from "../../utils";

const api_host = process.env.REACT_APP_API_HOST;

export function connect(vendor, token) {
  let uri = [api_host, "vendor", vendor, token].join("/");
  return requestJSON("POST", uri, null);
}

export function disconnect(vendor) {
  let uri = [api_host, "vendor", vendor].join("/");
  return requestJSON("DELETE", uri, null);
}

export function list() {
  let uri = [api_host, "vendor"].join("/");
  return requestJSON("GET", uri, null);
}

export default {connect, disconnect, list}