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
import {Link} from 'react-router'

import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';

import {NamespaceCard} from '../../components'
import namespaceActions from '../../actions';


class NamespaceCardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // Injected into props by React Redux `connect()` call:
    let {dispatch} = this.props;
    // Reducer can react to this action by setting
    // `isFetching` and thus letting us show a spinner.
    dispatch(namespaceActions.list.ListActionCreators());
  }

  render() {
    const {namespace} = this.props;
    return (
      <div>
        {
          (namespace.action.load.pending)
            ? (
              <div className="row">
                <div className="col-sm-12 text-center">
                  Loading...<br/>
                  <CircularProgress />
                </div>
              </div>
            )
            : (!Object.keys(namespace.list).length)
              ? (
                <div className="text-center">
                  <p>You do not have any namespaces. Add new one?</p>
                  <br/>
                  <Link to={`/ns/new`}>
                    <RaisedButton label="Create new namespace" primary={true}/>
                  </Link>
                </div>
              )
              : (
                <div className="container namespace-list">
                  <div className="namespace-list-header">
                    <div className="pull-left">
                      <h1>Namespaces</h1>
                    </div>
                    <div className="pull-right">
                      <Link to="/ns/new">
                        <RaisedButton primary={true} label="Create namespace"/>
                      </Link>
                    </div>
                  </div>
                  <div className="row namespace-list-items">
                    <div className="col-xs-12">
                      {Object.keys(namespace.list).map((id) =>
                        <NamespaceCard key={id} namespace={namespace.list[id]}/>
                      )}
                    </div>
                  </div>
                </div>
              )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  namespace: state.namespace
});

export default connect(mapStateToProps)(NamespaceCardList);
