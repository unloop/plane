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


const RepoTagCardItem = ({tag, index}) => {
  return (
    <div className="card-block">
      <div className="row">

        <div className="col-6 mb-1">
          <span>#{index}</span>
          <span>{tag.name}</span>
        </div>

        <div className="col-6 pull-right">
          <span>
            <i className="fa fa-calendar-check-o" aria-hidden={true}/>
            <span><Timestamp time={new Date(tag.updated || "")}/></span>
          </span>
          <span>
            <i className="fa fa-check-circle" aria-hidden={true}/>
            <i className="fa fa-check-circle" aria-hidden={true}/>
            <i className="fa fa-times-circle-o" aria-hidden={true}/>
            <i className="fa fa-times-circle-o" aria-hidden={true}/>
            <i className="fa fa-check-circle" aria-hidden={true}/>
          </span>
        </div>

      </div>
    </div>
  );
};

RepoTagCardItem.propTypes = {
  tag: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default RepoTagCardItem;
