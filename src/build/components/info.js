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
import React, { } from 'react';

const BuildDetailInfo = () =>  {
  return (
    <div className="detail-info">
      <div className="detail-info-block">
        <table className="table">
          <tbody>
          <tr>
            <td>Image</td>
            <td>lastbackend/lastbackend</td>
          </tr>
          <tr>
            <td>Output Image</td>
            <td>lastbackend/lastbackend:latest</td>
          </tr>
          <tr>
            <td>Push secret</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="detail-info-header">Annotation</div>
      <div className="detail-info-block">

      </div>
    </div>
  );
};

BuildDetailInfo.propTypes = {

};

export default BuildDetailInfo;

