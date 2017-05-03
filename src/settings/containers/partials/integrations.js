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

import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import vendorActions from "../../actions/vendor";

let vendors = {
  github: {
    name: "GitHub"
  },
  bitbucket: {
    name: "Bitbucket"
  },
  gitlab: {
    name: "GitLab"
  }
};


class IntegrationsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      token: ""
    };
  }

  componentDidMount() {
    this.props.dispatch(vendorActions.list.ListActionCreators());
  }

  changeTokenHandler = (e, token) => {
    e.stopPropagation();
    this.setState({token: token.input.value})
  };

  selectHandler = (e, vendor) => {
    e.stopPropagation();
    this.setState({selected: vendor})
  };

  disconnectHandler = (e, vendor) => {
    e.stopPropagation();
    this.props.dispatch(vendorActions.disconnect.DisconnectActionCreators(vendor));
    this.setState({selected: null, token: ""})
  };

  connectHandler = (e, vendor, token) => {
    e.stopPropagation();
    this.props.dispatch(vendorActions.connect.ConnectActionCreators(vendor, token));
    this.setState({selected: null, token: ""})
  };

  cancelHandler = (e) => {
    e.stopPropagation();
    this.setState({selected: null, token: ""})
  };

  render() {
    let token;
    let {vendor} = this.props;
    return (
      <div className="container-fluid">
        {
          Object.keys(vendors).map((key, index) => {
            return (
              <div key={index} className="row">
                <div className="col-md-4 col-xs-12">
                  <h3><i className={"fa fa-" + key} aria-hidden="true"></i> {vendors[key].name}</h3>
                  <desc>
                    Connect your {key} account to deploy your private repos and provide automatic deploy after
                    each push if you need.
                  </desc>
                </div>
                <div className="col-md-8 col-xs-12">
                  <br/>
                  <br/>
                  {
                    (!!vendor.list[key])
                      ?
                      <RaisedButton label="Disconnect" primary={true} onClick={e => this.disconnectHandler(e, key)}/>
                      : (this.state.selected === key)
                      ? (
                        <div>
                          <TextField fullWidth={true} floatingLabelText="Access token" type="password"
                                     ref={(val) => token = val}
                                     value={this.state.token}
                                     onChange={(e) => this.changeTokenHandler(e, token)}/>
                          <RaisedButton label="Save" primary={true}
                                        onClick={e => this.connectHandler(e, key, this.state.token)}/>
                          <RaisedButton label="Cancel" primary={true}
                                        onClick={this.cancelHandler}/>
                        </div>
                      )
                      : <RaisedButton label="Connect" primary={true} onClick={e => this.selectHandler(e, key)}/>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

IntegrationsContainer.propTypes = {};

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor
  }
};

export default connect(mapStateToProps)(IntegrationsContainer);
