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

import React, { } from 'react';
import { connect } from 'react-redux';
import DockerImageCard from './../../../components/docker/card';
import TextField from 'material-ui/TextField';
import deployActions from './../../../actions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';


const DEBOUNCER_TIMEOUT = 2000;

class SourcesDockerImagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: 'latest',
      search: '',
      image: null,
      pending: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.setState({ pending: false });
    return true
  }

  componentWillUnmount() {
    this.props.registry.list = {};
    this.setState({ pending: false, image: null });
  }

  selectImageHandler = (e, image) => {
    if (image === null) return;
    e.preventDefault();
    image.tags = image.tags || [{ name: "latest" }];
    this.setState({ image: image, version: "latest" });
    this.props.setImage(image.owner, image.name, "latest");
    this.props.dispatch(deployActions.docker.TagsActionCreators(image.owner, image.name));
  };

  clearTemplateHandler = (e) => {
    e.preventDefault();
    this.setState({ image: null, version: "latest" });
  };

  changeVersionHandler = (e, index, value) => {
    e.preventDefault();
    this.setState({ version: value });
    this.props.setImage(this.state.image.owner, this.state.image.name, value)
  };

  render() {
    const handleSearchRepos = (e) => {
      e.preventDefault();

      let search = e.target.value;

      if (search === "") {
        this.props.registry.list = {};
        this.setState({ pending: false, image: null });
        clearTimeout(handleSearchRepos.timeout);
        return
      }

      clearTimeout(handleSearchRepos.timeout);
      handleSearchRepos.timeout = setTimeout(() => {
        this.props.registry.list = {};
        this.setState({ pending: true, image: null });
        this.props.dispatch(deployActions.docker.ReposActionCreators(search))
      }, DEBOUNCER_TIMEOUT);
    };
    handleSearchRepos.timeout = null;

    return (
      <div className="row">
        <div className="col-xs-8 col-md-offset-2">
          <TextField disabled={this.state.pending} floatingLabelText={"Search image to the docker hub"} fullWidth={true}
            onChange={handleSearchRepos} />
        </div>
        <br />
        <div className="row">
          {
            (this.state.pending)
              ? <CircularProgress style={{ left: "50%" }} />
              : (this.state.image === null)
                ? Object.keys(this.props.registry.list).map((key, index) => {
                  return (<div className="col-xs-6 col-md-4" key={index}
                    onClick={e => this.selectImageHandler(e, this.props.registry.list[key])}>
                    <DockerImageCard name={key} image={this.props.registry.list[key]}
                      setTemplate={this.props.setTemplate} />
                  </div>)
                })
                : <div style={{ textAlign: "center" }}>
                  <SelectField floatingLabelText="Version" value={this.state.version} onChange={this.changeVersionHandler}>
                    <MenuItem key={"latest"} value={"latest"} primaryText={"latest"} />
                    {Object.keys(this.state.image.tags).map((val) => {
                      return (this.state.image.tags[val].name.toLowerCase() !== "latest")
                        ? <MenuItem key={val} value={this.state.image.tags[val].name}
                          primaryText={this.state.image.tags[val].name} />
                        : ""
                    })}
                  </SelectField>
                  <RaisedButton label="Cancel" secondary={true} onClick={this.clearTemplateHandler} />
                </div>
          }
        </div>
      </div>
    )
  }
}

SourcesDockerImagesList.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(SourcesDockerImagesList);

