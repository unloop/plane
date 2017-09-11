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

import React from "react";
import PropTypes from "prop-types";
import {AppBlockRouteItem} from "./";

const AppBlockRouteList= ({app}) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h5 className="pt-2 text-uppercase">
          Routes
        </h5>
      </div>
    </div>

    {(Object.keys(app.routes).length === 0)?
      <div className="row">
        <div className="col-12">
          No routes attached
        </div>
      </div>
      :
      <div className="row">
        {Object.keys(app.routes).map((id) =>
          <AppBlockRouteItem route={app.routes[id]}/>
        )}
      </div>
    }
  </div>
);

AppBlockRouteList.propTypes = {
  app: PropTypes.object.isRequired
};

export {AppBlockRouteList};

export default AppBlockRouteList;
