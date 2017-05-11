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
import {connect} from "react-redux";

import CircularProgress from "material-ui/CircularProgress";

import {NodeCard} from "../../../components";
import nodeActions from "../../../actions/node";


class NodeCardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(nodeActions.list.ListActionCreators());
  }

  render() {
    const {node} = this.props;
    return (
      <div>
        {
          (node.action.load.pending)
            ? (
            <div className="row">
              <div className="col-xs-12 text-center">
                Loading...<br/>
                <CircularProgress />
              </div>
            </div>
          )
            : (
            <div className="container">
              <div className="row">
                {Object.keys(node.list).map((id) => {
                  return (
                    <div key={id} className="col-md-4 col-xs-12">
                      <NodeCard node={node.list[id]}/>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  node: state.node
});

export default connect(mapStateToProps)(NodeCardList);
