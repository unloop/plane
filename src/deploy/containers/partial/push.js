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

class DeployGitPushContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <p> Install the Last.Backend CLI</p>
          <p>Download and install the <a href="#" title="Last.Backend CLI">Last.Backend CLI</a>.</p>

          <p>If you haven't already, log in to your Last.Backend account and follow the prompts to create a new SSH public
            key.</p>

          <pre>
            $ lb login
            Create a new Git repository
          </pre>

          <p>Initialize a git repository in a new or existing directory</p>

          <pre>
            $ cd my-project/
            $ git init
            $ lb git:remote -a demo
            Deploy your application
          </pre>

          <p>Commit your code to the repository and deploy it to Last.Backend using Git.</p>

          <pre>
            $ git add .
            $ git commit -am "make it better"
            $ git push lb master
            Existing Git repository
          </pre>

          <p>For existing repositories, simply add the lb remote</p>

          <pre>
            $ lb git:remote -a demo
          </pre>
        </div>
      </div>
    );
  }
}

DeployGitPushContainer.propTypes = {};

export default DeployGitPushContainer;


