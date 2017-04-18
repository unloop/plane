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
import {connect} from 'react-redux';

import {NamespaceCreateForm} from  '../../components'
import namespaceActions from '../../actions';


class NamespaceCreateFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillUnmount() {
    this.props.dispatch(namespaceActions.create.ClearAction)
  }

  render() {
    return (
      <NamespaceCreateForm {...this.props} />
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateNamespaceSubmit: (e, name, desc) => {
      e.preventDefault();

      let error = {};

      switch (true) {
        case !name.length:
          error.name = "FIELD_CANNOT_BE_BLANK";
          break;
        case name.length < 4:
          error.name = "NAME_TO_SHORT";
          break;
        case name.length > 64:
          error.name = "NAME_TO_LONG";
          break;
        default:
      }

      if (!!Object.keys(error).length) {
        dispatch(namespaceActions.create.FailureAction(error));
        return
      }

      dispatch(namespaceActions.create.CreateActionCreators(name, desc))
    },
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NamespaceCreateFormContainer);
