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
import Timestamp from "react-timestamp";

import {Table, TableBody, TableRow, TableRowColumn} from "material-ui/Table";
import {Card, CardHeader, CardText} from "material-ui/Card";

import ServiceMemoryChart from "./../../charts/memory";
import serviceActions from "./../../../actions";


function getStateContainerColor(status) {
  const statuses = {
    running: "green",
    terminated: "red",
    waiting: "blue"
  };
  return statuses[status.toLowerCase()] || "green";
}

class SpecCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  changeMemory = (e, value) => {
    e.preventDefault();
    this.props.dispatch(serviceActions.update.UpdateActionCreators(this.props.service, {spec: {memory: value}}));
  };

  render() {
    const {spec} = this.props;
    return (
      <Paper className="card">
        <Card>
          <CardHeader
            title={spec.image}>
            <span onClick={e => this.props.selectHandle(e, spec)} className=" cursor-pointer pull-right">settings</span>
            <br/>
          </CardHeader>
          <CardText>
            <div className="row">
              <div className="col-xs-3 taxt-left" style={{padding: "0 10px"}}>
                <ServiceMemoryChart up={this.changeMemory} down={this.changeMemory}
                                    replicas={this.props.service.meta.replicas}
                                    value={spec.memory}/>
              </div>
              <div className="col-xs-9">
                <div className="row" style={{padding: "5px 0"}}>
                  <div className="col-xs-4">
                    <i className="fa fa-circle" style={{color: "#D3D3D3"}} aria-hidden="true"/> Memory:
                  </div>
                  <div className="col-xs-8" style={{textAlign: "left"}}>
                    {this.props.service.meta.replicas * spec.memory} MB
                  </div>
                </div>
                <div className="row" style={{padding: "5px 0"}}>
                  <div className="col-xs-4">
                    <i className="fa fa-circle" style={{color: "#D3D3D3"}} aria-hidden="true"/> Build:
                  </div>
                  <div className="col-xs-8" style={{textAlign: "left"}}>
                    -
                  </div>
                </div>
                <div className="row" style={{padding: "5px 0"}}>
                  <div className="col-xs-4">
                    <i className="fa fa-circle" style={{color: "#D3D3D3"}} aria-hidden="true"/> Ports:
                  </div>
                  <div className="col-xs-8" style={{textAlign: "left"}}>
                    {
                      (!!spec.ports && !!Object.keys(spec.ports).length)
                        ? Object.keys(spec.ports).map((key) => {
                        return <span
                          key={key}>{spec.ports[key].external + "/" + spec.ports[key].protocol}</span>
                      })
                        : "-"
                    }
                  </div>
                </div>
                <div className="row" style={{padding: "5px 0"}}>
                  <div className="col-xs-4">
                    <i className="fa fa-circle" style={{color: "#D3D3D3"}} aria-hidden="true"/> Last Updated:
                  </div>
                  <div className="col-xs-8" style={{textAlign: "left"}}>
                    <Timestamp time={new Date(spec.meta.created || "")}/>
                  </div>
                </div>
              </div>
            </div>

            <Table selectable={false}>
              <TableBody displayRowCheckbox={false}>
                {
                  spec.containers.map((container, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="text-left">
                          <i className="fa fa-circle" style={{color: getStateContainerColor(container.status)}}
                             aria-hidden="true"/>
                          <span> {container.id.substring(0, 12)}</span>
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
  }
}

SpecCard.propTypes = {
  service: React.PropTypes.object.isRequired,
  spec: React.PropTypes.object.isRequired,
  selectHandle: React.PropTypes.func.isRequired
};

export default SpecCard;