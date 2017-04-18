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
import PropTypes from 'prop-types';
import Timestamp from 'react-timestamp';

import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';


const NamespaceDetailInfo = (props) => {
  const {namespace} = props;

  return (
    <div className="detail-info">
      <div className="detail-info-header">Details</div>
      <Divider/>
      <div className="detail-info-block">
        <table className="table">
          <tbody>
          <tr>
            <td>Name</td>
            <td>{namespace.meta.name}</td>
          </tr>
          <tr>
            <td>Created</td>
            <td><Timestamp time={namespace.meta.created} format='date' /></td>
          </tr>
          </tbody>
        </table>
      </div>
      <Divider/>
      <div className="detail-info-header">Labels</div>
      <div className="detail-info-block">
        <div className="label-wrapper">
          {
            (!!namespace.meta.labels)
              ? Object.keys(namespace.meta.labels).map((key) => {
                return <Chip key={key} className="label-chip">{key+": "+namespace.meta.labels[key]}</Chip>
              })
              : "None"
          }
        </div>
      </div>
    </div>
  );
};

NamespaceDetailInfo.propTypes = {
  namespace: PropTypes.object.isRequired
};

export default NamespaceDetailInfo;