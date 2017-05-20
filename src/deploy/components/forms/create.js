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
import TextField from "material-ui/TextField";
import Slider from "material-ui/Slider";

import "./../../styles/main.css";

class DeployCreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 32,
      value: 256,
      memory: 128,
    };
  }

  componentDidMount(){
    this.nameInput.focus();
  }

  changeResourceHandler = (e, val) => {
    e.preventDefault();
    this.setState({memory: val});
    this.props.setMemory(val);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <TextField ref={(input) => this.nameInput = input}
                       fullWidth={true} floatingLabelText="Service name" hintText="Name"
                       onChange={e => this.props.setName(e.target.value)}/>
          </div>

          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <div className="row">
              <div className="col-xs-2" style={{textAlign: "left", paddingTop: "20px"}}>Resources</div>
              <div className="col-xs-6">
                <Slider min={32} max={1024} step={this.state.step} value={this.state.value}
                        onChange={this.changeResourceHandler}/>
              </div>
              <div className="col-xs-2 text-center" style={{paddingTop: "20px"}}>{this.state.memory + " MB"}</div>
              <div className="col-xs-2 text-center"
                   style={{paddingTop: "20px"}}>{"$ " + (this.state.memory * 0.3125 / 32) + " USD"}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DeployCreateForm.propTypes = {};

export default DeployCreateForm;

