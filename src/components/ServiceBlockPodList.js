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
import PropTypes from "prop-types";
import {ServiceChartReplicas, ServiceBlockPodItem} from "./";


const ServiceBlockPodList = ({service, scale}) => {

  return (
    <div>
      <div className="row">
        <div className="col-12 py-2 px-3 my-2">
          <div className="h5 pull-left pt-2">
            <span className="partial-header text-uppercase">Pods</span>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-3">
          <ServiceChartReplicas state={service.state.replicas} submit={scale}/>
        </div>
        <div className="col-9">
          {service.pods.map((pod,index) =>
            <ServiceBlockPodItem  key={index} pod={pod} />
          )}
        </div>
      </div>
    </div>
  )
};


ServiceBlockPodList.propTypes = {
  service: PropTypes.object.isRequired,
  scale: PropTypes.func.isRequired
};


export default ServiceBlockPodList;