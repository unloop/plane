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
  AppBlockNetworkList,
  AppBlockRouteList,
  AppChartContainers,
  AppChartMemory,
  AppChartServices,
  Preloader,
  ServiceCardList
} from "../../components";
import {ServiceCardFilter} from "../../containers";

import {Service} from "../../actions";

class AppPartialDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      filter: ""
    }
  }

  componentDidMount() {
    this.props.dispatch(Service.List(this.props.app.meta.name))
      .then(() => {
        this.setState({pending: false})
      });
  }


  handlePodScale() {
    console.log("scale");
  }

  render() {
    return (this.state.pending) ? <Preloader/> :
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mt-3">
            <div className="row align-items-center">
              <div className="col-8">
                <AppChartMemory memory={0}/>
                <AppChartServices services={0}/>
                <AppChartContainers containers={0}/>
              </div>
              <div className="col-4">
                <AppBlockNetworkList app={this.props.app}/>
                <br/>
                <AppBlockRouteList app={this.props.app}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mt-3 mb-2">
            <h4>Services</h4>
            <ServiceCardFilter filter=""/>
            <hr/>
            <div className="row">
              {(Object.keys(this.props.app.services).length === 0) ?
                <div className="col-12">
                  <h4 className="text-center lb-text-light-gray">
                    There are no services in this application
                  </h4>
                </div> :
                <ServiceCardList services={this.props.app.services}
                                 app={this.props.app} scale={this.handlePodScale}/>

              }
            </div>
          </div>
        </div>
      </div>
  }
}

const mapStateToProps = (state, props) => ({
  services: state.service, // TODO: check service is belong to app
  location: props.location
});

export default connect(mapStateToProps)(AppPartialDashboard);

