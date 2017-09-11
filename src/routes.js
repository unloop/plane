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
import {IndexRoute, Redirect, Route} from "react-router";

import App from "./app";
// Import dashboard containers
import * as layout from "./layouts";

export default () => {

  return (
    <Route path="/" component={App}>
      <IndexRoute component={layout.PageDashboardInfo}/>

      {/*************** Apps **************/}

      <Route path="/app/new" component={layout.PageAppCreate}/>

      <Route path="/app" component={layout.PageAppList}/>

      <Route path="/app/:app" component={layout.PageAppInfo}>
        <IndexRoute component={layout.AppPartialDashboard}/>
        <Route path="/app/:app/settings" component={layout.AppPartialSettings}/>
        <Route path="/app/:app/envs" component={layout.AppPartialEnvs}/>
      </Route>

      <Route path="/app/:app/:service" component={layout.PageAppList}>
        <IndexRoute components={{
          main: layout.AppPartialDashboard, sidebar: layout.AppPartialDetails
        }}/>


        <Route path="/app/:app/:service/settings" components={{
          main: layout.AppPartialDashboard, sidebar: layout.ServicePartialSettings
        }}/>

        <Route path="/app/:app/:service/logs" components={{
          main: layout.AppPartialDashboard, sidebar: layout.ServicePartialLogs
        }}/>

      </Route>

      {/*************** Repositories **************/}

      <Route path="/r/new" component={layout.PageRepoCreate}/>
      <Route path="/r" component={layout.PageRepoList}/>
      <Route path="/r/:owner/:name" component={layout.PageRepoInfo}/>

      {/*************** infrastructure **************/}

      <Route path="/i/new" component={layout.PageInfrastructureCreate}/>

      <Route path="/i" component={layout.PageAppList}>

        <IndexRoute components={{
          main: layout.AppPartialDashboard, sidebar: layout.AppPartialDetails
        }}/>

        <Route path="/i" components={{
          header: layout.InfrastructureHeader,
          main: layout.InfrastructurePartialDashboard, sidebar: layout.InfrastructurePartialDetails
        }}/>

        <Route path="/i/:infrastructure/new" components={{
          header: layout.InfrastructureHeader,
          main: layout.NodePartialCreate, sidebar: layout.NodePartialHelp
        }}/>

        <Route path="/i/:infrastructure/n/:node" components={{
          header: layout.InfrastructureHeader,
          main: layout.InfrastructurePartialDashboard, sidebar: layout.NodePartialDetails
        }}/>

        <Route path="/i/:infrastructure/n/:node/settings" components={{
          header: layout.InfrastructureHeader,
          main: layout.InfrastructurePartialDashboard, sidebar: layout.NodePartialSettings
        }}/>

      </Route>

      {/*************** Default **************/}

      <Route path='/404' component={layout.NotFoundPage}/>
      <Redirect from='*' to='/404'/>
    </Route>
  );
};
