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

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as api from '../../api'


class ServiceLogsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pod: 0,
    };
  }

  handleChangePod = (e, index, value) => {
    e.preventDefault();
    this.setState({pod: value});
  };

  render() {
    let self = this;

    if (!!this.props.service.id && this.state.data.length === 0) {
      api.logs(this.props.params.namespace, this.props.service.name, this.props.service.pods[this.state.pod].name)
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
            console.log('All done!');
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
              {/*<FlatButton label="download" default={true}/>*/}
              <SelectField autoWidth={true} fullWidth={true} value={this.state.pod} style={{fontSize: "10px"}}
                           onChange={this.handleChangePod}>
                {
                  Object.keys(this.props.service.pods).map((key, index) => {
                    return <MenuItem key={index} value={index} primaryText={this.props.service.pods[key].name}/>
                  })
                }
              </SelectField>
            </div>
            <h4>Logs</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-12">
            <div className="logs-container">
              <pre style={{color: "white", border: 0, background: "none", fontSize: "8px", padding: "0 10px"}}>
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

const mapStateToProps = (state, props) => {
  return {
    service: state.service.list[props.params.service] || {pods: []},
  }
};

export default connect(mapStateToProps)(ServiceLogsContainer);

