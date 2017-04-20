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

import {request} from "../../utils";

const api_host = process.env.REACT_APP_API_HOST;

export function create(namespace, service, spec) {
  let uri = [api_host, "namespace", namespace, "service", service, "spec"].join("/");
  return request("GET", uri, spec, true);
}

export function update(namespace, service, id, spec) {
  let uri = [api_host, "namespace", namespace, "service", service, "spec", id].join("/");
  return request("PUT", uri, spec, true);
}

export function remove(namespace, service, id) {
  let uri = [api_host, "namespace", namespace, "service", service, "spec", id].join("/");
  return request("DELETE", uri, null, true);
}

export default {create, update, remove}