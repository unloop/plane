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
import Timestamp from "react-timestamp";
import {Link} from "react-router";


const RepoBlockTagItem = ({item, index}) => (
  <div className="clearfix">
    <div className="pull-left" style={{width: "25px"}}>
      <span className="lb-text-blue">#{index}</span>
    </div>

    <div className="pull-left">
      <span className="lb-text-blue"><i className="fa fa-code-fork" aria-hidden={true}/>&nbsp;
        {item.name}
      </span>
    </div>

    <div className="pull-right">
      <span>
        <i className="fa fa-calendar-check-o" aria-hidden={true}/>&nbsp;<Timestamp time={item.updated}/>
      </span>
      <span className="px-2">
        {!!item.build_4.id
          ? <Link to={`/build/${item.build_4.id}`}><i className="fa fa-circle-o px-1" aria-hidden={true}/></Link>
          : <i className="fa fa-circle-o px-1" aria-hidden={true}/>
        }
        {!!item.build_3.id
          ? <Link to={`/build/${item.build_3.id}`}><i className="fa fa-circle-o px-1" aria-hidden={true}/></Link>
          : <i className="fa fa-circle-o px-1" aria-hidden={true}/>
        }
        {!!item.build_2.id
          ? <Link to={`/build/${item.build_2.id}`}><i className="fa fa-circle-o px-1" aria-hidden={true}/></Link>
          : <i className="fa fa-circle-o px-1" aria-hidden={true}/>
        }
        {!!item.build_1.id
          ? <Link to={`/build/${item.build_1.id}`}><i className="fa fa-circle-o px-1" aria-hidden={true}/></Link>
          : <i className="fa fa-circle-o px-1" aria-hidden={true}/>
        }
        {!!item.build_0.id
          ? <Link to={`/build/${item.build_0.id}`}><i className="fa fa-circle-o px-1" aria-hidden={true}/></Link>
          : <i className="fa fa-circle-o px-1" aria-hidden={true}/>
        }

        {/*<i className="fa fa-check-circle px-1" aria-hidden={true}/>*/}
        {/*<i className="fa fa-times-circle-o px-1" aria-hidden={true}/>*/}
        {/*<i className="fa fa-times-circle-o px-1" aria-hidden={true}/>*/}
        {/*<i className="fa fa-check-circle px-1" aria-hidden={true}/>*/}
      </span>
      <button type="button" className="btn btn-primary btn-sm lb-bg-light-gray text-uppercase">
        Build
      </button>
    </div>

  </div>
);

RepoBlockTagItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object.isRequired
};

export default RepoBlockTagItem;
