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

const ServiceBlockSources = ({sources}) => (
  <div>
    <div className="row">
      <div className="col-12 py-2 px-3 my-2">
        <div className="h5 pull-left pt-2">
          <span className="partial-header text-uppercase">sources</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <h4>Memory usage</h4>
        <p>128 / 512 MB</p>
        <small>default personal cluster</small>
      </div>
      <div className="col-6">
        <h4>Memory usage</h4>
        <p>128 / 512 MB</p>
        <small>default personal cluster</small>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <h4>Memory usage</h4>
        <p>128 / 512 MB</p>
        <small>default personal cluster</small>
      </div>
      <div className="col-6">
        <h4>Memory usage</h4>
        <p>128 / 512 MB</p>
        <small>default personal cluster</small>
      </div>
    </div>
  </div>
);

ServiceBlockSources.propTypes = {
  sources: PropTypes.object.isRequired
};

export {ServiceBlockSources}

export default ServiceBlockSources;
