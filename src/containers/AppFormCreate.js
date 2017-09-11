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
import Validator from "../utils/validator";

class AppFormCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:{
        name: "",
        description: ""
      },
      error: {
        name: "",
        form: ""
      },
      pending: false
    }
  }

  handleChangeName = (e) => {
    let data = this.state.data;
    let error = {};
    data.name = e.target.value;
    error.name = Validator.NameField(data.name);
    this.setState({data: data, error: error});
  };

  handleChangeDescription = (e) => {
    let data = this.state.data;
    let error = {};
    data.description = e.target.value;
    this.setState({data: data, error: error});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({pending: true});
    let data = this.state.data;
    this.props.submit(data.name, data.description)
      .then(this.handleSuccess, this.handleError)
  };

  handleDisabled = () => {
    return (
      !!Validator.NameField(this.state.data.name) ||
      this.state.pending
    )
  };

  handleSuccess = () => {};

  handleError = (error) => {
    let e = this.state.error;
    e.form = error.message;
    this.setState({error: Object.assign(this.state.error, e), pending: false});
  };

  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <div className={`form-group ${!!this.state.error.form ? "has-danger" : ""}`}>
          <h4 className="text-center text-danger">{this.state.error.form}</h4>
        </div>

        <div className={`form-group ${!!this.state.error.name ? "has-danger" : "has-success"}`}>
          <div className="input-group">
            <input type="text" className={`form-control ${!!this.state.error.name ? "form-control-danger" : "has-success"}`}
                   name='name' placeholder="App name"
                   value={this.state.data.name}
                   onChange={this.handleChangeName}/>
          </div>
          <div className="form-control-feedback">{this.state.error.name}</div>
        </div>

        <div className={`form-group ${!!this.state.error.description ? "has-danger" : "has-success"}`}>
          <div className="input-group">
            <textarea type="text-area" className={`form-control ${!!this.state.error.description ? "form-control-danger" : "has-success"}`}
                   name='description' placeholder="App description"
                   value={this.state.data.description}
                   onChange={this.handleChangeDescription}/>
          </div>
          <div className="form-control-feedback">{this.state.error.description}</div>
        </div>

        <div className="form-group">
          <button type="submit" disabled={(this.handleDisabled())}
                  className={`btn btn-block  ${this.handleDisabled() ? "btn-outline-primary" : "btn-outline-success"}`}>
            Create
          </button>
        </div>
      </form>
    )
  }
}

AppFormCreate.propTypes = {
  submit: PropTypes.func.isRequired
};

export default AppFormCreate;
