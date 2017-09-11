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

import Error from "./error";

const NameRegex = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/i;

class Validator {

  static NameField (name) {
    switch (true) {
      case !name.length:
        return Error.FIELD_CANNOT_BE_BLANK;
      case name.length < 4:
        return Error.NAME_TO_SHORT;
      case name.length > 64:
        return Error.NAME_TO_LONG;
      case !NameRegex.test(name):
        return Error.NAME_FORMAT_INVALID;
      default:
        return null
    }
  }

}

export default Validator