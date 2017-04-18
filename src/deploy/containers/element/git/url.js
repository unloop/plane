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
import TextField from 'material-ui/TextField';

class UrlContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      url: '',
      branch: 'master',
    };
  }

  urlUpdate = (e) => {
    this.setState({url: e.target.value});
    this.props.setUrl(e.target.value, this.state.branch)
  };

  branchUpdate = (e) => {
    this.setState({branch: e.target.value});
    this.props.setUrl(this.state.url, e.target.value)
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <TextField floatingLabelText={"Git repo url"} fullWidth={true} value={this.state.url}
                     onChange={this.urlUpdate}/>
          <br />
          <TextField floatingLabelText={"Git repo branch"} fullWidth={true} value={this.state.branch}
                     onChange={this.branchUpdate}/>
          <br />
          {/*<Toggle label="private repository" labelPosition="right" defaultToggled={true}/>*/}
        </div>
      </div>
    )
  }
}


export default UrlContainer;
