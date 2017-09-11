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
  RepoHeader,
  RepoPartialBuilds,
  RepoPartialBuildsSettings,
  RepoPartialDashboard,
  RepoPartialDeploySettings,
  RepoPartialGeneralSettings,
  RepoPartialNotifications
} from "./";
import {Preloader} from "../components";
import {Repo} from "../actions";


class PageRepoInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true
    }
  }

  componentDidMount() {
    this.props.dispatch(Repo.Fetch(this.props.params.owner, this.props.params.name))
      .then(() => this.setState({pending: false}));
  }

  render() {
    if (this.state.pending && !this.props.repo) return <Preloader/>;

    const hash = window.location.hash.slice(1);
    const tabs = {
      "builds": <RepoPartialBuilds {...this.props}/>,
      "builds_settings": <RepoPartialBuildsSettings {...this.props}/>,
      "deploy_settings": <RepoPartialDeploySettings {...this.props}/>,
      "general_settings": <RepoPartialGeneralSettings {...this.props}/>,
      "notifications": <RepoPartialNotifications {...this.props}/>
    };

    return (
      <div className="row">
        <RepoHeader tabs={tabs} repo={this.props.repo}/>

        <div className="col-12 mt-4">
          {(!tabs[hash]) ? <RepoPartialDashboard {...this.props}/> : tabs[hash]}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    repo: state.repo[props.params.owner + ":" + props.params.name],
    location: props.location
  }
};

export default connect(mapStateToProps)(PageRepoInfo);