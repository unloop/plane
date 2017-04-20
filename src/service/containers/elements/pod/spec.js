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
import RaisedButton from "material-ui/RaisedButton";
import Divider from "material-ui/Divider";

import {SpecEnvsForm, SpecPortsForm, SpecRunForm} from "./../../../components";
import serviceActions from "../../../actions";

class PodSpecEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateRunFormHandler = (e, service, command) => {
    e.preventDefault();
    this.props.dispatch(serviceActions.update.UpdateActionCreators(service, {
      spec: {
        command: command
      }
    }));
  };

  updatePortsFormHandler = (e, service, ports) => {
    e.preventDefault();
    this.props.dispatch(serviceActions.update.UpdateActionCreators(service, {
      spec: {
        ports: ports
      }
    }));
  };

  updateEnvsFormHandler = (e, service, envs) => {
    e.preventDefault();
    this.props.dispatch(serviceActions.update.UpdateActionCreators(service, {
      spec: {
        env: envs
      }
    }));
  };

  render() {
    const {spec} = this.props;
    return (
      <div>

        <div className="settings-block-item">
          <div className="detail-info-header">Run commands</div>
          <Divider/>
          <SpecRunForm updateHandler={this.updateRunFormHandler} {...this.props} />
        </div>


        <div className="settings-block-item">
          <div className="detail-info-header">Ports</div>
          <Divider/>
          <SpecPortsForm updateHandler={this.updatePortsFormHandler} {...this.props} />
        </div>

        <div className="settings-block-item">
          <div className="detail-info-header">Environments</div>
          <Divider/>
          <SpecEnvsForm updateHandler={this.updateEnvsFormHandler} {...this.props} />
        </div>

        <Divider/>

        <RaisedButton label="Cancel" primary={true}
                      onClick={this.props.disableEditorHandler}/>
      </div>
    );
  }
}

PodSpecEditor.propTypes = {
  disableEditorHandler: React.PropTypes.func.isRequired
};

export default PodSpecEditor;

