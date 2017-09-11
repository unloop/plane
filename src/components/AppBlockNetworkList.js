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
import {AppBlockNetworkItem} from "./"

const AppBlockNetworkList = ({app}) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h5 className="pt-2 text-uppercase">
          Networks
        </h5>
      </div>
    </div>
    {(Object.keys(app.networks).length === 0)?
      <div className="row">
        <div className="col-12">
          No networks attached
        </div>
      </div>
      :
      <div className="row">
        {Object.keys(app.networks).map((id) =>
          <AppBlockNetworkItem network={app.networks[id]}/>
        )}
      </div>
    }
  </div>
);

AppBlockNetworkList.propTypes = {
  app: PropTypes.object.isRequired
};

export {AppBlockNetworkList};

export default AppBlockNetworkList;
