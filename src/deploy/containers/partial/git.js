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
import FloatingActionButton from "material-ui/FloatingActionButton";
import Url from "./../element/git/url";
import deployActions from "./../../actions";


const vcs = {
  github: {
    name: "GitHub",
  },
  bitbucket: {
    name: "Bitbucket",
  },
  gitlab: {
    name: "GitLab",
  },
};

class DeployGitContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'url',
    };
  }

  componentDidMount() {
    this.props.dispatch(deployActions.integration.IntegrationActionCreators());
  }

  handleChangeTab = (e, value) => {
    console.log("value", value);
    e.stopPropagation();
    this.setState({tab: value});
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-8 col-md-offset-2 text-center">

          <FloatingActionButton style={{margin: "0 10px"}} onClick={e => this.handleChangeTab(e, "url")}
                                backgroundColor={(this.state.tab === "url") ? "#2275dc" : "#afafaf"}>
            <i className="fa fa-2x fa-external-link"></i>
          </FloatingActionButton>

          <FloatingActionButton style={{margin: "0 10px"}} onClick={e => this.handleChangeTab(e, "github")}
                                backgroundColor={(this.state.tab === "github") ? "#2275dc" : "#afafaf"}>
            <i className="fa fa-2x fa-github"></i>
          </FloatingActionButton>

          <FloatingActionButton style={{margin: "0 10px"}} onClick={e => this.handleChangeTab(e, "bitbucket")}
                                backgroundColor={(this.state.tab === "bitbucket") ? "#2275dc" : "#afafaf"}>
            <i className="fa fa-2x fa-bitbucket"></i>
          </FloatingActionButton>

          <FloatingActionButton style={{margin: "0 10px"}} onClick={e => this.handleChangeTab(e, "gitlab")}
                                backgroundColor={(this.state.tab === "gitlab") ? "#2275dc" : "#afafaf"}>
            <i className="fa fa-2x fa-gitlab"></i>
          </FloatingActionButton>

          <br/>
          <br/>

          {
            (this.state.tab === "url")
              ? <Url setUrl={this.props.setUrl}/>
              : ""
          }

          {
            Object.keys(vcs).map((key, index) => {
              return (
                (this.state.tab === key)
                  ? (
                  <div key={index}>Coming soon
                    {/*<Source key={index} vendor={key} setUrl={this.props.setUrl} service={this.props.integration.list[key]}>*/}
                  </div>
                )
                  :
                  ""
              )
            })
          }
        </div>
      </div>
    );
  }
}


DeployGitContainer.propTypes = {};

const mapStateToProps = (state, props) => {
  return ({
    integration: state.integration
  })
};

export default connect(mapStateToProps)(DeployGitContainer);