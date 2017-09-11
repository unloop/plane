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
import {connect} from "react-redux";

import {ServiceLogsStreamer} from "./"

import * as api from "../api";

class ServiceSelectorContainer extends React.Component {

  constructor(props) {

    let pod = 0;
    let container = 0;
    let pods = props.service.pods || []; let containers = (!!pods.length) ? pods[0].containers : [];

    if (!!props.pod) {
      for (let i = 0; i <= pods.length - 1; i++) {
        if (pods[i].meta.name === props.pod.meta.name) {
          pod = i;
          containers = pods[i].containers;
          break;
        }
      }
    }

    if (!!props.container) {
      for (let i = 0; i <= containers.length - 1; i++) {
        if (containers[i].id === props.container.id) {
          container = i;
          break;
        }
      }
    }

    super(props);
    this.state = {
      pod: pod,
      container: container,
      endpoint: "",
    };

    this.changeContainerHandler = this.changeContainerHandler.bind(this);

  }

  changePodHandler(e, index, val) {
    e.preventDefault();
    this.setState({pod: val});
  }

  changeContainerHandler(e, index, val) {
    e.preventDefault();
    this.setState({container: val});
  }

  render() {
    let pod = this.props.service.pods[this.state.pod];
    if (!pod) return;

    let container = pod.containers[this.state.container];
    let cid = !!container ?container.id : null;

    let endpoint = api.Service.Logs(pod.meta.id, cid);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-2">
                <h4>Logs</h4>
              </div>
              <div className="col-sm-4">
                <select value={this.state.pod} style={{fontSize: "10px"}}
                             onChange={this.changePodHandler.bind(this)}>
                  {
                    Object.keys(this.props.service.pods).map((key, index) => {
                      return <option key={index} value={index}
                                       primaryText={this.props.service.pods[key].meta.name}/>
                    })
                  }
                </select>
              </div>
              <div className="col-sm-4">
                <select fullWidth={true} value={this.state.container} style={{fontSize: "10px"}}
                             onChange={this.changeContainerHandler.bind(this)}>
                  {
                    Object.keys(this.props.service.pods[this.state.pod].containers).map((key, index) => {
                      return <option key={index} value={index}
                                       primaryText={this.props.service.pods[this.state.pod].containers[key].id}/>
                    })
                  }
                </select>
              </div>
              <div className="col-sm-2">
                <button label="Back"  onClick={this.props.cancelHandler} className="pull-right"/>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <ServiceLogsStreamer endpoint={endpoint}/>
        </div>
      </div>
    );
  }
}

ServiceSelectorContainer.propTypes = {
  cancelHandler: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  return ({
    service: props.service,
    pod: props.pod,
    container: props.container
  });
};

export default connect(mapStateToProps)(ServiceSelectorContainer);