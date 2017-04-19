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

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Checkbox from "material-ui/Checkbox";
import ContentRemove from "material-ui/svg-icons/content/clear";

class ServicePortsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      external: "",
      internal: "",
      protocol: "tcp",
      published: false,
      ports: props.service.spec.ports || []
    }
  }

  handleChangeExternal(e, v) {
    e.preventDefault();
    this.setState({external: v.input.value})
  }

  handleChangeInternal(e, v) {
    e.preventDefault();
    this.setState({internal: v.input.value})
  }

  handleChangeProtocol = (e, index, v) => {
    e.preventDefault();
    this.setState({protocol: v})
  };

  handleChangePublished(e) {
    e.preventDefault();
    let v = !this.state.published;
    this.setState({published: v})
  }

  handleAddPort(e) {
    e.preventDefault();
    this.state.ports.push({
      external: parseInt(this.state.external, 10),
      internal: parseInt(this.state.internal, 10),
      protocol: this.state.protocol,
      published: this.state.published
    });
    this.setState({ports: this.state.ports, external: "", internal: "", protocol: "tcp", published: false});
    this.props.updateHandler(e, this.props.service, this.state.ports)
  }

  handleRemoveEnv(e, index) {
    e.preventDefault();
    if (this.state.ports.length > index) {
      this.state.ports.splice(index, 1);
      this.setState({ports: this.state.ports});
    }
    this.props.updateHandler(e, this.props.service, this.state.ports)
  }

  render() {
    let external, internal;

    return (<div className="row">
        <div className="col-md-4 col-xs-12">
          <h3>Ports</h3>
          <desc>
            You can expose your application and it will became a special port.
            You can add as much ports as you need for your service
          </desc>
        </div>

        <div className="col-md-8 col-xs-12">
          <Table selectable={false} style={{background: "none"}}>
            <TableBody displayRowCheckbox={false}>
              <TableRow displayBorder={false}>
                <TableRowColumn style={{textAlign: "center"}}>
                  <TextField ref={val => external = val} fullWidth={true} floatingLabelText="External"
                             value={this.state.external}
                             onChange={(e) => this.handleChangeExternal(e, external)}/>
                </TableRowColumn>
                <TableRowColumn style={{textAlign: "center"}}>
                  <TextField ref={val => internal = val} fullWidth={true} floatingLabelText="External"
                             value={this.state.internal}
                             onChange={(e) => this.handleChangeInternal(e, internal)}/>
                </TableRowColumn>
                <TableRowColumn>
                  <SelectField floatingLabelText="Protocol" value={this.state.protocol}
                               onChange={this.handleChangeProtocol}>
                    <MenuItem key={"tcp"} value={"tcp"} primaryText={"tcp"}/>
                    <MenuItem key={"udp"} value={"udp"} primaryText={"udp"}/>
                  </SelectField>
                </TableRowColumn>
                <TableRowColumn style={{width: "80px", textAlign: "center"}}>
                  <label
                    style={{color: "rgba(0, 0, 0, 0.298039)", fontSize: "12px", fontWeight: "bold"}}>Published</label>
                  <Checkbox checked={this.state.published} onClick={(e) => this.handleChangePublished(e)}/>
                </TableRowColumn>
                <TableRowColumn style={{width: "150px", textAlign: "center"}}>
                  <RaisedButton label="ADD" primary={true}
                                onClick={(e) => this.handleAddPort(e)}/>
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>

          <br/>

          {
            (!!this.state.ports.length)
              ? (
              <Table selectable={false} style={{background: "none"}}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn style={{textAlign: "center"}}>External</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign: "center"}}>Internal</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign: "center"}}>Protocol</TableHeaderColumn>
                    <TableHeaderColumn style={{width: "75px", textAlign: "center"}}>Published</TableHeaderColumn>
                    <TableHeaderColumn style={{width: "150px", textAlign: "center"}}/>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {
                    Object.keys(this.state.ports).map((index) => {
                      return (
                        <TableRow key={index} displayBorder={false}>
                          <TableRowColumn style={{textAlign: "center"}}>
                            {this.state.ports[index].external}
                          </TableRowColumn>
                          <TableRowColumn style={{textAlign: "center"}}>
                            {this.state.ports[index].internal}
                          </TableRowColumn>
                          <TableRowColumn style={{textAlign: "center"}}>
                            {this.state.ports[index].protocol}
                          </TableRowColumn>
                          <TableRowColumn style={{width: "75px", textAlign: "center"}}>
                            <Checkbox checked={this.state.ports[index].published}/>
                          </TableRowColumn>
                          <TableRowColumn style={{width: "150px", textAlign: "center"}}>
                            <ContentRemove className="cursor-pointer" onClick={(e) => this.handleRemoveEnv(e, index)}/>
                          </TableRowColumn>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            )
              : ""
          }
        </div>
      </ div >
    );
  }
}

ServicePortsForm.propTypes = {
  namespace: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
  updateHandler: PropTypes.func.isRequired
};

export default ServicePortsForm;

