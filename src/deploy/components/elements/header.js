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
import Paper from "material-ui/Paper";

import {CommonHeaderContainer} from "../../../common/containers";
import {DeployCreateForm} from "../../components";


const DeployHeaderHeader = (props) => {
  return (
    <div className="container-fluid header">
      <Paper>
        <CommonHeaderContainer {...props} />
        <div className="header-container text-center">
          <div className="header-deploy-title">
            <h1>Deploy all what you need</h1>
          </div>
          <div className="header-deploy-description">
            You can deploy services and apps from different types of sources
          </div>
          <DeployCreateForm {...props} />
        </div>
      </Paper>
    </div>
  );
};

DeployHeaderHeader.propTypes = {};

export default DeployHeaderHeader