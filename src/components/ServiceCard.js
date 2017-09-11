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
import {Link} from "react-router";
import {ServiceChartMemory, ServiceChartReplicas} from "./";
//import PropTypes from "prop-types";


const ServiceCard = (props) => (
  <div className="container" style={{border: "1px solid", borderRadius: "5px"}}>

    <div className="row pt-2 pb-2">
      <div className="col-sm-8">Demo</div>
      <div className="col-sm-4 text-right">DNS: demo.demo.lbapp.in</div>
      <div className="col-sm-8">Demo service description</div>
      <div className="col-sm-4 text-right">Ports: 4400/TCP, 4443/TCP</div>
    </div>

    <div className="row bg-inverse text-white pt-2 pb-2">
      <div className="col-4 align-self-center">
        <div className="d-flex flex-row">
          <div className="p-2">
            <i className="fa fa-circle mr-2" aria-hidden="true"/>
          </div>
          <div className="p-auto">
            lastbackend/lastbackend<br/>
            build: №22&nbsp;&nbsp;&nbsp;tag: latest
          </div>
        </div>
      </div>
      <div className="col-4 align-self-center">build status: active<br/>started: 2 min ago</div>
      <div className="col-4 align-self-center text-right">
        <Link to={"/"}>view logs</Link>
      </div>
    </div>

    <div className="row pt-2">
      <div className="col-4">
        <ServiceChartReplicas state={0} submit={()=>{}} />
        <ServiceChartMemory memory={0}/>
      </div>
      <div className="col-8 align-self-center">
        <div className="text-uppercase">Container: Demo-frontend</div>
        <div className="pl-2">
          <p>Image: lastbackend/lastbackend</p>
          <p>Ports: 4400/TCP, 4333/TCP</p>
        </div>
      </div>
    </div>

    <hr className="w-100"/>

    <div className="col-12 pt-1 pb-2 text-right">
      Updated: 2 hours ago
    </div>

  </div>
);

ServiceCard.propTypes = {};

export default ServiceCard;