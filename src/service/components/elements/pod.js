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
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import {Card, CardHeader, CardText} from "material-ui/Card";
import Timestamp from "react-timestamp";


function getStateContainerColor(status) {
  const statuses = {
    running: "green",
    terminated: "red",
    waiting: "blue"
  };
  return statuses[status.toLowerCase()] || "green";
}

const PodItemElement = (props) => {
  const {pod} = props;
  return (
    <Paper className="card">
      <Card>
        <CardHeader
          title={pod.meta.id}
          subtitle={pod.state.state}>
          <Timestamp className="pull-right" time={new Date(pod.meta.created || "")}/>
          <hr/>
        </CardHeader>
        <CardText>
          <Table>
            <TableHeader enableSelectAll={false} displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Image</TableHeaderColumn>
                <TableHeaderColumn>Ports</TableHeaderColumn>
                <TableHeaderColumn style={{width: "120px"}}>Status</TableHeaderColumn>
                <TableHeaderColumn style={{width: "50px"}}/>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {
                pod.containers.map((container, index) => {
                  return (
                    <TableRow key={index}>
                      <TableRowColumn className="text-left">
                        <i className="fa fa-circle" style={{color: getStateContainerColor(container.status)}} aria-hidden="true"/>
                        <span> {container.id}</span>
                      </TableRowColumn>
                      <TableRowColumn className="text-left">
                        <span> {container.image}</span>
                      </TableRowColumn>
                      <TableRowColumn className="text-center">
                        {
                          (!!container.ports && !!Object.keys(container.ports).length)
                            ? Object.keys(container.ports).map((key) => {
                            return <span
                              key={key}>{container.ports[key].container + "/" + container.ports[key].protocol}</span>
                          })
                            : ""
                        }
                      </TableRowColumn>
                      <TableRowColumn className="text-center"
                                      style={{width: "120px", color: getStateContainerColor(container.state)}}>
                        {container.state}
                      </TableRowColumn>
                      <TableRowColumn className="text-right" style={{width: "50px"}}>
                        <i className="fa fa-bars" aria-hidden="true"/>
                      </TableRowColumn>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>

        </CardText>
      </Card>
    </Paper>
  )
};

PodItemElement.propTypes = {};

export default PodItemElement;