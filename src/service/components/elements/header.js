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
import {ServiceCostChart, ServiceReplicasChart} from "../../components";
import serviceActions from "../../actions";


const ServiceHeader = (props) => {
  const {namespace, service} = props;

  function changeReplicas(e, value) {
    e.preventDefault();
    props.dispatch(serviceActions.update.UpdateActionCreators(service, {replicas: value}));
  }

  return (
    <div className="container-fluid header">
      <Paper>
        <CommonHeaderContainer {...props} />
        <div className="header-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-xs-12">
                <h3>{service.meta.name}</h3>
                {
                  (!!service.dns.primary)
                    ? (
                    <p>
                      <i className="fa fa-globe" aria-hidden="true"/>
                      <Link target={'blank'} to={service.dns.primary}> {service.dns.primary} </Link>
                    </p>
                  )
                    : ""
                }
                {
                  (!!Object.keys(service.sources).length)
                    ? (
                    <div>
                      <p>
                        <i className={`fa fa-${service.sources.hub}`} aria-hidden="true"/>
                        <Link target={'blank'} to={service.sources.repo}> {service.sources.repo} </Link>
                      </p>
                      <p><i className="fa fa-code-fork" aria-hidden="true"/> {service.sources.branch} </p>
                    </div>
                  )
                    : ""
                }

                <p>{(service.description) || "No description added yet"}</p>
              </div>
              <div className="col-md-7 col-xs-12 text-right">
                <ServiceReplicasChart up={changeReplicas} down={changeReplicas} value={service.meta.replicas}/>
                <ServiceCostChart replicas={service.meta.replicas} value={service.spec.memory} />
              </div>
            </div>
          </div>
          <div className="container header-tabs">
            <IndexLink activeClassName="tab-active" to={`/ns/${namespace.meta.name}/s/${service.meta.name}`}>
              Overview </IndexLink>
            <Link activeClassName="tab-active" to={`/ns/${namespace.meta.name}/s/${service.meta.name}/builds`}> Builds </Link>
            <Link activeClassName="tab-active" to={`/ns/${namespace.meta.name}/s/${service.meta.name}/deploy`}> Deploy </Link>
            <Link activeClassName="tab-active" to={`/ns/${namespace.meta.name}/s/${service.meta.name}/logs`}> Logs </Link>
            <Link activeClassName="tab-active" to={`/ns/${namespace.meta.name}/s/${service.meta.name}/activity`}> Activity </Link>
            <Link activeClassName="tab-active" to={`/ns/${namespace.meta.name}/s/${service.meta.name}/settings`}> Settings </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ServiceHeader;
