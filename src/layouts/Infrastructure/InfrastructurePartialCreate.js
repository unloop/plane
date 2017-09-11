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
import {ClusterFormCreate} from "../../containers";
import {Cluster} from "../../actions";

class InfrastructurePartialCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handlerInfrastructureCreate = (name, description) => {
    return this.props.dispatch(Cluster.Create(name, description))
      .then((infrastructure) => browserHistory.push("/i/" + infrastructure.meta.name));
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <div>Last.Backend cloud allows you deploy and manage apps.</div>
          <div>Here you can create infrastructure for your apps.</div>
        </div>

        <div className="text-center">
          <ClusterFormCreate submit={this.handlerInfrastructureCreate}/>
        </div>

        <hr/>

        <div className="text-center">
          <Link to={"/i"}>back to infrastructures list</Link>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(InfrastructurePartialCreate);