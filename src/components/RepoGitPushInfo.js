import React from "react";
import {Link} from "react-router";

import "../repo/components/GitPush/styles.css";

const GitPushInfo = ({title, description, link, caption, image, theme}) => (
  <div className="git-push__content">
    <h4 className="git-push__header">Install the Last.Backend CLI</h4>
    <p className="git-push__text">Download and install the <Link to={"#"}>Last.Backend CLI</Link>.</p>
    <p className="git-push__text">If you haven't already, log in to your Last.Backend account and follow the prompts to
      create a new SSH
      public key.</p>
    <pre className="git-push__command">
      $ lb login<br/>
    </pre>

    <h4 className="git-push__header">Create a new Git repo</h4>
    <p className="git-push__text">Initialize a git repo in a new or existing directory</p>
    <pre className="git-push__command">
      $ cd my-project/<br/>
      $ git init<br/>
      $ lb git:remote -a hello-world<br/>
    </pre>

    <h4 className="git-push__header">Deploy your app</h4>
    <p className="git-push__text">Commit your code to the repo and deploy it to Last.Backend using Git.</p>
    <pre className="git-push__command">
      $ git add .<br/>
      $ git commit -am "make it better"<br/>
      $ git push lb master<br/>
    </pre>

    <hr/>

    <h4 className="git-push__header">Existing Git repo</h4>
    <p className="git-push__text">For existing repositories, simply add the <code>lb</code> remote</p>
    <pre className="git-push__command">
      $ lb git:remote -a hello-world<br/>
    </pre>

  </div>
);

export default GitPushInfo;
