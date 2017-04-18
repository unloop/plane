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

import React, {  } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import {Link} from 'react-router';

const VolumeListItem = (props) => {

  const {volume, namespace} = props;

  return (
    <TableRow key={volume.id}>
      <TableRowColumn>{volume.id}</TableRowColumn>
      <TableRowColumn>
        <Link to={`/ns/${namespace.id}/v/${volume.id}`}>
          {volume.name}
        </Link>
      </TableRowColumn>
      <TableRowColumn>{volume.status}</TableRowColumn>
      <TableRowColumn>{volume.space}</TableRowColumn>
      <TableRowColumn style={{textAlign:'right'}}>
        <i className="fa fa-cogs" aria-hidden="true"></i>
      </TableRowColumn>
    </TableRow>
  )};

VolumeListItem.propTypes = {

};

export default VolumeListItem;

