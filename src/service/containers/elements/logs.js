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

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

import * as api from "../../api/service";


class ServiceLogsContainer extends React.Component {

  constructor(props) {

    let pod = 0;
    let container = 0;
    let pods = props.service.pods || [];
    let containers = (!!pods.length) ? pods[0].containers : [];

    if (!!props.pod) {
      for (let i = 0; i <= pods.length - 1; i++) {
        if (pods[i].meta.id === props.pod.meta.id) {
          pod = i;
          containers = pods[i].containers;
          break;
        }
      }
    }

    if (!!props.container) {
      for (let i = 0; i <= containers.length - 1; i++) {
        if (containers[i].meta.id === props.container.id) {
          container = i;
          break;
        }
      }
    }

    super(props);
    this.state = {
      messages: [],
      pod: pod,
      container: container,
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

  changePodHandler(e, index, val) {
    e.stopPropagation();
    this.setState({messages: [], pod: val});
  }

  changeContainerHandler(e, index, val) {
    e.stopPropagation();
    this.setState({messages: [], container: val});
  }

  render() {
    let self = this;
    let {service} = this.props;

    if (this.state.messages.length === 0) {
      let container = this.props.service.pods[this.state.pod].containers[this.state.container];
      api.logs(service.meta.namespace, service.meta.name, container.pod, container.id)
        .then((res) => {
          const reader = res.body.getReader();
          const decoder = new TextDecoder();

          reader.read().then(function process(result) {
            if (result.done) return;
            const text = decoder.decode(result.value, {stream: true});
            let messages = self.state.messages.concat(text);
            self.setState({messages: messages});
            return reader.read().then(process);
          })

        })
        .catch((err) => {
        });
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-sm-2">
                <h4>Logs</h4>
              </div>
              <div className="col-sm-4">
                <SelectField fullWidth={true} value={this.state.pod} style={{fontSize: "10px"}}
                             onChange={this.changePodHandler.bind(this)}>
                  {
                    Object.keys(this.props.service.pods).map((key, index) => {
                      return <MenuItem key={index} value={index}
                                       primaryText={this.props.service.pods[key].meta.id}/>
                    })
                  }
                </SelectField>
              </div>
              <div className="col-sm-4">
                <SelectField fullWidth={true} value={this.state.container} style={{fontSize: "10px"}}
                             onChange={this.changeContainerHandler.bind(this)}>
                  {
                    Object.keys(this.props.service.pods[this.state.pod].containers).map((key, index) => {
                      return <MenuItem key={index} value={index}
                                       primaryText={this.props.service.pods[this.state.pod].containers[key].id}/>
                    })
                  }
                </SelectField>
              </div>
              <div className="col-sm-2">
                <RaisedButton label="Back" secondary={true} onClick={this.props.cancelHandler} className="pull-right"/>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="logs-container" ref={(div) => this.logs = div}>
              <pre className="content-logs-wrapper">
              {
                this.state.messages.map(function (val, index) {
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
  cancelHandler: React.PropTypes.func.isRequired,
  service: React.PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  return ({
    service: props.service,
    pod: props.pod,
    container: props.container
  });
};

export default connect(mapStateToProps)(ServiceLogsContainer);

