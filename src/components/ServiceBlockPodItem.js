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
import {Link} from "react-router";
import Timestamp from "react-timestamp";
import {getStateColor} from "../utils";

const ServiceBlockPodItem = ({pod}) => {
  return (
    <div className="mb-2">
      <div>
        <i className={"fa fa-" + ((!!pod.state.provision) ? "refresh fa-spin" : "check")}
           style={{color: getStateColor(pod.state.status)}}
           aria-hidden="true"/>
        <span className="cursor-pointer" style={{paddingLeft: "5px"}}>
          <Link target={'blank'} to={"http://" + pod.meta.endpoint}>{pod.meta.name}</Link>
        </span>
        <span className="pull-right">
          <Timestamp time={new Date(pod.meta.updated || "")}/>
          <i className="fa fa-list-alt cursor-pointer ml-3"/>
        </span>
      </div>
      <div className="tree">
        <ul>
          {pod.containers.map((container, index) =>
              <li key={index} style={{display: "list-item"}}>
                <i className={"fa fa-" + (
                  ( container.state === "") ? "refresh fa-spin" : "check")}
                   style={{color: getStateColor(container.status)}}
                   aria-hidden="true"/>

                <span style={{paddingLeft: "5px"}}>
                  <span>{container.name}</span>
                  <span>{container.image}</span>
                </span>
                <span className="pull-right">
                  <i className="fa fa-list-alt cursor-pointer ml-3"/>
                </span>
              </li>
          )}
        </ul>
      </div>
    </div>
  )
};

ServiceBlockPodItem.propTypes = {
  pod: PropTypes.object.isRequired
};

export {ServiceBlockPodItem}

export default ServiceBlockPodItem;
