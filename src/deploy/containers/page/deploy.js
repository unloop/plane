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
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import {Link} from "react-router";
import {connect} from "react-redux";

import deployActions from "./../../actions";
import {DeployHeader} from "../../components";
import {DeployDockerContainer, DeployGitContainer, DeployGitPushContainer, DeployTemplateContainer} from "../index";

const initConfig = {
  name: "",
  memory: 126,
  template: "",
  image: "",
  url: "",
};

class DeployCreatePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'template',
      config: initConfig,
    };
  }

  config = Object.assign({}, initConfig);

  handleTabChange = (e, value) => {
    e.stopPropagation();
    this.config = Object.assign({}, initConfig);
    this.setState({
      tab: value,
    });
  };

  setName = (name) => {
    this.config.name = name;
  };

  setMemory = (memory) => {
    this.config.memory = memory;
  };

  setResource = (resource) => {
    this.config.resource = resource;
  };

  setTemplate = (template, version) => {
    this.config.template = template + ":" + (version || "latest");
  };

  setImage = (owner, image, version) => {
    this.config.image = (owner || "library") + "/" + image + ":" + (version || "latest");
  };

  setUrl = (url, branch) => {
    this.config.url = !!url.length ? [url, branch || "master"].join("#") : "";
  };

  onClickToDeploy = () => {
    this.props.dispatch(deployActions.deploy.DeployActionCreators(this.props.namespace, this.config))
  };

  render() {
    const {namespace} = this.props;
    return (
      <div>
        <DeployHeader setName={this.setName} setMemory={this.setMemory}
                      setResource={this.setResource} {...this.props} />
        <container className="container-info">
          <div className="container">
            <div className="row">

              <div className="col-xs-8 col-md-offset-2 text-center">
                <RaisedButton style={{margin: "0 10px"}} buttonStyle={{width: "160px", height: "55px"}}
                              onClick={e => this.handleTabChange(e, "template")} primary={this.state.tab === "template"}
                              label="TEMPLATES"/>
                <RaisedButton style={{margin: "0 10px"}} buttonStyle={{width: "160px", height: "55px"}}
                              onClick={e => this.handleTabChange(e, "push")} primary={this.state.tab === "push"}
                              label="GIT PUSH"/>
                <RaisedButton style={{margin: "0 10px"}} buttonStyle={{width: "160px", height: "55px"}}
                              onClick={e => this.handleTabChange(e, "git")} primary={this.state.tab === "git"}
                              label="GIT REPOSITORIES"/>
                <RaisedButton style={{margin: "0 10px"}} buttonStyle={{width: "160px", height: "55px"}}
                              onClick={e => this.handleTabChange(e, "docker")} primary={this.state.tab === "docker"}
                              label="DOCKER HUB"/>
              </div>

              <br/>
              <br/>
              <br/>
              <br/>

              <div className="container-fluid">
                {
                  (this.state.tab === "template")
                    ? <DeployTemplateContainer setTemplate={this.setTemplate} {...this.props}/>
                    : ""
                }

                {
                  (this.state.tab === "push")
                    ? <DeployGitPushContainer setUrl={this.setUrl} {...this.props}/>
                    : ""
                }

                {
                  (this.state.tab === "git")
                    ? <DeployGitContainer setUrl={this.setUrl} {...this.props}/>
                    : ""
                }

                {
                  (this.state.tab === "docker")
                    ? <DeployDockerContainer setImage={this.setImage} {...this.props}/>
                    : ""
                }
              </div>
            </div>

            <hr />

            <div className="row text-center">
              <br />
              {
                (this.state.tab !== "push")
                  ? <RaisedButton label="Deploy" primary={true} onClick={this.onClickToDeploy}/>
                  : ""
              }
              <br />
              <br />
              <FlatButton containerElement={<Link to={`/ns/${namespace}`}/>} label="Cancel"/>
            </div>
          </div>
        </container>
      </div>
    )
  }
}

DeployCreatePage.propTypes = {};

const mapStateToProps = (state, props) => {
  return ({
    namespace: props.params.namespace
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeployCreatePage);
