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

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light">

        <Link to={"/"} className="navbar-brand">
          <img className="align-top" height="40" src="/logo.svg" alt="Last.Backend"/>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <Link to={"/r"} className="nav-link" activeClassName="active">
                Repos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/app"} className="nav-link" activeClassName="active">
                Apps
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/i"} className="nav-link" activeClassName="active">
                Infrastructure
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/explore"} className="nav-link" activeClassName="active">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"https://docs.lastbackend.com"} target="blank" className="nav-link">
                Docs
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link mt-1">
                <button className="btn btn-sm btn-secondary text-uppercase">
                  <small><strong>+</strong> add new</small>
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link mt-1">
                <i className="fa fa-bell"/>
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default Header;
