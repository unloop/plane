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
import {connect} from "react-redux";

import {Repo} from "../actions";

class ServiceSourcesTemplatesList extends React.Component {

  constructor() {
    super();
    this.state = {
      version: 'latest',
      search: '',
      template: null
    };
  }

  componentDidMount() {
    this.props.dispatch(Repo.List());
  }

  searchUpdateHandler = (e) => {
    this.setState({search: e.target.value.substr(0, 20)});
  };

  selectTemplateHandler = (e, name, versions) => {
    e.preventDefault();
    this.setState({template: {name: name, versions: versions || []}, version: "latest"});
    this.props.setTemplate(name, "latest");
  };

  clearTemplateHandler = (e) => {
    e.preventDefault();
    this.setState({template: null, version: "latest"});
  };

  changeVersionHandler = (e, index, value) => {
    e.preventDefault();
    this.setState({version: value});
    this.props.setTemplate(this.state.template.name, value)
  };

  render() {
    return (
      <div className="container">

        <div className="row justify-content-md-center">

          <div className="col-sm-12">
            {
              (!!Object.keys(this.props.template.list).length)
                ? (
                <input floatingLabelText={"Filter templates"} fullWidth={true}
                           value={this.state.search}
                           onChange={this.searchUpdateHandler}/>
              )
                : (
                <p className="text-center" style={{marginTop: "20px"}}>Templates not found</p>
              )
            }
          </div>

          <div className="col-sm-12">
            {
              (this.state.template === null)
                ? Object.keys(this.props.template.list).map((key, index) => {
                const template = this.props.template.list[key];
                return (key.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
                  ? (
                    <div key={index} className="col-md-6 col-sm-12"
                         onClick={e => this.selectTemplateHandler(e, key, this.props.template.list[key])}>
                      <div className="card lb-template-card">
                        <div className="card-block">
                          <h4 className="card-title">{template.name}</h4>
                          <small className="card-text">{template.desc}</small>
                        </div>
                      </div>
                    </div>
                  )
                  : ""
              })
                : (
                <div className="text-center">
                  <select floatingLabelText="Version"
                               value={this.state.version}
                               onChange={this.changeVersionHandler}>

                    <option key={"latest"} value={"latest"} primaryText={"latest"}/>
                    {
                      this.state.template.versions.map((val) => {
                        return (val.toLowerCase() !== "latest")
                          ? <option key={val} value={val} primaryText={val}/>
                          : ""
                      })
                    }
                  </select>
                  <button label="Cancel" secondary={true} onClick={this.clearTemplateHandler}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    template: state.template
  })
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceSourcesTemplatesList);