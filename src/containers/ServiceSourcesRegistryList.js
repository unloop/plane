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
import {Registry} from "../actions";


const DEBOUNCER_TIMEOUT = 1500;

class ServiceSourcesRegistryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: 'latest',
      search: '',
      repo: null,
      pending: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.setState({pending: false});
    return true
  }

  componentWillUnmount() {
    this.props.registry.list = {};
    this.setState({pending: false, repo: null});
  }

  selectRepoHandler = (e, repo) => {
    if (repo === null) return;
    e.preventDefault();
    repo.tags = repo.tags || [{name: "latest"}];
    this.setState({repo: repo, version: "latest"});
    this.props.setRepo(repo.owner, repo.name, "latest");
    this.props.dispatch(Registry.Tags(repo.owner, repo.name));
  };

  clearTemplateHandler = (e) => {
    e.preventDefault();
    this.setState({repo: null, version: "latest"});
  };

  changeVersionHandler = (e, index, value) => {
    e.preventDefault();
    this.setState({version: value});
    this.props.setRepo(this.state.repo.owner, this.state.repo.name, value)
  };

  render() {
    const searchRepoHandler = (e) => {
      e.preventDefault();

      let search = e.target.value;

      if (search === "") {
        this.props.registry.list = {};
        this.setState({pending: false, repo: null});
        clearTimeout(searchRepoHandler.timeout);
        return
      }

      clearTimeout(searchRepoHandler.timeout);
      searchRepoHandler.timeout = setTimeout(() => {
        this.props.registry.list = {};
        this.setState({pending: true, repo: null});
        this.props.dispatch(Registry.Repos(search))
      }, DEBOUNCER_TIMEOUT);
    };
    searchRepoHandler.timeout = null;

    return (
      <div className="container">
        <div className="row justify-content-md-center">

          <div className="col-sm-8">
            <input disabled={this.state.pending} floatingLabelText={"Search repo to the docker hub"}
                       fullWidth={true}
                       onChange={searchRepoHandler}/>
          </div>

          <br />

          <div className="col-sm-12">
            <div className="row justify-content-md-center">
              {
                (this.state.pending)
                  ? <div/>
                  : (this.state.repo === null)
                  ? Object.keys(this.props.registry.list).map((key, index) => {
                    const repo = this.props.registry.list[key];
                    return (
                      <div className="col-sm-6" key={index}
                           onClick={e => this.selectRepoHandler(e, this.props.registry.list[key])}>
                        <div className="card lb-docker-card">
                          <div className="card-block">
                            <h4 className="card-title">{repo.name}</h4>
                            <small className="card-text">{repo.desc}</small>
                          </div>
                        </div>
                      </div>
                    )
                  })
                  : (
                    <div>
                      <select floatingLabelText="Version" value={this.state.version}
                                   onChange={this.changeVersionHandler}>
                        <option key={"latest"} value={"latest"} primaryText={"latest"}/>
                        {Object.keys(this.state.repo.tags).map((val) => {
                          return (this.state.repo.tags[val].name.toLowerCase() !== "latest")
                            ? <option key={val} value={this.state.repo.tags[val].name}
                                        primaryText={this.state.repo.tags[val].name}/>
                            : ""
                        })}
                      </select>
                      <button label="Cancel" secondary={true} onClick={this.clearTemplateHandler}/>
                    </div>
                  )
              }
            </div>

          </div>
        </div>
      </div>
    )
  }
}

ServiceSourcesRegistryList.propTypes = {};

const mapStateToProps = (state) => {
  return ({
    registry: state.registry,
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceSourcesRegistryList);