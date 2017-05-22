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

import Divider from "material-ui/Divider";

import {ServiceDeleteForm, ServiceGeneralForm, ServiceVolumesForm} from "../../components";
import serviceActions from "../../actions/service";


const NamespaceSettingsContainer = (props) => {

  function updateGeneralInfoHandler(service, name, desc) {
    props.dispatch(serviceActions.update.UpdateActionCreators(service, {name: name, description: desc}));
  }

  function updateVolumesFormHandler(service, volumes) {
    props.dispatch(serviceActions.update.UpdateActionCreators(service, {spec: {volumes: volumes}}));
  }

  function removeHandler(service) {
    props.dispatch(serviceActions.remove.RemoveActionCreators(service));
  }


  let hook_url = [process.env.REACT_APP_API_HOST, "hook", props.service.meta.hook].join("/");

  return (
    <div className="container-fluid">

      <div className="settings-block-item">
        <ServiceGeneralForm updateHandler={updateGeneralInfoHandler} {...props} />
      </div>

      <Divider/>

      <div className="settings-block-item">
        <div className="row">

          <div className="col-md-4 col-xs-12">
            <h3>Webhooks</h3>
            <desc>Allows external services to notify system that service update required</desc>
          </div>

          <div className="col-md-8 col-xs-12">
            <pre style={{marginTop: "25px"}}>{hook_url}</pre>
          </div>
        </div>
      </div>

      <Divider/>

      <div className="settings-block-item">
        <ServiceVolumesForm updateHandler={updateVolumesFormHandler} {...props} />
      </div>

      <Divider/>

      <div className="settings-block-item">
        <ServiceDeleteForm removeHandler={removeHandler} {...props} />
      </div>
    </div>
  )
    ;
};

const mapStateToProps = (state, props) => {
  return ({
    namespace: state.namespace.list[props.params.namespace],
    service: state.service.list[props.params.service]
  });
};

export default connect(mapStateToProps)(NamespaceSettingsContainer);
