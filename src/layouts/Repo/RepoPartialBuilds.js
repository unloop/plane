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

import {RepoBlockBuildList, RepoBlockTagList} from "../../components";


class RepoPartialBuilds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {repo} = this.props;
    return (
      <div className="container">
        <div className="row">

          <div className="col-6">
            <h6><img src="/images/icons/repo/ico_tags.svg" width={24} alt=""/>&nbsp;Tags</h6>
            <h6 className="header-with-line lb-text-light-gray text-uppercase py-2">Active</h6>
            <RepoBlockTagList tags={repo.tags}/>
          </div>

          <div className="col-6">
            <h6><img src="/images/icons/repo/ico_builds.svg" width={24} alt=""/>&nbsp;Builds</h6>
            <h6 className="header-with-line lb-text-light-gray text-uppercase py-2">Builded</h6>
            <RepoBlockBuildList builds={[]}/>
          </div>

        </div>
      </div>
    )
  }
}

RepoPartialBuilds.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoPartialBuilds;
