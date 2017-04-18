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
import {IndexLink, Link} from "react-router";

import Paper from "material-ui/Paper";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import {CommonHeaderContainer} from "../../../common/containers";

const NamespaceHeader = (props) => {
  const {namespace} = props;

  return (
    <div className="container-fluid header">
      <Paper>
        <CommonHeaderContainer {...props} />
        <div className="header-container">
          <div className="container-fluid namespace-header-description">
            {(namespace.meta.description) || "No description added yet"}
          </div>
          <div className="container-fluid header-tabs">
            <IndexLink activeClassName="tab-active" to={`/ns/${(namespace.meta.name)}`}> Overview </IndexLink>
            <Link activeClassName="tab-active" to={`/ns/${(namespace.meta.name)}/activity`}> Activity </Link>
            <Link activeClassName="tab-active" to={`/ns/${(namespace.meta.name)}/settings`}> Settings </Link>
          </div>
          <div>
            <Link to={`/ns/${(namespace.meta.name)}/deploy`}>
              <FloatingActionButton className="header-add-button">
                <ContentAdd />
              </FloatingActionButton>
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
};

NamespaceHeader.propTypes = {
  namespace: PropTypes.object.isRequired,
};

export default NamespaceHeader