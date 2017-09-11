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


import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {AppBlockResource,
  AppBlockNetworkList,
  AppBlockRouteList,
  AppBlockActivityList
} from "../../components";

class AppPartialDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {(!this.props.app)?
            <div className="col-12">
              loading
            </div>
            :
            <div className="col-12">
              <AppBlockResource app={this.props.app}/>
              <AppBlockNetworkList app={this.props.app}/>
              <AppBlockRouteList app={this.props.app}/>
              <AppBlockActivityList activity={this.props.activity}/>
            </div>
          }
        </div>
      </div>
    )
  };
}

AppPartialDetails.propTypes = {
  params: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  app: state.app[props.params.app],
  services : state.service,
  activity : state.activity || {},
  location: props.location
});

export default connect(mapStateToProps)(AppPartialDetails);
