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

class Repo {

  static Create(data) {
    let uri = [api_host, "repo"].join("/");
    return requestJSON("POST", uri, data);
  }

  static Fetch(owner, name) {
    let uri = [api_host, "repo", owner, name].join("/");
    return requestJSON("GET", uri, null);
  }

  static List() {
    let uri = [api_host, "repo"].join("/");
    return requestJSON("GET", uri, null);
  }

  static Remove(owner, name) {
    let uri = [api_host, "repo", owner, name].join("/");
    return requestJSON("DELETE", uri, null);
  }

  static Update(owner, name, data) {
    let uri = [api_host, "repo", owner, name].join("/");
    return requestJSON("PUT", uri, data);
  }
}


export default Repo