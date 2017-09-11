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
import {connect} from "react-redux";

import {ServiceFormRemove, ServiceFormGeneral} from "../../containers";
import {Service} from "../../actions/";

const ServicePartialSettings = (props) => {

  function updateGeneralInfoHandler(app, service, name, desc) {
    props.dispatch(Service.Update(app, service, {name: name, description: desc}));
  }

  function removeHandler(app, service) {
    props.dispatch(Service.Remove(app, service));
  }


  let hook_url = [process.env.REACT_APP_API_HOST, "hook", props.service.meta.hook].join("/");

  return (
    <div className="container-fluid">

      <div className="settings-block-item">
        <ServiceFormGeneral updateHandler={updateGeneralInfoHandler} {...props} />
      </div>

      <hr/>

      <div className="settings-block-item">
        <div className="row">

          <div className="col-md-4 col-sm-12">
            <h3>Webhooks</h3>
            <desc>Allows external services to notify system that service update required</desc>
          </div>

          <div className="col-md-8 col-sm-12">
            <pre style={{marginTop: "30px"}}>POST {hook_url}</pre>
          </div>
        </div>
      </div>

      <hr />

      <div className="settings-block-item">
        <ServiceFormRemove removeHandler={removeHandler} {...props} />
      </div>
    </div>
  )
    ;
};

const mapStateToProps = (state, props) => {
  return ({
    app: state.app.list[props.params.app],
    service: state.service.list[props.params.service]
  });
};

export default connect(mapStateToProps)(ServicePartialSettings);