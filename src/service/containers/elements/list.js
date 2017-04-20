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
import {Link} from "react-router";
import {connect} from "react-redux";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import {ServiceCard} from "../../components";
import serviceActions from "../../../service/actions/service";


class ServiceCardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(serviceActions.list.ListActionCreators(this.props.namespace.meta.name));
  }

  searchUpdateHandler = (e) => {
    this.setState({search: e.target.value.substr(0, 20)});
  };

  render() {
    const {service, namespace} = this.props;

    return (!Object.keys(service.list).length)
      ? (
        <div className="text-center">
          <p>You do not have any services. Add this?</p>
          <br/>
          <Link to={`/ns/${(namespace.meta.name)}/deploy`}>
            <RaisedButton label="Deploy now" primary={true}/>
          </Link>
        </div>
      )
      : (
        <div>
          <div className="namespace-service-filter">
            <TextField hintText="Filter" fullWidth={true} value={this.state.search} onChange={this.searchUpdateHandler}/>
          </div>

          {Object.keys(service.list).map((name) => {
              console.log(name, service.list[name].meta, namespace.meta.name)
              return (service.list[name].meta.namespace === namespace.meta.name && name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
                ? <ServiceCard key={name}
                               namespace={namespace}
                               service={service.list[name]}
                               dispatch={this.props.dispatch}/>
                : ""
            }
          )}
        </div>
      )
  }
}

ServiceCardList.propTypes = {
  namespace: React.PropTypes.object.isRequired,
  service: React.PropTypes.object,
};

const mapStateToProps = (state, props) => {
  return ({
    namespace: props.namespace,
    service: state.service
  })
};

export default connect(mapStateToProps)(ServiceCardList);
