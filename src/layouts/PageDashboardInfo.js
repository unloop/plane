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
import {DashboardPartialInfo, DashboardPartialHelp, DashboardHeader} from "./";

class LayoutDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="row">
        <div className="col-8 mx-auto mt-5">
          <div className="sub-header">
            <DashboardHeader/>
          </div>
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-6 p-3 cursor-pointer" style={{backgroundColor: "#323D4C"}}>
                <DashboardPartialInfo/>
              </div>
              <div className="col-6 p-3 cursor-pointer" style={{backgroundColor: "#2E3A46"}}>
                <DashboardPartialHelp/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default LayoutDashboard;