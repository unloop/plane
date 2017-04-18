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
import {BuildDetailInfo} from './../../components'

const PodOverviewContainer = (props) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <div className="overview-block">
          <h4>Detail:</h4>
          <hr />
          <BuildDetailInfo {...props}/>
        </div>
      </div>
    </div>
  </div>
);


export default PodOverviewContainer;

