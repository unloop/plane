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
import PropTypes from 'prop-types';

import {Link} from 'react-router'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const NamespaceCreateForm = (props) => {
  let err = props.namespace.action.create.error;
  let name, desc;
  return (
    <container>
      <div className="container text-center">
        <h1>Welcome to Last.Backend!</h1>
        <div>Last.Backend cloud allows you deploy and manage apps.</div>
        <div>Here you can create namespace for your apps.</div>
      </div>
      <div className="container text-center">
        <form className="create-namespace"
              onSubmit={(e) => props.createHandler(e, name.input.value, desc.input.value)}>
          <div className="row">
            <TextField ref={ (val) => name = val } fullWidth={true} errorText={err.name}
                       floatingLabelText="Namespace name" hintText="name"/>
            <br />
            <TextField ref={ (val) => desc = val } fullWidth={true} errorText={err.description}
                       floatingLabelText="Namespace description"
                       hintText="description"/>
            <br />
          </div>
          <div className="row">
            <br />
            <RaisedButton disabled={props.namespace.action.create.pending} label="Create Namespace" className="float-right"
                          type="submit" primary={true}/>
            <br />
            <br />
            <FlatButton containerElement={<Link to="/"/>} label="Cancel"/>
          </div>
        </form>
      </div>
    </container>
  )
};

NamespaceCreateForm.propTypes = {
  createHandler: PropTypes.func.isRequired
};

export default NamespaceCreateForm;
