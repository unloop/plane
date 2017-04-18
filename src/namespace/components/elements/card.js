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

import React, {} from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import NamespaceMemoryChart from '../charts/memory';
import NamespaceCostChart from '../charts/cost';

import {Link} from 'react-router'

const NamespaceCard = (props) => {
  const {namespace} = props;
  return (
    <Link to={`/ns/${namespace.meta.name}`}>
      <Paper className="namespace-card">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <h3 className="namespace-card-title">{namespace.meta.name}</h3>
            { props.description
              ? <span className="namespace-card-description">{namespace.meta.description}</span>
              : <span className="namespace-card-description">No description added yet</span>
            }
          </div>
          <div className="col-md-6 col-xs-12 namespace-card-charts">
            <NamespaceMemoryChart memory={namespace.meta.memory}/>
            <NamespaceCostChart cost={namespace.cost}/>
          </div>
        </div>
      </Paper>
    </Link>
  );
};

NamespaceCard.propTypes = {
  namespace: PropTypes.object.isRequired
};

export default NamespaceCard;
