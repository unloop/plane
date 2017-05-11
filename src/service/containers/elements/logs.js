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

// import SelectField from "material-ui/SelectField";
// import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

import * as api from "../../api/service";


class ServiceLogsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      container: 0,
    };
    this.changeContainerHandler = this.changeContainerHandler.bind(this);
  }

  scrollToBottom() {
    const scrollHeight = this.logs.scrollHeight;
    const height = this.logs.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.logs.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  changeContainerHandler(e, index, val) {
    e.stopPropagation();
    this.setState({container: val});
  }

  render() {
    let self = this;
    let {service, container} = this.props;

    if (this.state.data.length === 0) {
      api.logs(service.meta.namespace, service.meta.name, container.pod, container.id)
        .then((res) => {
          const reader = res.body.getReader();
          const decoder = new TextDecoder();

          reader.read().then(function process(result) {
            if (result.done) return;
            const text = decoder.decode(result.value, {stream: true});
            let data = self.state.data.concat(text);
            self.setState({data: data});
            return reader.read().then(process);
          }).then(() => {
          });

        })
        .catch((err) => {
        });
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="pull-right">
              {/*<SelectField fullWidth={true} value={this.state.container} style={{fontSize: "10px"}}*/}
                           {/*onChange={this.changeContainerHandler}>*/}
                {/*{*/}
                  {/*Object.keys(this.props.containers).map((key, index) => {*/}
                    {/*return <MenuItem key={index} value={index}*/}
                                     {/*primaryText={this.props.containers[key].id}/>*/}
                  {/*})*/}
                {/*}*/}
              {/*</SelectField>*/}
              <RaisedButton label="Back" secondary={true} onClick={this.props.cancelHandler} className="pull-right"/>
            </div>
            <h4>Logs</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-12">
            <div className="logs-container" ref={(div) => this.logs = div}>
              <pre className="content-logs-wrapper">
              {
                this.state.data.map(function (val, index) {
                  return <div key={index}>{val}</div>
                })
              }
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ServiceLogsContainer.propTypes = {
  cancelHandler: React.PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
  return ({
    service: props.service,
    container: props.container,
    containers: props.containers,
  });
};

export default connect(mapStateToProps)(ServiceLogsContainer);

