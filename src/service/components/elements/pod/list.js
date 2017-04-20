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
import {Table, TableBody, TableRow, TableRowColumn} from "material-ui/Table";

function getStateContainerColor(status) {
  const statuses = {
    running: "green",
    terminated: "red",
    waiting: "blue"
  };
  return statuses[status.toLowerCase()] || "green";
}

const PodCardList = (props) => {
  const {pods} = props;
  return (
    <div>
      <h5>Pods</h5>
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {pods.map((pod, index) => {
            return (
              <TableRow key={index}>
                <TableRowColumn>{pod.meta.id}</TableRowColumn>
                <TableRowColumn
                  style={{textAlign: "right", color: getStateContainerColor(pod.state.state)}}>
                  {pod.state.state}
                </TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
};


PodCardList.propTypes = {
  pods: React.PropTypes.array.isRequired
};


export default PodCardList;
