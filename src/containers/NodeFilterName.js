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

import {Link} from "react-router";

import {Preloader, NodeCardItem} from "../components";
import {Node} from "../actions";


class NodeFilterName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(Node.List());
  }

  nodeCreateHandler = (e) => {
    e.preventDefault();
    this.props.dispatch(Node.Create());
  };

  nodeRemoveHandler = (node) => {
    this.props.dispatch(Node.Remove(node));
  };

  render() {
    const {node} = this.props;
    return (
      <div>
        {
          (node.action.load.pending)
            ? <Preloader/>
            : (!Object.keys(node.list).length)
            ? (
              <div className="text-center">
                <p>You do not have any nodes. Add new one?</p>
                <br/>
                <button label="Create new node" primary={true}
                              onClick={this.nodeCreateHandler}/>
              </div>
            )
            : (
              <div className="container node-list">

                <div className="node-list-toolbar">
                  <div >
                    <span className="title">Nodes</span>
                  </div>
                  <div>
                    <Link to="#">
                      <button label="Create new node" onClick={this.nodeCreateHandler}/>
                    </Link>
                  </div>
                </div>

                <hr/>

                <div className="row node-list-items">
                  {Object.keys(node.list).map((id) => {
                    return (
                      <div key={id} className="col-md-4 col-sm-12">
                        <NodeCardItem node={node.list[id]} removeHandler={this.nodeRemoveHandler}/>
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

export default connect(mapStateToProps)(NodeFilterName);
