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
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {RepoFormTemplate} from "../../containers";


class RepoPartialDeploySettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mt-3">

            <div className="row">

              <div className="col-sm-12">
                <div className="clearfix lb-bg-gray p-2">
                  <div className="pull-left">
                    <img className="mr-2" src="/images/icons/repo/ico_cubes.png" alt=""/>
                    <small>The configuration templates below specify how to deploy your images to nodes.</small>
                  </div>
                  <div className="pull-right">
                    <button className="btn btn-primary py-1">Add deploy template</button>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mt-4">

                <div>
                  <div>
                    <img src="/images/icons/repo/ico_template.png" width={24} alt=""/>&nbsp;Default
                  </div>
                  <div className="row mt-1">
                    <div className="col-sm-6 pr-1 my-1">
                      <div className="lb-bg-gray h-100">
                        <div className="pull-left p-2">
                          <img src="/images/icons/repo/ico_instances.png" width={24} alt=""/>
                        </div>
                        <div className="pull-left">
                          <small>Instances</small>
                          <br/>
                          <strong className="lb-text-white mr-1">1</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 pr-1 my-1">
                      <div className="lb-bg-gray h-100">
                        <div className="pull-left p-2">
                          <img src="/images/icons/repo/ico_memory.png" width={24} alt=""/>
                        </div>
                        <div className="pull-left">
                          <small>RAM limit</small>
                          <br/>
                          <strong className="lb-text-white mr-1">256</strong>
                          <small>MB</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-sm-8 mt-4">
                <div className="card">
                  <h3 className="card-header lb-bg-gray lb-text-white">Readme</h3>
                  <div className="card-block">
                    <h4 className="card-title">Deploy configuration template</h4>
                    <div className="card-text">
                      <p>Deploy configuration template contains configurations uesd when running your service.</p>
                      <blockquote className="card-blockquote">
                        <p> Change configurations
                          Configuration changes of the template does not affect your already running containers.</p>
                      </blockquote>
                      <blockquote className="card-blockquote">
                        <p> Deloy with template
                          To deploy your service with template and modified the launch configurations of containers
                          click
                          to deploy button.</p>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <RepoFormTemplate/>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

RepoPartialDeploySettings.propTypes = {
  repo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    repo: state.repo
  }
};

export default connect(mapStateToProps)(RepoPartialDeploySettings);
