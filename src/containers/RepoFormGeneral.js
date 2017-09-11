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

const tech = [
  "docker",
  "clojure",
  "erlang",
  "golang",
  "java",
  "node",
  "php",
  "python",
  "ruby",
  "scala",
  "glassfish",
  "grails",
  "tomcat",
  "unknown",
];

class RepoFormGeneral extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tech: tech[0],
      name: props.repo.meta.name || "",
    };

    this.handleChangeTech = this.handleChangeTech.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChangeTech(e, t) {
    e.preventDefault();
    this.setState({tech: t}, () => {
      this.props.change(this.state);
    });
  }

  handleChangeName(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value}, () => {
      this.props.change(this.state);
    });
  }

  render() {
    return (
      <div className="row">

        <div className="col-sm-12">
          <div className="input-group mb-4">
            <div className="input-group-btn">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                      aria-haspopup={true} aria-expanded={false}>
                <img src={`/images/icons/tech/ico_${this.state.tech.toLowerCase()}.png`} alt="" width={32}/>
              </button>
              <div className="dropdown-menu dropdown-menu-bottom lb-bg-gray">
              <div className="row">
                {
                  tech.map((t, index) => (
                      <div key={index} className="col-1 m-1 cursor-pointer" onClick={e => this.handleChangeTech(e, t)}>
                        <img src={`/images/icons/tech/ico_${t}.png`} alt="" width={32}/>
                      </div>
                    )
                  )
                }
              </div>
              </div>
            </div>
            <input type="text" name="name" className="form-control" aria-label="Text input with dropdown button"
                   value={this.state.name}
                   onChange={this.handleChangeName}/>
          </div>
        </div>
      </div>
    )
  }
}

RepoFormGeneral.propTypes = {
  repo: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired
};

export {RepoFormGeneral}

export default RepoFormGeneral;
