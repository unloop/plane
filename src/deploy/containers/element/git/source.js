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
      host: props.service.host,
      repo: '',
      branch: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(deployActions.vcs.ReposActionCreators(this.props.vendor));
  }

  repoClearHandler = (e) => {
    e.stopPropagation();
    this.setState({repo: "", branch: ""});
  };

  repoChangeHandler = (e, index, value) => {
    e.stopPropagation();
    this.setState({repo: value, branch: ""});
    this.props.dispatch(deployActions.vcs.BranchesActionCreators(this.props.vendor, value));
  };

  branchChangeHandler = (e, index, value) => {
    e.stopPropagation();
    this.setState({branch: value});
    let url = "git@" + this.state.host + ":" + this.state.username + "/" + this.state.repo + ".git";
    this.props.setUrl(url, value)
  };

  render() {
    return (
      <div className="row text-center">
        <div className="col-xs-12">
          <TextField disabled floatingLabelText={"Username"} value={this.state.username}/>
        </div>
        <div className="col-xs-12">
          <SelectField floatingLabelText="Repository" value={this.state.repo}
                       onClick={this.repoClearHandler}
                       onChange={this.repoChangeHandler}>
            {Object.keys(this.props.vcs.list).map((val) => {
              return <MenuItem key={val} value={this.props.vcs.list[val].name}
                               primaryText={this.props.vcs.list[val].name}/>
            })}
          </SelectField>
        </div>
        <div className="col-xs-12">
          <SelectField disabled={!this.state.repo} floatingLabelText="Branch" value={this.state.branch}
                       onChange={this.branchChangeHandler}>
            {this.state.repo && this.props.vcs.list[this.state.repo].branches.map((val, index) => {
              return <MenuItem key={index} value={val.name} primaryText={val.name}/>
            })}
          </SelectField>
        </div>
      </div>
    )
  }
}

SourceContainer.propTypes = {
  vendor: PropTypes.string.isRequired,
  service: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  return ({
    service: props.service,
    vendor: props.vendor,
    vcs: state.vcs
  })
};

export default connect(mapStateToProps)(SourceContainer);
