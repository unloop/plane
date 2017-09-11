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
import {Link} from 'react-router'

import {RepoTagCardList} from '../components'


const RepoCardItem = (props) => {
  const {repo} = props;
  return (
    <Link to={`/r/${repo.meta.owner}/${repo.meta.name}`}>
      <div className="card">
        <div className="row p-2">
          <div className="col-sm-12">

            <div className="pull-left pr-2">
              <img src="/images/vcs/ico_github.png" width={36} alt=""/>
            </div>
            <div className="pull-left">
              <h5>
                <small>{repo.meta.owner}</small>
                <small>&nbsp;/&nbsp;</small>
                <small className="lb-text-white">{repo.meta.name}</small>
              </h5>
              {
                (!!repo.meta.description)
                  ? <small>{repo.meta.description}</small>
                  : <small>No description added yet</small>
              }
            </div>
            <div className="pull-right">
              <span className="badge badge-info p-1">Public</span>
            </div>
          </div>
        </div>

        <div className="tabs-panel">
          <div className="row">
            <div className="col-8 pl-5">
              <div className="tab active">
                <div>{Object.keys(repo.tags).length}&nbsp;Tags</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 text-center">
            <div className="card-body py-3">
              <div className="card-body py-3">
                {
                  (Object.keys(repo.tags).length === 0)
                    ? <h4 className="text-center lb-text-light-gray">There are no tags in this repos</h4>
                    : <RepoTagCardList tags={repo.tags}/>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <i className="fa fa-rocket rounded-circle pr-1" aria-hidden={true}/>
          <small>develop <span className="lb-text-white">Build passed 1 minutes ago</span></small>
        </div>
      </div>
    </Link>
  );
};

RepoCardItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoCardItem;
