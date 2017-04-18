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
import { connect } from 'react-redux';

const BuildInfoPage = (props) => (
  <container className="container-info">
    {props.children}
  </container>
);

BuildInfoPage.propTypes = {

};

const mapStateToProps = (state, props) => ({
  namespaces: state.namespace.list,
});

export default connect(mapStateToProps)(BuildInfoPage);
