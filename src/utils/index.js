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

import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import fetch from "isomorphic-fetch";

import rootReducer from "./reducer";
import errMessages from "./error";

import commonActions from "./../common/actions";

export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}

export function Storage() {

  window.addEventListener('storage', storeEvent, false);

  function storeEvent(event) {
    setTimeout(handle(event.key, event.newValue, event.oldValue), 0);
  }

  let Events = function () {
    this.size = 0;
    this.get = (key) => this[key];
    this.has = (key) => this.hasOwnProperty(key);

    this.set = (key, value) => {
      if (!this.has(key)) this.size++;
      this[key] = value;
      return value;
    };

    this.update = (key, value, extend) => {
      extend = extend || true;
      if (!this.has(key)) {
        this.size++;
        this[key] = value;
      } else {
        this[key] = extend ? Object.assign(this[key], value) : Object.merge(this[key], value);
      }
      return this[key];
    };

    this.remove = (key) => {
      if (this.has(key)) {
        delete this[key];
        this.size--;
      }
    };
    return this
  };

  let events = new Events();

  function handle(key, val, old) {
    if (val === 'undefined') return;
    let handlers = events.get(key);
    if (!handlers || !handlers.forEach) return false;
    handlers.forEach((func) => func(val, old));
  }

  let storage = {
    get(k) {
      return localStorage.getItem(k);
    },
    set(k, v) {
      localStorage.setItem(k, v);
    },
    remove(k) {
      localStorage.removeItem(k);
    },
    on: (key, handler) => {
      if (!events.has(key)) events.set(key, []);
      events.get(key).push(handler);
    },
    off: (key, handler) => {
      if (!handler) return events.remove(key);
      let arr = events.get(key);
      let index = arr.findIndex(handler);
      if (index > 0) arr.splice(index, 1);
    },
  };

  return storage;
}

export function configureStore() {
  const devTools = (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ?
    window.devToolsExtension() : f => f;

  const loggerMiddleware = createLogger();
  const middleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  );

  const enhancer = compose(
    middleware,
    devTools
  );

  return createStore(
    rootReducer,
    enhancer
  );
}

export function sockets (store) {

  store.dispatch(commonActions.sockets.SocketsConnectAction);

  const wss_host = process.env.REACT_APP_WSS_HOST;
  let ws = new WebSocket([wss_host,"events"].join("/"));
  store.dispatch(commonActions.sockets.SocketsConnectedAction);

  ws.onopen =  e => store.dispatch(commonActions.sockets.SocketsConnectedAction);
  ws.onmessage = e =>  store.dispatch(commonActions.sockets.SocketsReceiveMessage(JSON.parse(e.data)));

  ws.onerror = e => this.setState({ error: 'WebSocket error' });
  ws.onclose = e => {
    store.dispatch(commonActions.sockets.SocketsDisconnectedAction(e));
    setTimeout(function(){
      sockets(store);
    }, 1000);
  };
}

export function request(method, url, body, auth) {

  let headers = {};
  headers["Content-Type"] = "application/json";

  let opts = {};
  opts.method = method;
  opts.headers = headers;

  if (!!body) {
    opts.body = JSON.stringify(body);
  }

  return fetch(url, opts)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json().then((res) => {
          return res;
        }).catch((e) => {
          return response;
        });
      }

      return response.json().then((e) => {
        throw e;
      });
    });
}

export function getStateColor(status) {
  const statuses = {
    created: "blue",
    warning: "blue",
    ready: "green",
    stop: "blue",
    stopped: "blue",
    started: "green",
    running: "green",
    restarted: "blue",
    error: "red",
    kill: "gray",
    terminated: "gray",
    exited: "gray",
    destroy: "blue",
    destroyed: "blue"
  };
  return statuses[status.toLowerCase()] || "gray";
}

export function getError(code) {
  return errMessages[code] || "";
}
