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
import {connect} from 'react-redux';
import {Link} from 'react-router'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';


const ServiceDeployContainer = (props) => {

  const {service} = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="service-overview-block service-sources">

            <div className="row">
              <div className="col-md-6 col-xs-12">
                <h4>Sources:</h4>
                <p>
                  <i className={`fa fa-${service.sources.hub}`} aria-hidden="true"></i>
                  <span>{service.sources.hub}</span>
                </p>
                <p>
                  <i className={`fa fa-${service.sources.hub}`} aria-hidden="true"></i>
                  <Link target={'blank'} to={service.sources.repo}>{service.sources.repo}</Link>
                </p>

              </div>
              <div className="col-md-6 col-xs-12">
                <h4>Last Commit:</h4>
                {
                  (!!service.sources.commit)
                    ? (
                      <div>
                        <p>
                          service.sources.commit.committer
                        </p>
                        <p>
                          service.sources.commit.message
                        </p>
                        <p>
                          service.sources.commit.timestamp
                        </p>
                      </div>
                    )
                    : ""
                }
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <br />
                <RaisedButton label="disconnect" default={true}/>
              </div>
            </div>

          </div>
          <hr />
          <div className="service-overview-block service-sources">
            <h4>Deploy branch:</h4>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <SelectField
                  floatingLabelText="Deploy branch"
                  value={service.sources.branch}
                  autoWidth={true}
                >
                  <MenuItem value={"master"} primaryText="master"/>
                  <MenuItem value={"develop"} primaryText="develop"/>
                </SelectField>
              </div>
              <div className="col-md-3 col-xs-12 service-sources-autodeploy">
                <Toggle
                  label="Autodeploy"
                  labelPosition="right"
                  defaultToggled={true}
                />
              </div>
              <div className="col-md-3 col-xs-12 service-sources-action text-right">
                <RaisedButton label="deploy" primary={true}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return ({
    service: state.service.list[props.params.service]
  });
};


export default connect(mapStateToProps)(ServiceDeployContainer);

