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

class ServiceLogsStreamer extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      open: false,
      error: {
        error: false,
        message: ""
      },
      ws: null,
      messages : [],
    };

    this.streamConnect = this.streamConnect.bind(this);
    this.streamDisconnect = this.streamDisconnect.bind(this);

    this.writeChunk = this.writeChunk.bind(this);
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

  componentDidMount() {
    this.streamConnect()
  }

  componentWillUnmount() {
    this.streamDisconnect()
  }

  componentWillReceiveProps(props) {
    if (props.endpoint !== this.props.endpoint) {
      this.streamDisconnect();
      this.streamConnect();
    }
  }

  streamConnect() {

    if (!this.props.endpoint){
      return
    }

    let ws = new WebSocket(this.props.endpoint);
    ws.onmessage = this.writeChunk;
    ws.onopen = this.streamOpen;
    ws.onclose = this.streamClose;
    ws.onerror = this.streamError;
    this.setState({ws: ws})
  }

  streamDisconnect() {
    if (!this.state.ws) {
      return
    }
    this.state.ws.close();
    this.setState({ws: null})
  }

  writeChunk(e) {
    let message = JSON.parse(e.data);
    let messages = this.state.messages
    messages[message.chunk] = message.data;
    this.setState({messages: messages})
  }

  streamOpen() {
    //TODO: show spinner
  }

  streamClose() {
    //TODO: show socket end error
  }

  streamError () {
    //TODO: try to reconnect after 1 sec, show error
  }


  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="logs-container" ref={(div) => this.logs = div}>
              <pre className="content-logs-wrapper">
              {
                this.state.messages.map(function (val, index) {
                  return <span key={index}>{val}</span>
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

ServiceLogsStreamer.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => {
  return ({
    endpoint: props.endpoint,
  });
};

export default connect(mapStateToProps)(ServiceLogsStreamer);

