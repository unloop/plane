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

import React from 'react';

import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router'

import Paper from 'material-ui/Paper';
import {CommonHeaderContainer} from '../../../common/containers'

const BuildHeaderContainer = (props) => {
  const {namespace, service, build} = props;
  return (
    <div className="container-fluid header">
      <Paper>
        <CommonHeaderContainer namespace={namespace} service={service} build={build} location={location}/>

        <div className="header-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <h3>Build: #{build.number}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <p>
                  <i className={`fa fa-${build.sources.hub}`} aria-hidden="true"/>
                  <Link target={'blank'} to={build.sources.repo}> {build.sources.repo} </Link>
                </p>
                <p><i className="fa fa-code-fork" aria-hidden="true"/> {build.sources.branch} </p>
              </div>
              <div className="col-md-6 col-xs-12">
                <p>
                  <i className="fa fa-calendar" aria-hidden="true"/>
                  <span>{build.created}</span>
                </p>
                <p>
                  <i className="fa fa-clock-o" aria-hidden="true"/>
                  <span>{build.duration}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="container header-tabs">
            <IndexLink activeClassName="tab-active" to={`/s/${build.service}/b/${build.id}`} > Overview </IndexLink>
            <Link activeClassName="tab-active" to={`/s/${build.service}/b/${build.id}/logs`} > Logs </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const service = state.services[props.params.sid];
  const build   = state.builds[props.params.sid][props.params.id];
  const namespace = state.namespace.list[service.namespace];

  return ({
    build: build,
    service: service,
    namespace: namespace,
    location: props.location
  });
};

export default connect(mapStateToProps)(BuildHeaderContainer);
