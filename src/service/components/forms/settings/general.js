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
import RaisedButton from "material-ui/RaisedButton";


class ServiceGeneralForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.service.meta.name,
      desc: props.service.meta.description,
    }
  }

  handleChangeName(e, name) {
    e.preventDefault();
    this.setState({name: name.input.value})
  }

  handleChangeDesc(e, desc) {
    e.preventDefault();
    this.setState({desc: desc.input.value})
  }

  render() {
    let name, desc;
    return (
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <h3>General settings</h3>
          <desc>Main service settings</desc>
        </div>
        <div className="col-md-8 col-xs-12">
          <TextField ref={(val) => name = val} fullWidth={true} floatingLabelText="Service name"
                     hintText="name" value={this.state.name} onChange={(e) => this.handleChangeName(e, name)}/>
          <br />
          <TextField ref={(val) => desc = val} fullWidth={true} floatingLabelText="Service description"
                     hintText="description" value={this.state.desc} onChange={(e) => this.handleChangeDesc(e, desc)}/>
          <br />
          <RaisedButton label="Save" primary={true}
                        onClick={(e) => this.props.updateHandler(e, this.props.service, this.state.name, this.state.desc)}/>
        </div>
      </div>
    );
  }
}

ServiceGeneralForm.propTypes = {
  namespace: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
  updateHandler: PropTypes.func.isRequired
};

export default ServiceGeneralForm;

