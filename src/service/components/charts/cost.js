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

import React, {} from 'react';

const ServiceCostChart = (props) => (
  <svg width="150px" height="150px" viewBox="0 0 150 150">
    <circle cx="55" cy="75" r="50" fill="transparent" strokeWidth="10" stroke="lightgrey"/>
    <text x="55" y="75" fill="#2275dc" fontSize="16" textAnchor="middle">{props.value * props.replicas * 0.3125 / 32||0} $ </text>
    <text x="55" y="95" fill="black" fontSize="14" textAnchor="middle">Month</text>
  </svg>
);

ServiceCostChart.propTypes = {

};

export default ServiceCostChart;

