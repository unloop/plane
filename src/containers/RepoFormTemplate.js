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


class RepoFormTemplates extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="row">

        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="templateName">Name</label>
            <input type="text" className="form-control" aria-describedby="Name" placeholder="Name" id="templateName"/>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="templateDescription">Description</label>
            <textarea className="form-control" rows="10" id="templateDescription"
                      placeholder="- Enter a few words about deploy template -"/>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          {/*<NumericInput label={"Memory, MB"} min={0} step={32}/>*/}
        </div>

        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="templateCommand">Command</label>
            <input type="text" className="form-control" aria-describedby="Command" placeholder="Command"/>
          </div>
        </div>

        <div className="col-sm-12">
          {/*<PortsForm data={this.state.port} setHandler={this.changePortsHandler}/>*/}
        </div>

        <div className="col-sm-12">
          {/*<EnvironmentsForm data={this.state.environments} setHandler={this.changeEnvsHandler}/>*/}
        </div>

      </div>
    )
  }
}

RepoFormTemplates.propTypes = {};

export {RepoFormTemplates}

export default RepoFormTemplates;
