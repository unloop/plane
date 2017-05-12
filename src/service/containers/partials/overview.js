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

import {PodCardList, ServiceDetailInfo, SpecCardList, SpecSettingsContainer} from "../../components";
import {VolumeCardList} from "../../../volume/components";
import specActions from "./../../actions/spec";
import {ServiceLogsContainer} from "./../../containers";


class ServiceOverviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      panel: "general",
      spec: null,
      pod: null,
      container: null
    };
  }

  selectSpecHandler = (val) => {
    this.setState({panel: "settings", pod: null, container: null, spec: val});
  };

  selectContainerHandler = (val) => {
    this.setState({panel: "logs", pod: null, container: val, spec: null});
  };

  selectPodHandler = (val) => {
    this.setState({panel: "logs", pod: val, container: null, spec: null});
  };

  changeMemoryHandler = (spec, memory) => {
    this.props.dispatch(specActions.update.UpdateActionCreators(this.props.service, spec, {memory: memory}));
  };

  applySpecHandler = (spec, newSpec) => {
    this.props.dispatch(specActions.update.UpdateActionCreators(this.props.service, spec, newSpec)).then(() => {
      this.refuseSpecHandler();
    });
  };

  refuseSpecHandler = () => {
    this.setState({panel: "general", selected: null});
  };

  render() {
    const {service, volume} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <GetPanel params={this.props.params}
                      panel={this.state.panel}
                      spec={this.state.spec}
                      container={this.state.container}
                      pod={this.state.pod}
                      service={service}
                      volume={volume}
                      applySpecHandler={this.applySpecHandler}
                      refuseSpecHandler={this.refuseSpecHandler}
                      changeMemoryHandler={this.changeMemoryHandler}
                      selectSpecHandler={this.selectSpecHandler}
                      selectContainerHandler={this.selectContainerHandler}
                      selectPodHandler={this.selectPodHandler}
            />
          </div>
          <div className="col-md-4">
            <ServiceDetailInfo service={service}/>
          </div>
        </div>
      </div>
    );
  }
}

const GetPanel = (props) => {
  switch (props.panel) {
    case "settings":
      return <SpecSettingsContainer spec={props.spec}
                                    applyHandler={props.applySpecHandler}
                                    cancelHandler={props.refuseSpecHandler}/>;
    case "logs":
      return <ServiceLogsContainer container={props.container}
                                   pod={props.pod}
                                   service={props.service}
                                   cancelHandler={props.refuseSpecHandler}/>;
    default:
      return (
        <div>
          <div className="overview-block">
            <PodCardList pods={props.service.pods} selectPodHandler={props.selectPodHandler} />
          </div>

          <div className="overview-block">
            <SpecCardList spec={props.service.spec}
                          replicas={props.service.meta.replicas}
                          changeMemoryHandler={props.changeMemoryHandler}
                          selectSpecHandler={props.selectSpecHandler}
                          selectContainerHandler={props.selectContainerHandler}/>
          </div>

          <div className="overview-block">
            <VolumeCardList service={props.service} volume={props.volume}/>
          </div>
        </div>
      )
  }
};

const mapStateToProps = (state, props) => {
  return ({
    service: state.service.list[props.params.service],
    volume: state.volume,
  });
};

export default connect(mapStateToProps)(ServiceOverviewContainer);
