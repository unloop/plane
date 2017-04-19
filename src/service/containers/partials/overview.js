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

import {ServiceDetailInfo} from '../../components'
import {PodItemElement} from '../../components'
import {VolumesList} from '../../../volume/components'


class ServiceOverviewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const  {service, volume} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="overview-block">
              {
                service.pods.map((pod, index)=>{
                  return <PodItemElement key={index} pod={pod}/>
                })
              }
            </div>
            <div className="overview-block">
              <VolumesList service={service} volume={volume}/>
            </div>
          </div>
          <div className="col-md-4">
            <ServiceDetailInfo service={service}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return ({
    service: state.service.list[props.params.service],
    volume: state.volume,
  });
};

export default connect(mapStateToProps)(ServiceOverviewContainer);