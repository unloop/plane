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

import Divider from "material-ui/Divider";
import Timestamp from "react-timestamp";

const PodSpecInfo = (props) => {
  const {pod, spec} = props;
  return (
    <div className="detail-info">
      <div className="detail-info-header">Spec
        <i className="fa fa-pencil pull-right cursor-pointer" aria-hidden="true"
           onClick={props.enableEditorHandler}></i>
      </div>

      <Divider/>


      <Divider/>

      <div className="detail-info-block">
        <table className="table">
          <tbody>
          <tr>
            <td>Name</td>
            <td>library/redis:latest</td>
          </tr>
          <tr>
            <td>Created</td>
            <td><Timestamp time={pod.meta.created} format='date'/></td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className="detail-info-header">Run settings</div>
      <Divider/>
      <div className="detail-info-block">
        <table className="table">
          <tbody>
          <tr>
            <td>Memory</td>
            <td>256 MB</td>
          </tr>
          <tr>
            <td>Command</td>
            <td>npm start</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className="detail-info-header">Ports</div>
      <Divider/>
      <div className="detail-info-block">
        <table className="table">
          <thead>
          <th className="text-center">External</th>
          <th className="text-center">Internal</th>
          <th className="text-center">Protocol</th>
          <th className="text-center">Published</th>
          </thead>
          <tbody>
          <tr className="text-center">
            <td>3000</td>
            <td>45234</td>
            <td>TCP</td>
            <td><i className="fa fa-check" aria-hidden="true"></i></td>
          </tr>
          <tr className="text-center">
            <td>2679</td>
            <td>45235</td>
            <td>TCP</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className="detail-info-header">Environments</div>
      <Divider/>
      <div className="detail-info-block">
        <table className="table">
          <tbody>
          <tr>
            <td>DEBUG=true</td>
          </tr>
          <tr>
            <td>HOST=https://app.lstbknd.net</td>
          </tr>
          <tr>
            <td>PORT=8888</td>
          </tr>
          <tr>
            <td>MAIL=team@lstbknd.net</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

PodSpecInfo.propTypes = {
  pod: React.PropTypes.object.isRequired,
  spec: React.PropTypes.array.isRequired,
  enableEditorHandler: React.PropTypes.func.isRequired
};

export default PodSpecInfo;

