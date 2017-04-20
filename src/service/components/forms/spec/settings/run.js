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

import TextField from "material-ui/TextField";

class ServiceSpecRunForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      command: props.spec.command || "",
    }
  }

  opts = {};

  changeCommandHandler(e, elem) {
    e.preventDefault();
    this.setState({command: elem.input.value});
    this.opts.command = elem.input.value;
    this.props.updateHandler(this.opts);
  }

  render() {
    let command;
    return (
      <div className="row">

        <div className="col-md-4 col-xs-12">
          <h3>Run settings</h3>
          <desc>Spec runtime settings</desc>
        </div>

        <div className="col-md-8 col-xs-12">
          <TextField fullWidth={true} floatingLabelText="CMD" hintText="cmd"
                     ref={val => command = val}
                     value={this.state.command}
                     onChange={(e) => this.changeCommandHandler(e, command)}/>
        </div>

      </div>
    );
  }
}

ServiceSpecRunForm.propTypes = {
  updateHandler: PropTypes.func.isRequired
};

export default ServiceSpecRunForm;

