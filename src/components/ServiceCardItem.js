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
import {Link} from "react-router";
import PropTypes from "prop-types";
import Timestamp from "react-timestamp";

import {ServiceChartReplicas} from "./"
import ServiceChartMemory from "./ServiceChartMemory";

const ServiceCardItem = ({app, service, scale}) => (

  <Link to={`/ns/${app.meta.name}/s/${service.meta.name}`} activeClassName="card-active">
    <div className="card mb-2">
      <div className="row m-0 pt-2">
        <div className="col-6">

          <div className="card-title text-capitalize">{service.meta.name}</div>
          <small className="card-description text-capitalize">
            {service.meta.description || "No description added yet"}
          </small>

        </div>
        <div className="col-6 p-2">
          <dt>DNS</dt>
          <dd>{service.meta.dns}</dd>
          <dt>Ports</dt>
          <dd>{service.meta.ports}</dd>
        </div>
      </div>
      {/* Active build for service */}
      <div className="row m-0">
        <div className="col-12 active-build p-2">
          <div className="pull-left mt-3 ml-2">
            <i className="fa fa-circle-thin" aria-hidden="true"/>
          </div>

          <div className="pull-left ml-3">
            <div>
              <small>lastbackend/lastbackend</small>
            </div>
            <div className="row">

              <div className="col-6">
                <small>build #22</small>
              </div>
              <div className="col-6">
                <small>tag: latest</small>
              </div>
            </div>
          </div>

          <div className="pull-left  ml-3">
            <small>build status: active</small>
            <small>started: 2 min ago</small>
          </div>

          <div className="pull-right m-auto pt-2">
            <button className="btn btn-sm btn-link">
              view logs
            </button>
          </div>
        </div>
      </div>
      {/* service stats */}
      <div className="row m-0 align-items-center">

        <div className="col-3">
          <ServiceChartReplicas state={service.state.replicas} submit={scale}/>
        </div>
        <div className="col-3">
          <ServiceChartMemory memory={service.state.resources.memory}/>
        </div>
        <div className="col-6">
          <div className="row">
            <div>
              <small className="text-uppercase">container: {service.containers.image || "demo-container"}</small>
            </div>
            <div className="ml-3">
              <small>
                <strong>Image</strong>: lastbackend/lastbackend
              </small>
              <br/>
              <small>
                <strong>Ports</strong>: 9022/TCP, 1231/TCP
              </small>
            </div>
          </div>
        </div>

      </div>
      <div className="row m-0 card-footer">
        <div className="col-12 text-right">
          <small className="text-muted">
            Updated: <Timestamp time={new Date(service.meta.updated || "")}/>
          </small>
        </div>
      </div>
    </div>
  </Link>
);

ServiceCardItem.propTypes = {
  app: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
  scale: PropTypes.func.isRequired
};

export default ServiceCardItem;