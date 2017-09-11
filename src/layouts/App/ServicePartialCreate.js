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
import {Link} from "react-router";

import {Service} from "../../actions";
// import {ServiceSourcesRegistryList, ServiceSourcesTemplatesList} from "../containers";

const initData = {
  name: "",
  template: "",
  repo: "",
  spec: {
    memory: 128
  }
};

class ServicePartialCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'docker',
      data: initData,
    };
  }

  data = Object.assign({}, initData);

  tabChangeHandler = (e, value) => {
    e.preventDefault();
    this.data = Object.assign({}, initData);
    this.setState({
      tab: value,
    });
  };

  setName = (name) => {
    this.data.name = name;
    this.setState({data: this.data})
  };

  setMemory = (memory) => {
    this.data.spec.memory = memory;
    this.setState({data: {spec: this.data}})
  };

  setResource = (resource) => {
    this.data.resource = resource;
    this.setState({data: this.data})
  };

  setTemplate = (template, version) => {
    this.data.template = template + ":" + (version || "latest");
    this.setState({data: this.data})
  };

  setRepo = (owner, repo, version) => {
    this.data.repo = (owner || "library") + "/" + repo + ":" + (version || "latest");
    this.setState({data: this.data})
  };

  setUrl = (url, branch) => {
    this.data.url = (branch === "master") ? url : [url, branch].join("#");
    this.setState({data: this.data})
  };

  onClickToDeploy = () => {
    if (this.checkDisableDeployHandler()) return;
    this.props.dispatch(Service.Create(this.props.app, this.data))
  };

  checkDisableDeployHandler() {
    switch (this.state.tab) {
      case "template":
        return !this.data.template;
      case "docker":
        return !this.data.repo;
      default:
        return true;
    }
  }

  render() {
    const {app} = this.props;
    return (
      <div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-8 text-center">

              <button onClick={e => this.tabChangeHandler(e, "template")}
                      primary={this.state.tab === "template"}
                      >Templates</button>

              <button onClick={e => this.tabChangeHandler(e, "docker")}
                      primary={this.state.tab === "docker"}
                      >Docker Hub</button>
            </div>

            {/*<div className="col-md-8">*/}

              {/*{*/}
                {/*(this.state.tab === "template")*/}
                  {/*? <ServiceSourcesTemplatesList setTemplate={this.setTemplate} {...this.props}/>*/}
                  {/*: ""*/}
              {/*}*/}

              {/*{*/}
                {/*(this.state.tab === "docker")*/}
                  {/*? <ServiceSourcesRegistryList setRepo={this.setRepo} {...this.props} />*/}
                  {/*: ""*/}
              {/*}*/}
            {/*</div>*/}

            <div className="col-md-8 text-center">
              <div className="settings-block-item">
                {
                  (this.state.tab !== "push")
                    ? (
                    <div>
                      <button className="btn"
                              disabled={this.checkDisableDeployHandler()}
                              onClick={this.onClickToDeploy}>
                        Create
                      </button>
                      <Link to={`/ns/${app}`}>
                        <button className="btn">Cancel</button>
                      </Link>
                    </div>
                  )
                    : (
                    <Link to={`/ns/${app}`}>
                      <button className="btn">Back</button>
                    </Link>
                  )
                }

              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

ServicePartialCreate.propTypes = {};

const mapStateToProps = (state, props) => {
  return ({
    app: props.params.app
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicePartialCreate);