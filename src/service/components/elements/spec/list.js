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

import {SpecCard} from "../../../components";


const SpecCardList = (props) => {
  const {spec} = props;
  return (
    <div>
      <h5>Specs</h5>
      {
        Object.keys(spec).map((index) => {
          return <SpecCard key={index} spec={spec[index]} parent={spec[index].meta.parent || {containers: []}}
                           replicas={props.replicas}
                           changeMemoryHandler={props.changeMemoryHandler}
                           selectCardHandler={props.selectCardHandler}
                           selectContainerHandler={props.selectContainerHandler}/>;
        })
      }
    </div>
  );
};


SpecCardList.propTypes = {
  spec: React.PropTypes.array.isRequired,
  replicas: React.PropTypes.number.isRequired,
  changeMemoryHandler: React.PropTypes.func.isRequired,
  selectCardHandler: React.PropTypes.func.isRequired,
  selectContainerHandler: React.PropTypes.func.isRequired
};


export default SpecCardList;
