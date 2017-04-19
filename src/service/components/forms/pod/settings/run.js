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
import PropTypes from 'prop-types';

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class SpecRunForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cmd: props.service.spec.command || "",
    }
  }

  handleChangeCommand(e, cmd) {
    e.preventDefault();
    this.setState({cmd: cmd.input.value})
  }

  render() {
    let cmd;
    return (
      <div className="row">
        <div className="col-xs-12">
          <TextField ref={val => cmd = val} fullWidth={true} floatingLabelText="CMD" hintText="cmd"
                     value={this.state.cmd}
                     onChange={(e) => this.handleChangeCommand(e, cmd)}/>
          <br />
          <RaisedButton label="Save" primary={true}
                        onClick={(e) => this.props.updateHandler(e, this.props.service, this.state.cmd)}/>
        </div>
      </div>
    );
  }
}

SpecRunForm.propTypes = {
  service: PropTypes.object.isRequired,
  updateHandler: PropTypes.func.isRequired
};

export default SpecRunForm;

