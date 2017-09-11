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


const RepoBlockStats = ({repo}) => (
  <div className="row">

    <div className="col-sm-6 pr-1 my-1">
      <div className="lb-bg-gray h-100">
        <div className="pull-left p-2">
          <img src="/images/icons/repo/ico_pulls.svg" width={24} alt=""/>
        </div>
        <div className="pull-left">
          <small>Pulled</small>
          <br/>
          <strong className="lb-text-white mr-1">0</strong>
          <small>times</small>
        </div>
      </div>
    </div>

    <div className="col-sm-6 pl-1 my-1">
      <div className="lb-bg-gray h-100">
        <div className="pull-left p-2">
          <img src="/images/icons/repo/ico_deployed.svg" width={24} alt=""/>
        </div>
        <div className="pull-left">
          <small>Deployed</small>
          <br/>
          <strong className="lb-text-white mr-1">0</strong>
          <small>times</small>
        </div>
      </div>
    </div>

    <div className="col-sm-6 pr-1 my-1">
      <div className="lb-bg-gray h-100">
        <div className="pull-left p-2">
          <img src="/images/icons/repo/ico_t_size.svg" width={24} alt=""/>
        </div>
        <div className="pull-left">
          <small>Average image size</small>
          <br/>
          <strong className="lb-text-white mr-1">0</strong>
          <small>MB</small>
        </div>
      </div>
    </div>

    <div className="col-sm-6 pl-1 my-1">
      <div className="lb-bg-gray h-100">
        <div className="pull-left p-2">
          <img src="/images/icons/repo/ico_layers.svg" width={24} alt=""/>
        </div>
        <div className="pull-left">
          <small>Average layers</small>
          <br/>
          <strong className="lb-text-white">0</strong>
        </div>
      </div>
    </div>

    <div className="col-sm-6 pr-1 my-1">
      <div className="lb-bg-gray h-100">
        <div className="pull-left p-2">
          <img src="/images/icons/repo/ico_t_size.svg" width={24} alt=""/>
        </div>
        <div className="pull-left">
          <small>Average layer size</small>
          <br/>
          <strong className="lb-text-white mr-1">0</strong>
          <small>MB</small>
        </div>
      </div>
    </div>

    <div className="col-sm-6 pl-1 my-1">
      <div className="lb-bg-gray h-100">
        <div className="pull-left p-2">
          <img src="/images/icons/repo/ico_l_size.svg" width={24} alt=""/>
        </div>
        <div className="pull-left">
          <small>Largest layer size</small>
          <br/>
          <strong className="lb-text-white mr-1">230</strong>
          <small>MB</small>
        </div>
      </div>
    </div>

  </div>
);

RepoBlockStats.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoBlockStats;
