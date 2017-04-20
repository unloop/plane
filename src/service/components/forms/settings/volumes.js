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
import RaisedButton from "material-ui/RaisedButton";

const ServiceVolumesForm = (props) => (
  <div className="row">

    <div className="col-md-4 col-xs-12">
      <h3>Volumes</h3>
      <desc>
        You can attach to service volume to storing persistend data
      </desc>
    </div>

    <div className="col-md-8 col-xs-12">
      <br/>
      <br/>
      <RaisedButton disabled={true} label="ATTACH VOLUME" primary={true}/>
    </div>

  </div>
);

ServiceVolumesForm.propTypes = {
  namespace: React.PropTypes.object.isRequired,
  service: React.PropTypes.object.isRequired,
  updateHandler: React.PropTypes.func.isRequired
};

export default ServiceVolumesForm;

