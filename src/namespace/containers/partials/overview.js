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
import {connect} from 'react-redux';

import {ServiceCardList} from '../../../service/containers'
import {NamespaceDetailInfo} from '../../components'


class NamespaceOverviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {namespace} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <ServiceCardList namespace={namespace}/>
          </div>
          <div className="col-md-4">
            <NamespaceDetailInfo namespace={namespace}/>
          </div>
        </div>
      </div>
    )
  };
}

NamespaceOverviewContainer.propTypes = {
  params: PropTypes.object.isRequired,
  namespace: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  return {
    namespace: state.namespace.list[props.params.namespace]
  }
};

export default connect(mapStateToProps)(NamespaceOverviewContainer);

