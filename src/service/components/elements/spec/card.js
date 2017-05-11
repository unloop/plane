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
// Dissemination of information or reproduction of material
// is strictly forbidden unless prior written permission is obtained
// from Last.Backend LLC.
//

import React from "react";

import Paper from "material-ui/Paper";
import Timestamp from "react-timestamp";

import {Table, TableBody, TableRow, TableRowColumn} from "material-ui/Table";
import Chip from "material-ui/Chip";

import ServiceMemoryChart from "../../charts/memory";
import {getStateColor} from "./../../../../utils";


const GetContainers = (props) => {
  const {spec, replicas} = props;
  let total = 0;

  if (!spec.ready) {
    total = (spec.containers.old.length > replicas) ? spec.containers.old.length : replicas;
    let items = Array.apply(null, new Array(total));
    return (
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {
            items.map((item, i) => {
              if (!spec.containers.old[i]) {
                spec.containers.old[i] = {
                  state: "provision",
                  id: ""
                }
              }
              spec.containers.old[i].state = "provision";
              return (
                <GetContainer key={i} index={i} container={spec.containers.old[i]}
                              selectContainerHandler={props.selectContainerHandler} />
              )
            })
          }
        </TableBody>
      </Table>
    )
  } else {
    total = (spec.containers.new.length > replicas) ? spec.containers.new.length : replicas;
    let items = Array.apply(null, new Array(total));
    return (
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          {
            items.map((item, i) => {
              if (!spec.containers.new[i]) {
                spec.containers.new[i] = {
                  state: "provision",
                  id: ""
                }
              }
              return (
                <GetContainer key={i} index={i} container={spec.containers.new[i]}
                              selectContainerHandler={props.selectContainerHandler} />
              )
            })
          }
        </TableBody>
      </Table>
    )
  }
};

const GetContainer = (props) => {
  const {index, container} = props;
  return (
    <TableRow key={index}>
      <TableRowColumn className="text-left">

        <i className={"fa fa-" + ((container.state === "provision") ?
          "refresh fa-spin" : "circle")}
           style={{color: getStateColor(container.state)}}
           aria-hidden="true"/>

        <span> {container.id.substring(0, 12)}</span>
      </TableRowColumn>
      <TableRowColumn className="text-center"
                      style={{width: "120px", color: getStateColor(container.state)}}>
        {container.state}
      </TableRowColumn>
      <TableRowColumn className="text-right" style={{width: "50px"}}>
        <i className="fa fa-bars" aria-hidden="true" onClick={e => props.selectContainerHandler(e, container)}/>
      </TableRowColumn>
    </TableRow>
  )
};

const SpecCard = (props) => {
  const {spec, replicas} = props;

  function resizeHandler(e, val) {
    e.stopPropagation();
    props.changeMemoryHandler(spec, val);
  }

  function selectCardHandler(e, val) {
    e.stopPropagation();
    props.selectCardHandler(val);
  }

  function selectContainerHandler(e, val) {
    e.stopPropagation();
    props.selectContainerHandler(val);
  }

  return (
    <Paper className="card">
      <div className="container-fluid container-border-bottom">
        <div className="pull-right card-status">
          <span onClick={e => selectCardHandler(e, spec)} className=" cursor-pointer pull-right">settings</span>
        </div>
        <h3>
          <i className={"fa fa-" + ((!spec.ready) ? "refresh fa-spin" : "check")}
             style={{color: getStateColor((!spec.ready) ? "pending" : "started")}}
             aria-hidden="true"/>
          <span style={{marginLeft: "10px"}}>
            {spec.image}
          </span>
        </h3>
      </div>
      <div className='container-fluid container-border-bottom'>
        <div className="row">
          <div className="col-md-4 col-sm-6  col-xs-12" style={{padding: "0 25px"}}>
            <ServiceMemoryChart up={resizeHandler} down={resizeHandler}
                                value={spec.memory}/>
          </div>
          <div className="col-xs-12  col-md-8 col-sm-6 col-xs-12">
            <div className="row" style={{padding: "5px 0"}}>
              <div className="col-xs-5">
                <i className="fa fa-circle" style={{color: "#D3D3D3"}} aria-hidden="true"/> Memory:
              </div>
              <div className="col-xs-7" style={{textAlign: "left"}}>
                {spec.memory} MB
              </div>
            </div>

            <div className="row" style={{padding: "5px 0"}}>
              <div className="col-xs-5">
                <i className="fa fa-circle" style={{color: "#D3D3D3"}} aria-hidden="true"/> Build:
              </div>
              <div className="col-xs-7" style={{textAlign: "left"}}>
                -
              </div>
            </div>

            <div className="row" style={{padding: "5px 0"}}>
              <div className="col-xs-5">
                <i className="fa fa-circle" style={{color: "#D3D3D3"}} aria-hidden="true"/> Ports:
              </div>
              <div className="col-xs-7" style={{textAlign: "left"}}>
                {
                  (!!spec.ports && !!Object.keys(spec.ports).length)
                    ? Object.keys(spec.ports).map((key) => {
                      return <Chip key={key} style={{float: "left", marginRight: "5px"}}>
                        {spec.ports[key].external + "/" + spec.ports[key].protocol}</Chip>;
                  })
                    : "-"
                }
              </div>
            </div>

            <div className="row" style={{padding: "5px 0"}}>
              <div className="col-xs-5">
                <i className="fa fa-circle" style={{color: "#D3D3D3"}} aria-hidden="true"/> Last Updated:
              </div>
              <div className="col-xs-7" style={{textAlign: "left"}}>
                <Timestamp time={new Date(spec.meta.created || "")}/>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container-fluid container-border-bottom'>
        <div className="row">
          <GetContainers spec={spec} replicas={replicas} selectContainerHandler={selectContainerHandler}/>
        </div>
      </div>
    </Paper>
  )
};

SpecCard.propTypes = {
  spec: React.PropTypes.object.isRequired,
  replicas: React.PropTypes.number.isRequired,
  changeMemoryHandler: React.PropTypes.func.isRequired,
  selectCardHandler: React.PropTypes.func.isRequired,
  selectContainerHandler: React.PropTypes.func.isRequired
};

export default SpecCard;
