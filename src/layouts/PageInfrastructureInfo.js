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

class LayoutRegistry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="wrap">
            <div className="header">
              {this.props.header}
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  {this.props.main}
                </div>
                <div className="col-6">
                  {this.props.sidebar}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default LayoutRegistry;