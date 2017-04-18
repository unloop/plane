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

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import namespaceActions from "../../actions";


class NamespaceSettingsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.namespaceItem.meta.name,
      desc: props.namespaceItem.meta.description,
    }
  }

  componentWillUnmount() {
    this.props.dispatch(namespaceActions.update.ClearAction)
  }

  onChangeName(e, name) {
    e.preventDefault();
    this.setState({name: name.input.value})
  }

  onChangeDesc(e, desc) {
    e.preventDefault();
    this.setState({desc: desc.input.value})
  }

  render() {
    let err = this.props.namespace.action.update.error;
    let name, desc;
    return (
      <div className="container-fluid">
        <div className="row settings-block-item">
          <div className="col-md-4 col-xs-12">
            <h3>General settings</h3>
            <desc>Main namespace settings</desc>
          </div>
          <div className="col-md-8 col-xs-12">
            <TextField ref={val => name = val} floatingLabelText="Namespace name" hintText="name"
                       errorText={err.name} fullWidth={true}
                       value={this.state.name}
                       onChange={(e) => this.onChangeName(e, name)}/>
            <br />
            <TextField ref={val => desc = val} fullWidth={true} floatingLabelText="Namespace description"
                       hintText="description" errorText={err.description}
                       value={this.state.desc}

                       onChange={(e) => this.onChangeDesc(e, desc)}/>
            <br />
            <RaisedButton label="Save" primary={true} disabled={this.props.namespace.action.update.pending}
                          onClick={(e) => this.props.onSaveButtonClick(e, this.props.params.namespace, this.state.name, this.state.desc)}/>
          </div>
        </div>
        <hr />
        <div className="row settings-block-item">
          <div className="col-md-4 col-xs-12">
            <h3>Delete namespace</h3>
            <desc>This action CANNOT be undone. This will permanently delete your namespace and delete all attached
              services
            </desc>
          </div>
          <div className="col-md-8 col-xs-12">
            <br />
            <br />
            <RaisedButton label="Delete" secondary={true} disabled={this.props.namespace.action.remove.pending}
                          onClick={(e) => this.props.onRemoveNamespaceClick(e, this.props.params.namespace)}/>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  namespace: state.namespace,
  namespaceItem: state.namespace.list[props.params.namespace]
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveButtonClick: (e, id, name, description) => {
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
        dispatch(namespaceActions.update.FailureAction(error));
        return
      }

      dispatch(namespaceActions.update.UpdateActionCreators(id, name.trim(), description))
    },

    onRemoveNamespaceClick: (e, id) => {
      e.preventDefault();
      dispatch(namespaceActions.remove.RemoveActionCreators(id))
    },
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NamespaceSettingsContainer);
