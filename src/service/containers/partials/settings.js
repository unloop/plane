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

import {
  ServiceDeleteForm,
  ServiceEnvsForm,
  ServiceGeneralForm,
  // ServiceMaintenanceForm,
  ServicePortsForm,
  ServiceRunForm,
  ServiceVolumesForm
} from "../../components";
import serviceActions from "../../actions";


const NamespaceSettingsContainer = (props) => {

  function updateGeneralInfoHandler(e, namespace, service, name, description) {
    e.preventDefault();
    props.dispatch(serviceActions.update.UpdateActionCreators(namespace, service, {
      name: name,
      description: description
    }));
  }

  function updateRunFormHandler(e, namespace, service, command) {
    e.preventDefault();
    props.dispatch(serviceActions.update.UpdateActionCreators(namespace, service, {
      config: {
        command: command
      }
    }));
  }

  function updatePortsFormHandler(e, namespace, service, ports) {
    e.preventDefault();
    props.dispatch(serviceActions.update.UpdateActionCreators(namespace, service, {
      config: {
        ports: ports
      }
    }));
  }

  function updateEnvsFormHandler(e, namespace, service, envs) {
    e.preventDefault();
    props.dispatch(serviceActions.update.UpdateActionCreators(namespace, service, {
      config: {
        env: envs
      }
    }));
  }

  function updateVolumesFormHandler(e, namespace, service, volumes) {
    e.preventDefault();
    props.dispatch(serviceActions.update.UpdateActionCreators(namespace, service, {
      config: {
        volumes: volumes
      }
    }));
  }

  // function updateMaintenanceFormHandler(e, namespace, service, maintenance) {
  //   e.preventDefault();
  //   props.dispatch(serviceActions.update.UpdateActionCreators(namespace, service, {
  //     config: {
  //       maintenance: maintenance
  //     }
  //   }));
  // }

  function removeHandler(e, namespace, service) {
    e.preventDefault();
    props.dispatch(serviceActions.remove.RemoveActionCreators(namespace, service));
  }

  return (
    <div className="container-fluid">

      <div className="settings-block-item">
        <ServiceGeneralForm updateHandler={updateGeneralInfoHandler} {...props} />
      </div>

      <hr />

      <div className="settings-block-item">
        <ServiceRunForm updateHandler={updateRunFormHandler} {...props} />
      </div>

      <hr />

      <div className="settings-block-item">
        <ServicePortsForm updateHandler={updatePortsFormHandler} {...props} />
      </div>

      <hr />

      <div className="settings-block-item">
        <ServiceEnvsForm updateHandler={updateEnvsFormHandler} {...props} />
      </div>

      <hr />

      <div className="settings-block-item">
        <ServiceVolumesForm updateHandler={updateVolumesFormHandler} {...props} />
      </div>

      <hr />

      {/*<div className="settings-block-item">*/}
        {/*<ServiceMaintenanceForm updateHandler={updateMaintenanceFormHandler} {...props} />*/}
      {/*</div>*/}

      {/*<hr />*/}

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
