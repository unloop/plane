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
import {browserHistory, Link} from 'react-router'
import {AppFormCreate} from "../../containers";
import {App} from "../../actions";

class AppPartialCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handlerAppCreate = (name, description) => {
    return this.props.dispatch(App.Create(name, description))
      .then((app) => browserHistory.push("/ns/" + app.meta.name));
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <div>Last.Backend cloud allows you deploy and manage apps.</div>
          <div>Here you can create app for your apps.</div>
        </div>

        <div className="text-center">
          <AppFormCreate submit={this.handlerAppCreate}/>
        </div>

        <hr/>

        <div className="text-center">
          <Link to={"/ns"}>back to apps list</Link>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(AppPartialCreate);