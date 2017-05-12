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
import {getStateColor} from "./../../../utils";

const polarToCartesian = (x, y, r, angle) => {
  let angleInRadians = (parseInt(angle, 10)-90) * Math.PI / 180.0;

  return {
    x: parseInt(x, 10) + (r * Math.cos(angleInRadians)),
    y: parseInt(y, 10) + (r * Math.sin(angleInRadians))
  };
};

const Arc = (props) => {
  const { x, y, r, start, end, color} = props;
  let st = polarToCartesian(x, y, r, end);
  let nd = polarToCartesian(x, y, r, start);

  let largeArcFlag = end - start <= 180 ? "0" : "1";

  let path = [
    "M", st.x, st.y, 
    "A", r, r, 0, largeArcFlag, 0, nd.x, nd.y
  ].join(" ");

  return (
      <path stroke={color} strokeWidth="10" fill="none" d={path} />
  );
};

const ServiceReplicasChart = (props) => {

  const {state} = props;
  const {total, provision, ready, running, created, stopped, errored} = state;

  let len = 359 / total;
  let arcs = {};

  arcs.ready = {start: 0, end: ready* len};
  arcs.provision = {start: arcs.ready.end , end: arcs.ready.end + provision * len};

  arcs.running = {start:0, end: running * len};

  arcs.stopped  = {start: arcs.running.end, end: arcs.running.end + stopped * len};
  arcs.created  = {start: arcs.stopped.end, end: arcs.stopped.end + created * len};
  arcs.errored  = {start: arcs.created.end, end: arcs.created.end + errored * len};

  return (
    <svg width="160px" height="150px" viewBox="0 0 160 150">
      <circle cx="55" cy="75" r="50" fill="transparent" strokeWidth="10" stroke="grey"/>
      { provision > 0 ? (
          <g>
            <Arc x="55"  y="75" r="50" start={arcs.ready.start} end={arcs.ready.end} color={ getStateColor("ready")}/>
            <Arc x="55"  y="75" r="50" start={arcs.provision.start} end={arcs.provision.end} color={getStateColor("provision")}/>
          </g>
        ):(
            <g>
              { running > 0 &&
                <Arc x="55"  y="75" r="50" start={arcs.running.start} end={arcs.running.end} color={getStateColor("started")}/>
              }
              { stopped > 0 &&
                <Arc x="55" y="75" r="50" start={arcs.stopped.start} end={arcs.stopped.end} color={getStateColor("stopped")}/>
              }
              { created > 0 &&
                <Arc x="55"  y="75" r="50" start={arcs.created.start} end={arcs.created.end} color={getStateColor("created")}/>
              }
              { errored > 0 &&
                <Arc x="55" y="75" r="50" start={arcs.errored.start} end={arcs.errored.end} color={getStateColor("error")}/>
              }
            </g>
          )
      }
      <text x="55" y="75" fill="#2275dc" fontSize="18" textAnchor="middle">{props.value || 0}</text>
      <text x="55" y="95" fill="black" fontSize="12" textAnchor="middle">Replicas</text>
      <g className="cursor-pointer" transform="translate(110, 40)" onClick={(e) => props.up(e, props.value + 1)}>
        <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0
        l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585
        c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" fill="lightgrey"/>
      </g>
      <g className="cursor-pointer" transform="translate(110, 80)"
        onClick={(e) => props.down(e, (props.value > 0) ? props.value - 1 : 0)}>
        <path d="M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0
        l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585
        c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z" fill="lightgrey"/>
      </g>
    </svg>
  );
};


ServiceReplicasChart.propTypes = {
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default ServiceReplicasChart;

