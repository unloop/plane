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
import {connect} from "react-redux";
import {SettingsHeader} from "../../components";


class NodeInfoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <SettingsHeader {...this.props} />
        <container className="container-info">
          {this.props.children}
        </container>
      </div>
    )
  }
}

NodeInfoPage.propTypes = {
  children: PropTypes.element.isRequired
};

const mapStateToProps = (state, props) => ({
  location: props.location
});

export default connect(mapStateToProps)(NodeInfoPage);

