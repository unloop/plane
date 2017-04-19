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

const ServiceMemoryChart = (props) => (
  <svg width={props.width || "160px"} height={props.height || "150px"}
       viewBox="0 0 160 150">
    <circle cx="55" cy="75" r="50" fill="transparent" strokeWidth="10" stroke="grey"/>
    <circle cx="55" cy="75" r="50" fill="transparent" strokeWidth="10" stroke="#2275dc"/>
    <text x="55" y="75" fill="#2275dc" fontSize="16" textAnchor="middle">{props.value * props.replicas || 0}</text>
    <text x="55" y="95" fill="black" fontSize="12" textAnchor="middle">RAM</text>
    <g className="cursor-pointer" transform="translate(110, 40)" onClick={(e) => props.up(e, props.value + 32)}>
      <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0
       l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585
       c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" fill="lightgrey"/>
    </g>
    <g className="cursor-pointer" transform="translate(110, 80)"
       onClick={(e) => props.down(e, (props.value > 32) ? props.value - 32 : 32)}>
      <path d="M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0
       l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585
       c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z" fill="lightgrey"/>
    </g>
  </svg>
);

ServiceMemoryChart.propTypes = {
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  replicas: PropTypes.number.isRequired
};

export default ServiceMemoryChart;

