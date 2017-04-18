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

const CommonBreadcrumbsHeader = (props) => {

  const {namespace, service, build, volume} = props;

  return (
    <ol className="breadcrumb">
      <li>
        <Link to={'/'}>
          <img height={"48px"} src="/logo.svg" alt="Last.Backend"/>
        </Link>
      </li>
      { namespace && namespace.meta && namespace.meta.name ?
        <li>
          <Link to={`/ns/${namespace.meta.name}`}>
            <span> {namespace.meta.name} </span>
          </Link>
        </li> : null
      }
      {
        service && service.meta && service.meta.name ?
          <li>
            <Link to={`/s/${service.meta.name}`}>
              <span>{service.meta.name} </span>
            </Link>
          </li> : null
      }
      {
        build && build.number ?
          <li>
            <Link to={`#`}>
              <span>build #{build.number}</span>
            </Link>
          </li> : null
      }
      {
        volume && volume.name ?
          <li>
            <Link to={`#`}>
              <span>{volume.name}</span>
            </Link>
          </li> : null
      }
    </ol>
  )
};

CommonBreadcrumbsHeader.propTypes = {};

export default CommonBreadcrumbsHeader;

