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

const DashboardHeader = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="text-center">
          Welcome to Last.Backend
        </h1>
        <p className="text-center my-2">
          Choose your next step: Build repos from one of the popular VCS or Deploy your first service
        </p>
      </div>
    </div>
  )
};

export default DashboardHeader;
