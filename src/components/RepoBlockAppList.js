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


const RepoBlockAppList = ({apps}) => (
  <div className="row">
    <div className="col-8 pb-2">
      <div className="pt-1">
        <Link to={"#"}>
          <div className="clearfix">

            <div className="pull-left">
              <i className="fa fa-circle mr-1" aria-hidden={true} style={{fontSize: "8px"}}/>
              <span className="badge badge-primary lb-bg-light-gray py-1 px-2">
                          <i className="fa fa-code-fork" aria-hidden={true}/>&nbsp;master
                        </span>
              <i className="fa fa-long-arrow-right lb-text-light-gray" aria-hidden={true}/>
              <span className="badge badge-primary lb-bg-light-gray py-1 px-2">Production</span>
            </div>

            <div className="pull-right">
              <span className="px-1"><i className="fa fa-check-circle" aria-hidden={true}/>&nbsp;1</span>
              <span className="px-1"><i className="fa fa-circle-o" aria-hidden={true}/>&nbsp;0</span>
              <span className="px-1"><i className="fa fa-stop-circle-o" aria-hidden={true}/>&nbsp;1</span>
            </div>

          </div>
        </Link>
      </div>
    </div>

    <div className="col-4 pb-2">
      <div className="row">

        <div className="col-sm-6 pr-1">
          <div className="lb-bg-gray h-100">
            <div className="pull-left p-2">
              <img src="/images/icons/app/ic_memory.png" width={24} alt=""/>
            </div>
            <div className="pull-left">
              <small>Usage RAM</small>
              <br/>
              <strong className="lb-text-white mr-1">128</strong>
              <small>MB</small>
            </div>
          </div>
        </div>

        <div className="col-sm-6 pl-1">
          <div className="lb-bg-gray h-100">
            <div className="pull-left p-2">
              <img src="/images/icons/app/ic_instance.png" width={24} alt=""/>
            </div>
            <div className="pull-left">
              <small>Instances</small>
              <br/>
              <strong className="lb-text-white">1</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

RepoBlockAppList.propTypes = {
  apps: PropTypes.array.isRequired
};

export default RepoBlockAppList;
