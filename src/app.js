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

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './app.css';
import './common/styles/main.css';
import './deploy/styles/main.css';
import './namespace/styles/main.css';
import './service/styles/main.css';
import './settings/styles/main.css';

const MainThemeStyles = () => getMuiTheme({
  palette: {
    fontWeight: 300,
    textColor: '#737373',
    primary1Color: '#2275dc'
  }
});

injectTapEventPlugin();

const App = (props) => {
  return (
    <div>
      <MuiThemeProvider muiTheme={MainThemeStyles()}>
        <div className="container-fluid container-wrapper">
          {props.content}
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
