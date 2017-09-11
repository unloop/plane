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
import {Preloader, AppCard} from "../components";
import {App} from "../actions";

class PageAppList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pending: true
    }
  }

  componentDidMount() {
    this.props.dispatch(App.List())
      .then(() => {
        this.setState({pending: false})
      });
  }

  render() {
    return (
      <div className="container">
        {(this.state.pending) ? <Preloader/> :
          <div className="col-10 mx-auto mt-5 pt-3 mb-2">
            <div className="row">
              <div className="col-8">
                <h1>Applications</h1>
                <small>Displaying {Object.keys(this.props.apps).length} elements</small>
              </div>
              <div className="col-4 pt-3">
                <button className="btn btn-success pull-right text-uppercase">ADD NEW APP</button>
              </div>
            </div>
            <hr />
            <div className="row">
              {Object.keys(this.props.apps).map((id) =>
                <div key={id} className="col-12 my-1">
                  <AppCard app={this.props.apps[id]}/>
                </div>
              )}
            </div>
          </div>
        }
      </div>
    )

  }

}

const mapStateToProps = (state, props) => ({
  apps: state.app,
  location: props.location
});


export default connect(mapStateToProps)(PageAppList);