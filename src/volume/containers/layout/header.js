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
import { IndexLink } from 'react-router'

import Paper from 'material-ui/Paper';

import {CommonHeaderContainer} from '../../../common/containers'

const VolumeHeaderContainer  = (props) => {

  const {volume} = props;
  return (
    <div className="container-fluid header">
      <Paper>
        <CommonHeaderContainer {...props}/>

        <div className="header-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-xs-12">
                <h3>{volume.name}</h3>
              </div>
              <div className="col-md-7 col-xs-12 text-right">
              </div>
            </div>
          </div>
          <div className="container header-tabs">
            <IndexLink activeClassName="tab-active" to={`/v/${volume.id}`} > Overview </IndexLink>
          </div>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state, props) => {

  const volume = state.volumes[props.params.id];
  const namespace = state.namespace.list[props.params.pid];
  return ({
    namespace: namespace,
    volume: volume,
    location: props.location
  });
};

export default connect(mapStateToProps)(VolumeHeaderContainer);
