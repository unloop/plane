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

import App from "./app";
import {IndexRoute, Redirect, Route} from "react-router";
// Import namespace containers
import {
  NamespaceAccessContainer,
  NamespaceActivityContainer,
  NamespaceCreatePage,
  NamespaceInfoPage,
  NamespaceListPage,
  NamespaceOverviewContainer,
  NamespaceSettingsContainer
} from "./namespace/containers";
// Import service containers
import {
  ServiceActivityContainer,
  ServiceBuildsContainer,
  ServiceDeployContainer,
  ServiceInfoPage,
  ServiceLogsContainer,
  ServiceMetricsContainer,
  ServiceOverviewContainer,
  ServiceSettingsContainer
} from "./service/containers";
// Import settings containers
import {SettingsInfoPage, SettingsIntegrationContainer} from "./settings/containers";
// Import build containers
import {BuildInfoPage, BuildLogsContainer, BuildOverviewContainer} from "./build/containers";

import {VolumeInfoPage, VolumeOverviewContainer} from "./volume/containers";

import {DeployCreatePage} from "./deploy/containers";

import NotFoundPage from "./404";

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{content: NamespaceListPage}}/>

      <Route path="/ns/new" components={{content: NamespaceCreatePage}}/>

      <Route path="/ns/:namespace" components={{content: NamespaceInfoPage}}>
        <IndexRoute component={NamespaceOverviewContainer}/>
        <Route path="/ns/:namespace/access" component={NamespaceAccessContainer}/>
        <Route path="/ns/:namespace/activity" component={NamespaceActivityContainer}/>
        <Route path="/ns/:namespace/settings" component={NamespaceSettingsContainer}/>
      </Route>

      <Route path="/ns/:namespace/deploy" components={{content: DeployCreatePage}}/>

      <Route path="/ns/:namespace/s/:service" components={{content: ServiceInfoPage}}>
        <IndexRoute component={ServiceOverviewContainer}/>
        <Route path="/ns/:namespace/s/:service/builds" component={ServiceBuildsContainer}/>
        <Route path="/ns/:namespace/s/:service/deploy" component={ServiceDeployContainer}/>
        <Route path="/ns/:namespace/s/:service/logs" component={ServiceLogsContainer}/>
        <Route path="/ns/:namespace/s/:service/metrics" component={ServiceMetricsContainer}/>
        <Route path="/ns/:namespace/s/:service/activity" component={ServiceActivityContainer}/>
        <Route path="/ns/:namespace/s/:service/settings" component={ServiceSettingsContainer}/>
      </Route>

      <Route path="/s/:service/b/:build" components={{content: BuildInfoPage}}>
        <IndexRoute component={BuildOverviewContainer}/>
        <Route path="/s/:service/b/:build" component={BuildOverviewContainer}/>
        <Route path="/s/:service/b/:build/logs" component={BuildLogsContainer}/>
      </Route>

      <Route path="/settings" components={{content: SettingsInfoPage}}>
        <IndexRoute component={SettingsIntegrationContainer}/>
      </Route>

      <Route path="/ns/:namespace/v/:volume" components={{content: VolumeInfoPage}}>
        <IndexRoute component={VolumeOverviewContainer}/>
        <Route path="/ns/:namespace/v/:volume" component={VolumeOverviewContainer}/>
      </Route>


      <Route path='/404' components={{content: NotFoundPage}}/>
      <Redirect from='*' to='/404'/>
    </Route>
  );
};
