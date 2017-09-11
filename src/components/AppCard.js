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
import {Link} from 'react-router'
import {ServiceCardList} from "./";

const AppCard = ({app}) => (
  <div className="card">
    <div className="row">
      <div className="col-8">
        <div className="pull-left p-3">
          <img height="40" src="/images/icons/cube.png" alt="" />
        </div>
        <div className="pull-left py-3">
          <Link to={"/app/" + app.meta.name }>
            <h2 className="text-capitalize">{app.meta.name}</h2>
            <small>{app.meta.description}</small>
          </Link>
        </div>
      </div>
      <div className="col-4 p-3 text-right">
        <div className="pt-3 pr-3">
          <button className="btn btn-primary text-uppercase">ADD NEW SERVICE</button>
        </div>
      </div>
    </div>

    <div className="tabs-panel">
      <div className="row">
        <div className="col-8 pl-5">
          <div className="tab active">
            <div>
              {Object.keys(app.services).length} Services
            </div>
          </div>
        </div>
        <div className="col-4 text-right">
          <div className="py-1 pr-3">
            <i className="fa fa-list px-1"/> 0
            <i className="fa fa-dashboard ml-2"/> 1234/1231 MB
          </div>
        </div>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-12 text-center">
        <div className="card-body py-3">
          {(Object.keys(app.services).length === 0) ?
            <h4 className="text-center lb-text-light-gray">
              There are no services in this application
            </h4> :
            <ServiceCardList services={app.services} app={app} scale={(e) => (console.log(e))}/>
          }
        </div>
      </div>
    </div>

  </div>
);

AppCard.propTypes = {
  app: PropTypes.object.isRequired
};

export {AppCard}

export default AppCard;
