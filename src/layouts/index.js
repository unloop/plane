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

import NotFoundPage from "./NotFoundPage";

import Header from "./Header";
import PageDashboardInfo from "./PageDashboardInfo";

import PageAppList from "./PageAppList";
import PageAppInfo from "./PageAppInfo";
import PageAppCreate from "./PageAppCreate";

import PageRepoInfo from "./PageRepoInfo";
import PageRepoList from "./PageRepoList";
import PageRepoCreate from "./PageRepoCreate";

import PageInfrastructureCreate from "./PageInfrastructureCreate";
import PageInfrastructureInfo from "./PageInfrastructureInfo";

import {DashboardHeader, DashboardPartialHelp, DashboardPartialInfo} from "./Dashboard";


import {
  AppHeader,
  AppPartialCreate,
  AppPartialDashboard,
  AppPartialDetails,
  AppPartialEnvs,
  AppPartialHelp,
  AppPartialSettings,
  ServicePartialCreate,
  ServicePartialDetails,
  ServicePartialHelp,
  ServicePartialLogs,
  ServicePartialSettings
} from "./App";

import {
  RepoHeader,
  RepoPartialBuilds,
  RepoPartialBuildsSettings,
  RepoPartialDashboard,
  RepoPartialDeploySettings,
  RepoPartialDetails,
  RepoPartialGeneralSettings,
  RepoPartialLogs,
  RepoPartialNotifications
} from "./Repo";

import {
  InfrastructureHeader,
  InfrastructurePartialCreate,
  InfrastructurePartialDashboard,
  InfrastructurePartialDetails,
  InfrastructurePartialHelp,
  InfrastructurePartialSettings,
  NodePartialCreate,
  NodePartialDetails,
  NodePartialHelp,
  NodePartialSettings
} from "./Infrastructure";


export {

  PageDashboardInfo,
  PageAppCreate,
  PageAppList,
  PageAppInfo,
  PageRepoList,
  PageRepoInfo,
  PageRepoCreate,
  PageInfrastructureCreate,
  PageInfrastructureInfo,

  Header,

  NotFoundPage,

  DashboardHeader, DashboardPartialInfo, DashboardPartialHelp,

  AppHeader,

  AppPartialCreate,
  AppPartialDashboard,
  AppPartialDetails,
  AppPartialHelp,
  AppPartialSettings,
  AppPartialEnvs,

  ServicePartialCreate,
  ServicePartialDetails,
  ServicePartialLogs,
  ServicePartialSettings,
  ServicePartialHelp,

  RepoHeader,

  RepoPartialDashboard,
  RepoPartialDetails,
  RepoPartialLogs,
  RepoPartialBuilds,
  RepoPartialBuildsSettings,
  RepoPartialDeploySettings,
  RepoPartialGeneralSettings,
  RepoPartialNotifications,

  InfrastructureHeader,

  InfrastructurePartialCreate,
  InfrastructurePartialHelp,
  InfrastructurePartialDashboard,
  InfrastructurePartialDetails,
  InfrastructurePartialSettings,

  NodePartialCreate,
  NodePartialDetails,
  NodePartialHelp,
  NodePartialSettings

}
