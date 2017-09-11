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

class App {

  static Create(name, desc) {
    let uri = [api_host, "app"].join("/");
    let body = {name: name, description: desc};
    return requestJSON("POST", uri, body);
  }

  static Fetch(name) {
    let uri = [api_host, "app", name].join("/");
    return requestJSON("GET", uri, null);
  }

  static List() {
    let uri = [api_host, "app"].join("/");
    return requestJSON("GET", uri, null);
  }

  static Update(name, newName, desc) {
    let uri = [api_host, "app", name].join("/");
    let body = {name: newName, description: desc};
    return requestJSON("PUT", uri, body);
  }

  static Remove(name) {
    let uri = [api_host, "app", name].join("/");
    return requestJSON("DELETE", uri, null);
  }
}


export default App