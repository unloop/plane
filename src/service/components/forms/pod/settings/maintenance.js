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
import PropTypes from 'prop-types';
import Toggle from "material-ui/Toggle";

class ServiceMaintenanceForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <h3>Maintenance mode</h3>
          <desc>Turn your service into maintenance mode</desc>
        </div>
        <div className="col-md-8 col-xs-12">
          <br />
          <br />
          <Toggle label="Maintenance mode" labelPosition="right" defaultToggled={false} />
        </div>
      </div>
    );

  }
}

ServiceMaintenanceForm.propTypes = {
  namespace: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
  updateHandler: PropTypes.func.isRequired
};

export default ServiceMaintenanceForm;

