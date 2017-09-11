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

const Preloader = () => (
  <div className="preloader">
    <div className="preloader-container text-center">
      <p>Please wait a moment while we are preparing the content!</p>
      <div className="preloader-cube-grid">
        {[...Array(9)].map((x, i) => <div key={i} className={`preloader-cube preloader-cube${i + 1}`}/>)}
      </div>
    </div>
  </div>
);

export default Preloader;



