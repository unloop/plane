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
      selected: null
    };
  }

  selectSpecHandler = (val) => {
    this.setState({panel: "settings", selected: val});
  };

  selectContainerHandler = (val) => {
    this.setState({panel: "logs", selected: val});
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
                      selected={this.state.selected}
                      service={service}
                      volume={volume}
                      applySpecHandler={this.applySpecHandler}
                      refuseSpecHandler={this.refuseSpecHandler}
                      changeMemoryHandler={this.changeMemoryHandler}
                      selectCardHandler={this.selectSpecHandler}
                      selectContainerHandler={this.selectContainerHandler}
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
      return <SpecSettingsContainer spec={props.selected}
                                    applyHandler={props.applySpecHandler}
                                    cancelHandler={props.refuseSpecHandler}/>;
    case "logs":
      let pod = props.service.pods.filter((pod)=> {
        return pod.meta.id === props.selected.pod;
      });
      return <ServiceLogsContainer container={props.selected}
                                   service={props.service}
                                   containers={pod[0].containers}
                                   cancelHandler={props.refuseSpecHandler}/>;
    default:
      return (
        <div>
          <div className="overview-block">
            <PodCardList pods={props.service.pods}/>
          </div>

          <div className="overview-block">
            <SpecCardList spec={props.service.spec}
                          replicas={props.service.meta.replicas}
                          changeMemoryHandler={props.changeMemoryHandler}
                          selectCardHandler={props.selectCardHandler}
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
