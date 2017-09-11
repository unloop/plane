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
import {Link} from "react-router";

import {Preloader, RepoCardItem} from "../components";
import {Repo} from "../actions";


class PageRepoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true
    }
  }

  componentDidMount() {
    this.props.dispatch(Repo.List())
      .then(() => this.setState({pending: false}));
  }

  render() {
    if (this.state.pending) return <Preloader/>;

    return (
      <div className="container">
        <div className="col-10 mx-auto mt-5 pt-3 mb-2">
          <div className="row">
            <div className="col-8">
              <h1>Repositories</h1>
              <small>Displaying {Object.keys(this.props.repos).length} elements</small>
            </div>
            <div className="col-4 pt-3">
              <Link to={"/r/new"} className="btn btn-success pull-right text-uppercase py-1">ADD NEW REPO</Link>
            </div>
          </div>
          <hr/>
          <div className="row">
            {Object.keys(this.props.repos).map((id, index) =>
              <div key={index} className="col-6 my-1">
                <RepoCardItem repo={this.props.repos[id]}/>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  repos: state.repo,
  location: props.location
});

export default connect(mapStateToProps)(PageRepoList);