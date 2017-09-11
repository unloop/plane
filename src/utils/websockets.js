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

export function WS() {
  this.socket = {};
}

WS.prototype.connect = function (url) {

  let socket = new WebSocket(url);
  this.socket = socket;

  return new Promise((resolve, reject) => {

    socket.onopen = function () {
      socket.send('hello from the client');
      resolve();
    };

    socket.onmessage = function (message) {
      console.log("Received on websocket: " + message);
      resolve(message)
    };

    socket.onerror = function (error) {
      console.log('WebSocket error: ' + error);
      reject(error);
    };

    socket.onclose = function (event) {
      console.log("Websocket socket closed: " + JSON.stringify(event));
    };
  });
};


WS.prototype.disconnect = function () {
  console.log("Disconnect request from local app layer");
  this.socket.close();
};
