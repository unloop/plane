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

import {
  Preloader,
  ServiceBlockActivityList,
  ServiceBlockContainerList,
  ServiceBlockPodList,
  ServiceBlockRouteList,
  ServiceBlockSources
} from "../../components";
import {Service} from "../../actions";

class ServicePartialDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true
    }
  }

  componentDidMount() {
    let {app, service} = this.props.params;
    this.props.dispatch(Service.Info(app, service))
      .then(() => {
        this.setState({pending: false})
      });
  }

  componentWillReceiveProps(props) {
    let {app, service} = props.params;
    if (props.params.service === this.props.params.service) {
      return;
    }

    this.setState({pending: true});
    this.props.dispatch(Service.Info(app, service))
      .then(() => {
        this.setState({pending: false})
      });
  }

  handlePodScale = () => {
    console.log("scale");
  };

  render() {
    return (this.state.pending)
      ? <Preloader/>
      : (
        <div>
          <div className="container">
            <ServiceBlockPodList service={this.props.service} scale={this.handlePodScale}/>
            <ServiceBlockSources sources={this.props.service.sources}/>
            <ServiceBlockContainerList containers={this.props.service.containers}/>
            <ServiceBlockRouteList routes={this.props.service.routes}/>
            <ServiceBlockActivityList activity={this.props.service.activity}/>
          </div>
        </div>
      )
  }
}

ServicePartialDetails.propTypes = {};

const mapStateToProps = (state, props) => {
  return ({
    app: state.app[props.params.app],
    service: state.service[props.params.service],
    location: props.location
  })
};

export default connect(mapStateToProps)(ServicePartialDetails);