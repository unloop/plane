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

import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';

const Preloader = (props) => (
  <div className="loader">
    <div className="loader-container">
      <h3><b>Please wait a moment while we are preparing the content !</b></h3>
      <CircularProgress/>
    </div>
  </div>
);

export default Preloader;



