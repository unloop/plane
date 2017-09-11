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
import {ServiceBlockRouteItem} from "./";

const ServiceBlockRouteList = ({routes}) => (
  <div>
    <div className="row">
      <div className="col-12 pt-2 px-3 mt-2">
        <div className="h5 pull-left pt-2">
          <span className="partial-header text-uppercase">Routes</span>
        </div>
      </div>
    </div>

    {(Object.keys(routes).length === 0)?
      <div className="row">
        <div className="col-12">
          No routes attached
        </div>
      </div>
      :
      <div className="row">
        {Object.keys(routes).map((id) =>
          <ServiceBlockRouteItem key={id} route={routes[id]}/>
        )}
      </div>
    }
  </div>
);

ServiceBlockRouteList.propTypes = {
  routes: PropTypes.object.isRequired
};

export {ServiceBlockRouteList};

export default ServiceBlockRouteList;
