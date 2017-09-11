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

import {requestJSON} from "../utils";

const api_host = process.env.REACT_APP_API_HOST;

class Service {

  static Create(app, data) {
    let uri = [api_host, "app", app, "service"].join("/");
    return requestJSON("POST", uri, data);
  }

  static Fetch(app, id) {
    let uri = [api_host, "app", app, "service", id].join("/");
    return requestJSON("GET", uri, null);
  }

  static List(app) {
    let uri = [api_host, "app", app, "service"].join("/");
    return requestJSON("GET", uri, null);
  }

  static Update(app, service, data) {
    let uri = [api_host, "app", app, "service", service].join("/");
    return requestJSON("PUT", uri, data);
  }

  static Remove(app, service) {
    let uri = [api_host, "app", app, "service", service].join("/");
    return requestJSON("DELETE", uri, null);
  }

  static Logs(pod, container) {
    // URI:  /pod/{pod}/containers/{container}/logs
    const wss_host = process.env.REACT_APP_WSS_HOST;
    return [wss_host, "pod", pod, "container", container, "logs"].join("/");
  }

  static SpecCreate(app, service, spec) {
    let uri = [api_host, "app", app, "service", service, "spec"].join("/");
    return requestJSON("GET", uri, spec);
  }

  static SpecUpdate(app, service, id, spec) {
    let uri = [api_host, "app", app, "service", service, "spec", id].join("/");
    return requestJSON("PUT", uri, spec);
  }

  static SpecRemove(app, service, id) {
    let uri = [api_host, "app", app, "service", service, "spec", id].join("/");
    return requestJSON("DELETE", uri, null);
  }

}


export default Service
