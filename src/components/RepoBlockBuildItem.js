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
import Timestamp from "react-timestamp";


const RepoBlockBuildItem = ({item}) => (
  <div className="clearfix">

    <div className="pull-left" style={{width: "25px"}}>
      <span className="lb-text-blue">#1</span>
    </div>

    <div className="pull-left">
      <span className="badge badge-primary py-1 px-2 mr-2 text-uppercase">building</span>
      <span className="lb-text-blue"><i className="fa fa-code-fork" aria-hidden={true}/>&nbsp;
        master</span>
    </div>

    <div className="pull-right">
      <span>#ce51bd</span>
      <span className="px-4"><i className="fa fa-clock-o" aria-hidden={true}/>&nbsp;1<Timestamp
        time={new Date()}/></span>
    </div>

  </div>
);

RepoBlockBuildItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default RepoBlockBuildItem;
