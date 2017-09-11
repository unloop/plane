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
import {RepoFormGeneral} from "../containers"
import {browserHistory} from 'react-router';

import {Repo} from "../actions"


class PageRepoCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repo: {meta: {}},
      data: {},
    };

    this.handleSetSource = this.handleSetSource.bind(this);
    this.handleSetTechAndName = this.handleSetTechAndName.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleSetSource(data) {
    const repo = {meta: {name: data.name, technology: "docker"}};
    const item = {name: data.name, technology: "docker"};
    this.setState({data: item, repo: repo})
  }

  handleSetTechAndName(data) {
    const item = Object.assign({}, this.state.data, {name: data.name, technology: data.tech});
    this.setState({data: item});
  }

  handleCreate() {
    this.props.dispatch(Repo.Create(this.state.data))
      .then((response) => browserHistory.push(`/r/${response.meta.owner}/${response.meta.name}`));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto mt-3">
            <div className="row">
              <div className="col-12 mt-5">
                <div>
                  <label className="lb-text-white">Technology and name</label>

                  <RepoFormGeneral repo={this.state.repo} change={this.handleSetTechAndName}/>

                  <div className="clearfix mt-4">
                    <hr/>
                    <div className="pull-left">
                      <Link to={"/"} className="btn btn-primary py-1 text-uppercase" style={{width: "150px"}}>Cancel
                      </Link>
                    </div>
                    <div className="pull-right">
                      <button className="btn btn-success py-1 text-uppercase" style={{width: "150px"}}
                              onClick={this.handleCreate}>ADD REPOSITORY
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {dispatch};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageRepoCreate);