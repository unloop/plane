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
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentSettings from "material-ui/svg-icons/action/settings-applications";
import CommonBreadcrumbsHeader from "./breadcrumbs";

const CommonHeader = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="pull-right">
          <div className="header-info">
            {
              (!props.settings)
                ? (
                <div className="header-logout pull-right">
                  <FloatingActionButton href={"/settings"}>
                    <ContentSettings />
                  </FloatingActionButton>
                </div>
              )
                : ""
            }
          </div>
        </div>
        <div className="pull-left">
          <CommonBreadcrumbsHeader {...props}/>
        </div>
      </div>
    </nav>
  );
};

CommonHeader.propTypes = {};

export default CommonHeader;

