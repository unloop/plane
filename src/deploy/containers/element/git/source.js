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

import {connect} from "react-redux";
import SelectField from "material-ui/SelectField";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/MenuItem";

import deployActions from "./../../../actions";


class SourceContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vendor: props.vendor,
      username: props.service.username,
      repo: '',
      branch: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(deployActions.vcs.ReposActionCreators(this.props.vendor));
  }

  repoChangeHandler = (e) => {
    this.setState({repo: e.target.value});
  };

  branchChangeHandler = (e) => {
    this.setState({branch: e.target.value});
  };

  render() {
    return (
      <div className="row text-center">
        <div className="col-xs-12">
          <TextField disabled floatingLabelText={"Username"} value={this.state.username}/>
        </div>
        <div className="col-xs-12">
          <SelectField floatingLabelText="Repository" value={this.state.repo} onChange={this.repoChangeHandler}>
            <MenuItem value={1} primaryText="Never"/>
            <MenuItem value={2} primaryText="Every Night"/>
            <MenuItem value={3} primaryText="Weeknights"/>
            <MenuItem value={4} primaryText="Weekends"/>
            <MenuItem value={5} primaryText="Weekly"/>
          </SelectField>
        </div>
        <div className="col-xs-12">
          <SelectField floatingLabelText="Branch" value={this.state.branch} onChange={this.branchChangeHandler}>
            <MenuItem value={1} primaryText="Never"/>
            <MenuItem value={2} primaryText="Every Night"/>
            <MenuItem value={3} primaryText="Weeknights"/>
            <MenuItem value={4} primaryText="Weekends"/>
            <MenuItem value={5} primaryText="Weekly"/>
          </SelectField>
        </div>
      </div>
    )
  }
}

SourceContainer.propTypes = {
  vendor: PropTypes.string.isRequired,
  //service: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  return ({
    service: props.service,
    vendor: props.vendor,
    vcs: state.vcs
  })
};

export default connect(mapStateToProps)(SourceContainer);
