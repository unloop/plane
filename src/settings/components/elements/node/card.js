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

import Paper from "material-ui/Paper";


const NodeCard = (props) => {
  const {node} = props;
  return (
    <Paper className="node-card">
      <div className="container-fluid container-border-bottom">
        <div className="pull-right node-card-status">
          <span className="badge" style={{background: "#4CAF50"}}>online</span>
        </div>
        <h3>{node.meta.hostname}</h3>
      </div>
      <div className="container-fluid container-border-bottom">
        <ul className="list-group">
          <li className="list-group-item" style={{border: "none", padding: "3px 0"}}>
            <span>Memory</span>
            <span className="pull-right">{node.meta.memory.used} MB/{node.meta.memory.total} MB</span>
          </li>
          <li className="list-group-item" style={{border: "none", padding: "3px 0"}}>
            <span>OS</span>
            <span className="pull-right">{node.meta.os_name}</span>
          </li>
          <li className="list-group-item" style={{border: "none", padding: "3px 0"}}>
            <span>Architecture</span>
            <span className="pull-right">{node.meta.architecture}</span>
          </li>
        </ul>
      </div>
    </Paper>
  );
};

NodeCard.propTypes = {
  node: React.PropTypes.object.isRequired
};

export default NodeCard;
