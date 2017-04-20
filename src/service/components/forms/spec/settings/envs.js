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

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import ContentRemove from "material-ui/svg-icons/content/clear";

class ServiceSpecEnvForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: "",
      value: "",
      env: props.spec.env || []
    }
  }

  changeKeyHandler(e, v) {
    e.preventDefault();
    this.setState({key: v.input.value.replace(/\s+/g, '').toUpperCase()})
  }

  changeValueHandler(e, v) {
    e.preventDefault();
    this.setState({value: v.input.value})
  }

  addEnvHandler(e) {
    e.preventDefault();
    if (!this.state.key.length) return;
    let env = [this.state.key, this.state.value.trim()].join("=");
    this.state.env.push(env);
    this.setState({env: this.state.env, key: "", value: ""});
    this.props.updateHandler(this.state.env)
  }

  removeEnvHandler(e, index) {
    e.preventDefault();
    if (this.state.env.length > index) {
      this.state.env.splice(index, 1);
      this.setState({env: this.state.env});
    }
    this.props.updateHandler(this.state.env)
  }

  render() {
    let key, value;
    return (
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <h3>Config variables</h3>
          <desc>
            Here you can set config variables to pass it to the running app.
            It contains some system environments and you can add a custom your.
            Please note, that you can not overwrite system variables.
          </desc>
        </div>

        <div className="col-md-8 col-xs-12">
          <Table selectable={false} style={{background: "none"}}>
            <TableBody displayRowCheckbox={false}>
              <TableRow displayBorder={false}>
                <TableRowColumn style={{textAlign: "center"}}>
                  <TextField ref={val => key = val} fullWidth={true} floatingLabelText="Key"
                             value={this.state.key}
                             onChange={(e) => this.changeKeyHandler(e, key)}/>
                </TableRowColumn>
                <TableRowColumn style={{textAlign: "center"}}>
                  <TextField ref={val => value = val} fullWidth={true} floatingLabelText="Value"
                             value={this.state.value}
                             onChange={(e) => this.changeValueHandler(e, value)}/>
                </TableRowColumn>
                <TableRowColumn style={{width: "150px", textAlign: "center"}}>
                  <RaisedButton disabled={!this.state.key.length} fullWidth={true} label="ADD" primary={true}
                                onClick={(e) => this.addEnvHandler(e)}/>
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>

          <br/>

          {
            (!!this.state.env.length)
              ? (
              <Table selectable={false} style={{background: "none"}}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn style={{textAlign: "center"}}>Key</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign: "center"}}>Value</TableHeaderColumn>
                    <TableHeaderColumn style={{width: "150px", textAlign: "center"}}/>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {
                    Object.keys(this.state.env).map((index) => {
                      return <TableRow key={index} displayBorder={false}>
                        <TableRowColumn style={{textAlign: "center"}}>
                          {this.state.env[index].split("=")[0]}
                        </TableRowColumn>
                        <TableRowColumn style={{textAlign: "center"}}>
                          {this.state.env[index].split("=")[1]}
                        </TableRowColumn>
                        <TableRowColumn style={{width: "150px", textAlign: "center"}}>
                          <ContentRemove className="cursor-pointer" onClick={(e) => this.removeEnvHandler(e, index)}/>
                        </TableRowColumn>
                      </TableRow>
                    })
                  }
                </TableBody>
              </Table>

            )
              : ""
          }
        </div>
      </div>
    );
  }
}

ServiceSpecEnvForm.propTypes = {
  updateHandler: PropTypes.func.isRequired
};

export default ServiceSpecEnvForm;

