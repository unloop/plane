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
import {Link} from "react-router";
import Timestamp from "react-timestamp";
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";

import {ServiceReplicasChart} from "../../components";
import serviceActions from "../../actions/service";


const ServiceCard = (props) => {
  const {service} = props;

  function changeReplicasHandler(e, value) {
    e.preventDefault();
    props.dispatch(serviceActions.update.UpdateActionCreators(service, {replicas: value}));
  }

  // function changeMemoryHandler(e, value) {
  //   e.preventDefault();
  //   props.dispatch(serviceActions.update.UpdateActionCreators(service, {spec: {memory: value}}));
  // }

  return (
    <Paper className="card">
      <div className="container-fluid container-border-bottom">

        <div className="pull-right card-status">
          {
            (!!service.state)
              ? service.state.toUpperCase()
              : "RUNNING"
          }
        </div>

        <Link to={`/ns/${service.meta.namespace}/s/${service.meta.name}`}>
          <h3> {service.meta.name} </h3>
        </Link>
        <Link target={'blank'} to={service.dns.primary}> {service.dns.primary} </Link>
      </div>
      {
        (!!service.build)
          ?
          <div className="container-fluid container-border-bottom">
            <div className="row">
              <div className="col-md-8 col-xs-12 card-build-section">
              <span>
                Build <Link to={`#`}>username/{service.meta.name} #45</Link> completed
              </span><br />
                <small>a few seconds ago</small>
              </div>
              <div className="col-md-4 col-xs-12 card-build-action">
                <FlatButton label="view log" primary={true}/>
                <FlatButton label="dismiss" default={true}/>
              </div>
            </div>
          </div>
          : ""
      }

      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <ServiceReplicasChart up={changeReplicasHandler} down={changeReplicasHandler}
                                  value={service.meta.replicas}/>
            {/*<ServiceMemoryChart up={changeMemoryHandler} down={changeMemoryHandler} replicas={service.meta.replicas} value={service.spec.memory}/>*/}
          </div>
          <div className="col-md-6 col-xs-12">
            <table className="table card-table">
              <tbody>
              <tr>
                <td>Sources</td>
                <td>{
                  (!!service.sources.owner && !!service.sources.repo)
                    ? service.sources.owner / service.sources.repo
                    : "none"
                }
                </td>
              </tr>
              <tr>
                <td>Updated</td>
                <td>
                  {
                    (!!service.meta.updated)
                      ? <Timestamp time={service.meta.updated}/>
                      : "none"
                  }
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Paper>
  )
};

export default ServiceCard;
