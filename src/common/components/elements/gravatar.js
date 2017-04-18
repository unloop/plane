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

import React from 'react'
import PropTypes from 'prop-types';

import md5 from 'md5'
import querystring from 'query-string'
import isRetina from 'is-retina'

import Avatar from 'material-ui/Avatar';

export default class Gravatar extends React.Component {

   displayName = 'Gravatar';

  static propTypes = {
    email: PropTypes.string,
    size: PropTypes.number,
    rating: PropTypes.string,
    protocol: PropTypes.string,
    default: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    size: 50,
    rating: 'g',
    default: 'retro',
    protocol: '//',
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const base = `${this.props.protocol}www.gravatar.com/avatar/`;
    const query = querystring.stringify({
      s: this.props.size,
      r: this.props.rating,
      d: this.props.default,
    });

    const retinaQuery = querystring.stringify({
      s: this.props.size * 2,
      r: this.props.rating,
      d: this.props.default,
    });
    const formattedEmail = ('' + this.props.email).trim().toLowerCase();

    let hash;
    if (this.props.md5) {
      hash = this.props.md5
    } else if (typeof this.props.email === 'string') {
      hash = md5(formattedEmail)
    } else {
      console.warn(
        'Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.'
      );
      return (<script />)
    }

    const src = `${base}${hash}?${query}`;
    const retinaSrc = `${base}${hash}?${retinaQuery}`;

    return (
      <Avatar src={(isRetina)? src:retinaSrc} />
    );
  }
}

