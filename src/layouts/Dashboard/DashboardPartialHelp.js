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
import {Link} from 'react-router'

const DashboardPartialHelp = () => {
  return (
    <div className="col-10 m-auto text-center pt-3">

      <Link href={"/ns/new"}>
        <img src={"/images/welcome/deploy.png"} alt={"Deploy"}/>
      </Link>

      <h1 className="mt-3 text-center">{"Deploy"}</h1>
      <hr />
      <small className="p-3">
        {"Deploy service to clouds, using tons of public projects or own images."}
      </small>
      <br />
      <Link href={"/ns/new"} className="btn btn-success mt-3">{"DEPLOY SERVICE"}</Link>
    </div>
  )
};

export default DashboardPartialHelp;
