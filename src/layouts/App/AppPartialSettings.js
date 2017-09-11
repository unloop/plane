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
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {browserHistory} from 'react-router'
import {AppFormUpdate} from "../../containers";
import {App} from "../../actions";


class AppPartialSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handlerAppUpdate = (id, name, description) => {
    return this.props.dispatch(App.Update(id, name, description))
      .then((app) => browserHistory.push("/ns/" + app.meta.name + "/settings"))
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <AppFormUpdate app={this.props.app} submit={this.handlerAppUpdate}/>
          </div>
        </div>
      </div>
    )
  }
}

AppPartialSettings.propTypes = {
  params: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  services: state.service,
  location: props.location
});

export default connect(mapStateToProps)(AppPartialSettings);