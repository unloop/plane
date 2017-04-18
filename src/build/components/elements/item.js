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

import {TableRow, TableRowColumn} from 'material-ui/Table';
import {Link} from 'react-router';
const Timestamp = require('react-timestamp');

const BuildListItem = (props) => {
  const {build} = props;
  return (
    <TableRow>
      <TableRowColumn>
        <Link to={`/s/${build.service}/b/${build.id}`}>{build.number}</Link>
      </TableRowColumn>
      <TableRowColumn>{build.status}</TableRowColumn>
      <TableRowColumn>{build.sources.repo}</TableRowColumn>
      <TableRowColumn><Timestamp time={build.created}/></TableRowColumn>
      <TableRowColumn>{build.duration}</TableRowColumn>
      <TableRowColumn style={{textAlign:'right'}}>
        <i className="fa fa-cogs" aria-hidden="true"></i>
      </TableRowColumn>
    </TableRow>
  )
};

BuildListItem.propTypes = {

};

export default BuildListItem;
