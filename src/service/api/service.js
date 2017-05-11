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

import {request, requestJSON} from "../../utils";

const api_host = process.env.REACT_APP_API_HOST;

export function get(namespace, id) {
  let uri = [api_host, "namespace", namespace, "service", id].join("/");
  return requestJSON("GET", uri, null);
}

export function list(namespace) {
  let uri = [api_host, "namespace", namespace, "service"].join("/");
  return requestJSON("GET", uri, null);
}

export function update(namespace, service, data) {
  let uri = [api_host, "namespace", namespace, "service", service].join("/");
  return requestJSON("PUT", uri, data);
}

export function remove(namespace, service) {
  let uri = [api_host, "namespace", namespace, "service", service].join("/");
  return requestJSON("DELETE", uri, null);
}

export function logs(namespace, service, pod, container) {
  let uri = [api_host, "namespace", namespace, "service", service, "logs"].join("/") + "?pod=" + pod + "&container=" + container;
  return request("GET", uri, null, null);
}

export default {get, list, update, remove, logs}