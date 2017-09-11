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

class Template {

  static Create = (owner, name, data) => {
    let uri = [api_host, "repo", owner, name, "template"].join("/");
    return requestJSON("POST", uri, data);
  };

  static Fetch = (owner, name, id) => {
    let uri = [api_host, "repo", owner, name, "template", id].join("/");
    return requestJSON("GET", uri, null);
  };

  static List = (owner, name) => {
    let uri = [api_host, "repo", owner, name, "template"].join("/");
    return requestJSON("GET", uri, null);
  };

  static Update = (owner, name, id, data) => {
    let uri = [api_host, "repo", owner, name, "template", id].join("/");
    return requestJSON("PUT", uri, data);
  };

  static Remove = (owner, name, id) => {
    let uri = [api_host, "repo", owner, name, "template", id].join("/");
    return requestJSON("DELETE", uri, null);
  };

  static Default = (owner, name, id) => {
    let uri = [api_host, "repo", owner, name, "template", id, "default"].join("/");
    return requestJSON("PUT", uri, null);
  };

  static SpecCreate(owner, name, template, spec) {
    let uri = [api_host, "repo", owner, name, "template", template, "spec"].join("/");
    return requestJSON("GET", uri, spec);
  }

  static SpecUpdate(owner, name, template, id, spec) {
    let uri = [api_host, "repo", owner, name, "template", template, "spec", id].join("/");
    return requestJSON("PUT", uri, spec);
  }

  static SpecRemove(owner, name, template, id) {
    let uri = [api_host, "repo", owner, name, "template", template, "spec", id].join("/");
    return requestJSON("DELETE", uri, null);
  }

}

export default Template