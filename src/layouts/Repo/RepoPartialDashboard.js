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


import {Readme, RepoBlockActivityList, RepoBlockAppList, RepoBlockBuildList, RepoBlockStats} from "../../components"
import RepoBlockTagList from "../../components/RepoBlockTagList";


class RepoPartialDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {repo} = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mt-3">

            <div className="row mb-2">
              <div className="col-12 pb-2">
                <h6><img src="/images/icons/app/ic_app.svg" width={24} alt=""/>&nbsp;Applications</h6>
                <RepoBlockAppList apps={[]}/>
                <hr/>
              </div>
            </div>

            <div className="row mb-2">

              <div className="col-12">
                <h6 className="header-with-line lb-text-light-gray text-uppercase py-1">Building</h6>
                <RepoBlockBuildList builds={[]}/>
                <hr/>
              </div>
            </div>

            <div className="row mb-2">

              <div className="col-12 pb-2">
                <h6><img src="/images/icons/repo/ico_tags.svg" width={24} alt=""/>&nbsp;Tags</h6>
              </div>

              <div className="col-md-8 col-sm-12">
                <h6 className="header-with-line lb-text-light-gray text-uppercase">Active</h6>
                <RepoBlockTagList tags={repo.tags}/>
              </div>

              <div className="col-md-4 col-sm-12">
                <RepoBlockStats repo={repo}/>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-8 col-sm-12">
                <Readme header={"README.md"} content={repo.readme}/>
              </div>

              <div className="col-md-4 col-sm-12">
                <h6 className="lb-text-light-gray">Activity</h6>
                <RepoBlockActivityList data={[]}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

RepoPartialDashboard.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoPartialDashboard;

