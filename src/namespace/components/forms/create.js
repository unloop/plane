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

import {Link} from "react-router";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class NamespaceCreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.nameInput.focus();
  }

  render() {

    let err = this.props.namespace.action.create.error;

    return (
      <container>
        <div className="container text-center">
          <h1>Welcome to Last.Backend!</h1>
          <div>Last.Backend cloud allows you deploy and manage apps.</div>
          <div>Here you can create namespace for your apps.</div>
        </div>
        <div className="container text-center">
          <form className="create-namespace"
                onSubmit={(e) => this.props.createHandler(e, this.nameInput.input.value, this.descInput.input.value)}>
            <div className="row">
              <TextField ref={(input) => this.nameInput = input} fullWidth={true} errorText={err.name}
                         floatingLabelText="Namespace name" hintText="name"/>
              <br />
              <TextField ref={ (input) => this.descInput = input } fullWidth={true} errorText={err.description}
                         floatingLabelText="Namespace description"
                         hintText="description"/>
              <br />
            </div>
            <div className="row">
              <br />
              <RaisedButton disabled={this.props.namespace.action.create.pending} label="Create Namespace"
                            className="float-right" type="submit" primary={true}/>
              <br />
              <br />
              <FlatButton containerElement={<Link to="/"/>} label="Cancel"/>
            </div>
          </form>
        </div>
      </container>
    );
  }
}

NamespaceCreateForm.propTypes = {
  createHandler: PropTypes.func.isRequired
};

export default NamespaceCreateForm;
