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

const ServiceChartContainerMemory = (props) => (
  <svg width="120px" height="120px" viewBox="0 0 150 150">
    <circle cx="75" cy="75" r="50" fill="transparent" strokeWidth="5" stroke="grey"/>
    <circle cx="75" cy="75" r="50" fill="transparent" strokeWidth="5" stroke="#2275dc"/>
    <text x="75" y="75" fill="#ffffff" fontSize="16" textAnchor="middle">{props.memory} GB</text>
    <text x="75" y="95" fill="#ffffff" fontSize="14" textAnchor="middle">Memory</text>
  </svg>
);

ServiceChartContainerMemory.propTypes = {
  memory: PropTypes.number.isRequired
};

export default ServiceChartContainerMemory;