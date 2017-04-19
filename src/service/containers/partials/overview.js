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
import {connect} from "react-redux";

import {Table, TableBody, TableRow, TableRowColumn} from "material-ui/Table";

import {ServiceDetailInfo, SpecCard} from "../../components";
import {PodDetailInfo} from "../../containers";
import {VolumesList} from "../../../volume/components";

function getStateContainerColor(status) {
  const statuses = {
    running: "green",
    terminated: "red",
    waiting: "blue"
  };
  return statuses[status.toLowerCase()] || "green";
}

class ServiceOverviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pod: null
    }
  }

  handleSelectCard = (e, pod) => {
    e.preventDefault();
    this.setState({pod: pod});
  };

  render() {
    const {service, volume} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className={!this.state.pod ?"col-md-8":"col-md-6"}>
            <div className="overview-block">
              <h5>Pods</h5>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  {service.pods.map((pod, index) => {
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
            <div className="overview-block">
              <h5>Specs</h5>
              {service.spec.map((spec, index) => <SpecCard selectHandle={this.handleSelectCard} key={index}
                                                           service={service} spec={spec}/>)}
            </div>
            <div className="overview-block">
              <VolumesList service={service} volume={volume}/>
            </div>
          </div>
          <div className={!this.state.pod ?"col-md-4":"col-md-6"}>
            {
              (!this.state.pod)
                ? <ServiceDetailInfo service={service}/>
                : <PodDetailInfo service={service} pod={this.state.pod} spec={service.spec}/>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return ({
    service: state.service.list[props.params.service],
    volume: state.volume,
  });
};

export default connect(mapStateToProps)(ServiceOverviewContainer);