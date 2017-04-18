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

import {ServiceCreateForm} from  '../../components'


const NamespaceCreate = () => (
  <container>
    <div className="container text-center">
      <h1>Welcome to Last.Backend!</h1>
      <div>Last.Backend cloud allows you deploy and manage apps.</div>
      <div>Here you can create namespace for your apps.</div>
    </div>

    <ServiceCreateForm/>

  </container>
);


export default NamespaceCreate;
