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
import {IndexLink, Link} from "react-router";

import Paper from "material-ui/Paper";

import {CommonHeaderContainer} from "../../../common/containers";

const SettingsHeader = (props) => {
  return (
    <div className="container-fluid header">
      <Paper>
        <CommonHeaderContainer {...props} settings={true} />
        <div className="header-container">
          <div className="container-fluid">
            <div className="row">
            </div>
          </div>
          <div className="container header-tabs">
            <IndexLink activeClassName="tab-active" to={`/settings`}>
              Nodes
            </IndexLink>
            <Link activeClassName="tab-active" to={`/settings/integrations`}>
              Integrations
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default SettingsHeader;
