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
import {ServiceChartContainerMemory} from "./";

const ServiceBlockContainerItem = ({container}) => (
  <div>
    <div className="row">
      <span className="text-uppercase"> TEMPLATE:{container.meta.name}</span>
    </div>
    <div className="row align-items-center">
      <div className="col-3">
        <ServiceChartContainerMemory memory={container.memory}/>
      </div>
      <div className="col-9">
        <div className="row">
          <div className="col-8 text-truncate"><strong>Image</strong>: {container.image}</div>
          <div className="col-4 text-truncate"><strong>Build</strong>: {container.build || "-"}</div>
        </div>
        <div className="row">
          <div className="col-8 text-truncate"><strong>Pors</strong>: {container.image}</div>
          <div className="col-4 text-truncate"><strong>Tag</strong>: {container.image}</div>
        </div>
        <div className="row">
          <div className="col-8 text-truncate"><strong>Endpoint</strong>: {container.endpoint}</div>
          <div className="col-4 text-truncate"><strong>Autoscale</strong>: off</div>
        </div>
        <div className="row">
          <div className="col-8 text-truncate"><strong>CMD</strong>: {container.command}</div>
          <div className="col-4 text-truncate"><strong>Autoscale</strong>: on</div>
        </div>
      </div>
    </div>
  </div>
);

ServiceBlockContainerItem.propTypes = {
  container: PropTypes.object.isRequired
};

export {ServiceBlockContainerItem}

export default ServiceBlockContainerItem;
