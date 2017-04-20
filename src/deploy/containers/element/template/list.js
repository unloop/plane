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

import React, {} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import TemplateCard from './../../../components/template/card';
import deployActions from './../../../actions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class TemplateList extends React.Component {

  constructor() {
    super();
    this.state = {
      version: 'latest',
      search: '',
      template: null
    };
  }

  componentDidMount() {
    this.props.dispatch(deployActions.template.ListActionCreators());
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
      <div className="row">
        <div className="col-xs-8 col-md-offset-2">
          <TextField floatingLabelText={"Filter templates"} fullWidth={true} value={this.state.search}
                     onChange={this.searchUpdateHandler}/>
        </div>
        <br />
        <br />
        <div className="row">
          {
            (this.state.template === null)
              ? Object.keys(this.props.template.list).map((key, index) => {
                return (key.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
                  ? (<div className="col-xs-6 col-md-4" key={index}
                          onClick={e => this.selectTemplateHandler(e, key, this.props.template.list[key])}>
                    <TemplateCard name={key} template={this.props.template.list[key]}
                                  setTemplate={this.props.setTemplate}/>
                  </div>)
                  : ""
              })
              : <div style={{textAlign: "center"}}>
                <SelectField floatingLabelText="Version" value={this.state.version} onChange={this.changeVersionHandler}>
                  <MenuItem key={"latest"} value={"latest"} primaryText={"latest"}/>
                  {this.state.template.versions.map((val) => {
                    return (val.toLowerCase() !== "latest")
                      ? <MenuItem key={val} value={val} primaryText={val}/>
                      : ""
                  })}
                </SelectField>
                <RaisedButton label="Cancel" secondary={true} onClick={this.clearTemplateHandler}/>
              </div>
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
