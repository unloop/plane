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

import {Preloader} from "../components";
import {AppHeader, AppPartialDashboard, AppPartialEnvs, AppPartialSettings} from "./";
import {App} from "../actions";

class PageAppInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true
    }
  }


  componentDidMount() {
    this.props.dispatch(App.Fetch(this.props.params.app))
      .then(() => this.setState({pending: false}));
  }

  render() {
    if (this.state.pending) return <Preloader/>;

    const hash = window.location.hash.slice(1);
    const tabs = {
      "settings": <AppPartialSettings app={this.props.app}/>,
      "environments": <AppPartialEnvs app={this.props.app}/>
    };

    return (
      <div className="row">
        <AppHeader tabs={tabs} app={this.props.app}/>
        <div className="col-12">
          {(!tabs[hash]) ? <AppPartialDashboard app={this.props.app}/> : tabs[hash]}
        </div>
      </div>
    )

  }

}

const mapStateToProps = (state, props) => ({
  app: state.app[props.params.app],
  location: props.location
});


export default connect(mapStateToProps)(PageAppInfo);