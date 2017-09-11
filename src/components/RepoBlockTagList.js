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

import {RepoBlockTagItem} from "../components"


const RepoBlockTagList = ({tags}) => (
  <div>
    {
      tags.map((tag, index) => {
        return (
          <div key={index} className="mb-2">
            <RepoBlockTagItem index={index+1} item={tag}/>
          </div>
        )
      })
    }
  </div>
);

RepoBlockTagList.propTypes = {
  tags: PropTypes.array.isRequired
};

export default RepoBlockTagList;
