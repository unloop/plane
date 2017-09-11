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
import PropTypes from "prop-types";
import {Link} from "react-router";


class RepoHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const hash = window.location.hash.slice(1);
    const {repo} = this.props;

    return (
      <div className="col-12">
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto">

                <div className="row mb-4">
                  <div className="col-8">
                    <div className="pull-left px-3 py-1">
                      <img height={40} src="/images/icons/cube.png" alt=""/>
                    </div>
                    <div className="pull-left">
                      <h1>{this.props.repo.meta.owner} / {this.props.repo.meta.name}</h1>
                      <small>{this.props.repo.meta.description}</small>
                    </div>
                  </div>
                  <div className="col-4 pt-3">
                    <button className="btn btn-success pull-right text-uppercase">Deploy</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <Link name="repo-services" to={`/r/${repo.meta.owner}/${repo.meta.name}`}
                          className={(Object.keys(this.props.tabs).indexOf(hash) === -1) ? "tab active" : "tab"}>
                      <div>Repos</div>
                    </Link>
                    {Object.keys(this.props.tabs).map((tab) =>
                      <Link key={tab} to={`/r/${repo.meta.owner}/${repo.meta.name}#${tab}`}
                            className={(hash === tab) ? "tab active" : "tab"}>
                        <div className="text-capitalize">
                          {tab.replace(/_/gi, " ")}
                        </div>
                      </Link>
                    )}
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


RepoHeader.propTypes = {
  repo: PropTypes.object.isRequired,
  tabs: PropTypes.object.isRequired
};

export default RepoHeader