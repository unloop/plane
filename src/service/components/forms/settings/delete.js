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

const ServiceDeleteForm = (props) => {

  function removeHandler(e) {
    e.stopPropagation();
    props.removeHandler(props.service);
  }

  return (
    <div className="row">

      <div className="col-md-4 col-xs-12">
        <h3>Delete service</h3>
        <desc>
          This action CANNOT be undone. This will permanently delete
          your namespace and delete all attached services
        </desc>
      </div>

      <div className="col-md-8 col-xs-12">
        <br/>
        <br/>
        <RaisedButton label="Delete" secondary={true} onClick={removeHandler}/>
      </div>
    </div>
  )
};

ServiceDeleteForm.propTypes = {
  service: React.PropTypes.object.isRequired,
  removeHandler: React.PropTypes.func.isRequired
};

export default ServiceDeleteForm;

