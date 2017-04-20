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
import serviceActions from '../../actions/service';


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

  return (
    <div className="container-fluid">

      <div className="settings-block-item">
        <ServiceGeneralForm updateHandler={updateGeneralInfoHandler} {...props} />
      </div>

      <hr />

      <div className="settings-block-item">
        <ServiceVolumesForm updateHandler={updateVolumesFormHandler} {...props} />
      </div>

      <Divider/>

      <div className="settings-block-item">
        <ServiceDeleteForm removeHandler={removeHandler} {...props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return ({
    namespace: state.namespace.list[props.params.namespace],
    service: state.service.list[props.params.service]
  });
};

export default connect(mapStateToProps)(NamespaceSettingsContainer);
