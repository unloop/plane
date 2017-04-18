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

import {
  SOCKETS_CONNECT, SOCKETS_CONNECTING, SOCKETS_CONNECTED, SOCKETS_DISCONNECTED
} from "./../constants";

import {
  SERVICE_UPDATE_SUCCESS
} from "../../service/constants";

export const SocketsConnectAction = {
  type: SOCKETS_CONNECT
};

export const SocketsConnectingAction = {
  type: SOCKETS_CONNECTING
};

export const SocketsConnectedAction = {
  type: SOCKETS_CONNECTED
};

export const SocketsDisconnectedAction = (e) =>({
  type: SOCKETS_DISCONNECTED,
  e
});

export const SocketsReceiveMessage = (payload) => ({
  type: SERVICE_UPDATE_SUCCESS,
  payload
});


export default {
  SocketsConnectAction, SocketsConnectingAction, SocketsConnectedAction,
  SocketsDisconnectedAction,
  SocketsReceiveMessage
};
