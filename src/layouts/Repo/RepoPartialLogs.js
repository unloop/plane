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
import {Link} from "react-router";

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Repo} from "../../actions";


class RepoPageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      apps: {}
    }
  }

  componentDidMount() {
    this.props.dispatch(Repo.List());
  }

  render() {
    return (
      <div className="container">
        <div className="app-list-header">
          <div className="pull-left">
            <h1>Repositories</h1>
          </div>
          <div className="pull-right">
            <Link to="/ns/new">
              <button className="btn btn-primary cursor-pointer">Create repo</button>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

RepoPageList.propTypes = {
  params: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    repositories: state.repo.list
  }
};

export default connect(mapStateToProps)(RepoPageList);
