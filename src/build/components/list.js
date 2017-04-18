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
import PropTypes from 'prop-types';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

import BuildListItem from './elements/item'

const BuildList = (props) => {
  const {build} = props;
  return (
    <Table>
      <TableHeader enableSelectAll={false} displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>№</TableHeaderColumn>
          <TableHeaderColumn>STATUS</TableHeaderColumn>
          <TableHeaderColumn>SOURCES</TableHeaderColumn>
          <TableHeaderColumn>CREATED</TableHeaderColumn>
          <TableHeaderColumn>DURATION</TableHeaderColumn>
          <TableHeaderColumn></TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(build.list).map((id) =>
          <BuildListItem key={id} build={build.list[id]}/>
        )}
      </TableBody>
    </Table>
  )
};

BuildList.propTypes = {
  build: PropTypes.object.isRequired
};

export default BuildList;

