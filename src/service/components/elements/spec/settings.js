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

import Timestamp from "react-timestamp";
import Divider from 'material-ui/Divider';
import RaisedButton from "material-ui/RaisedButton";

import {ServiceSpecEnvForm, ServiceSpecPortsForm, ServiceSpecRunForm} from "./../../../components";


const SpecSettingsContainer = (props) => {
  const {spec} = props;

  let config = {};

  function updateRunHandler(opts) {
    config = Object.assign(config, opts);
  }

  function updatePortsHandler(ports) {
    config.ports = ports;
  }

  function updateEnvHandler(env) {
    config.env = env;
  }

  function applyHandler(e) {
    e.stopPropagation();
    props.applyHandler(spec, config);
  }

  function cancelHandler(e) {
    e.stopPropagation();
    props.cancelHandler();
  }

  return (
    <div>

      <div className="settings-block-item">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <h3>Spec info</h3>
            <desc>Spec base information</desc>
          </div>
          <div className="col-md-8 col-xs-12">
            <ul className="list-group">
              <li className="list-group-item disabled">
                <div className="row">
                  <div className="col-md-3 col-xs-6">Name:</div>
                  <div className="col-md-9 col-xs-6">{spec.image}</div>
                </div>
              </li>
              <li className="list-group-item disabled">
                <div className="row">
                  <div className="col-md-3 col-xs-6">Last updated:</div>
                  <div className="col-md-9 col-xs-6">
                    <Timestamp time={spec.meta.updated} format='date'/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="settings-block-item">
        <ServiceSpecRunForm updateHandler={updateRunHandler} {...props} />
      </div>


      <div className="settings-block-item">
        <ServiceSpecPortsForm updateHandler={updatePortsHandler} {...props} />
      </div>

      <div className="settings-block-item">
        <ServiceSpecEnvForm updateHandler={updateEnvHandler} {...props} />
      </div>

      <Divider/>

      <div className="settings-block-item text-center">
        <RaisedButton label="Apply" primary={true} style={{margin: "0 10px"}} onClick={applyHandler}/>
        <RaisedButton label="Back" secondary={true} style={{margin: "0 10px"}} onClick={cancelHandler}/>
      </div>

    </div>
  )
};

SpecSettingsContainer.propTypes = {
  spec: React.PropTypes.object.isRequired,
  applyHandler: React.PropTypes.func.isRequired,
  cancelHandler: React.PropTypes.func.isRequired
};

export default SpecSettingsContainer;
