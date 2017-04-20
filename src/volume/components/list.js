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
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import {VolumeListItem} from './';

const VolumeCardList = (props) => {
  const {namespace, volume} = props;
  return (
    <div>
      <h4>Volumes</h4>
      <hr />
      <Table>
        <TableHeader enableSelectAll={false} displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>NAME</TableHeaderColumn>
            <TableHeaderColumn>STATUS</TableHeaderColumn>
            <TableHeaderColumn>SPACE</TableHeaderColumn>
            <TableHeaderColumn/>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {Object.keys(volume.list).map((id) =>
            (<VolumeListItem key={id} namespace={namespace} volume={volume.list[id]}/>)
          )}
        </TableBody>
      </Table>
    </div>
  );
};

VolumeCardList.propTypes = {

};

export default VolumeCardList;

