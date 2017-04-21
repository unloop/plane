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


class ServiceOverviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  selectSpecHandler = (val) => {
    this.setState({selected: val});
  };

  changeMemoryHandler = (spec, memory) => {
    this.props.dispatch(specActions.update.UpdateActionCreators(this.props.service, spec, {memory: memory}));
  };

  applySpecHandler = (spec, newSpec) => {
    this.props.dispatch(specActions.update.UpdateActionCreators(this.props.service, spec, newSpec)).then(() => {
      this.refuseSpecHandler()
    });
  };

  refuseSpecHandler = () => {
    this.setState({selected: null});
  };

  render() {
    const {service, volume} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          {
            (!this.state.selected)
              ? (

              <div className="col-md-8">

                <div className="overview-block">
                  <PodCardList pods={service.pods}/>
                </div>

                <div className="overview-block">
                  <SpecCardList spec={service.spec}
                                replicas={service.meta.replicas}
                                changeMemoryHandler={this.changeMemoryHandler}
                                selectCardHandler={this.selectSpecHandler}/>
                </div>

                <div className="overview-block">
                  <VolumeCardList service={service} volume={volume}/>
                </div>

              </div>
            )
              : (
              <div className="col-md-8">
                <SpecSettingsContainer spec={this.state.selected}
                                       applyHandler={this.applySpecHandler}
                                       cancelHandler={this.refuseSpecHandler}/>
              </div>
            )
          }

          <div className="col-md-4">
            <ServiceDetailInfo service={service}/>
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