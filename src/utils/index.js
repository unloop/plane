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

import rootReducer from "./reducer";
import errMessages from "./error";
import {WS} from "./websockets"

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

export function requestJSON(method, url, body) {

  let headers = {};
  headers["Content-Type"] = "app/json";

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

export function request(method, url, headers, body) {

  headers = headers || {};

  let opts = {};
  opts.method = method;
  opts.headers = headers || {};

  if (!!body) {
    opts.body = JSON.stringify(body);
  }

  return fetch(url, opts)
    .then(response => {
      return (response.status >= 200 && response.status < 300)
        ? response
        : response.then((e) => {
          throw e
        });
    });
}

export function getStateColor(status) {
  const statuses = {
    created: "#607D8B",
    creating: "#607D8B",
    warning: "#FF9800",
    pending: "#3F51B5",
    stop: "#3F51B5",
    stopped: "#3F51B5",
    ready: "#4CAF50",
    start: "#4CAF50",
    started: "#4CAF50",
    running: "#4CAF50",
    restarted: "#4CAF50",
    error: "#f44336",
    kill: "#212121",
    terminated: "#212121",
    provision: "#607D8B",
    exited: "#212121",
    destroy: "#212121",
    destroying: "#212121",
    destroyed: "#212121"
  };
  status = status || "pending";
  return statuses[status.toLowerCase()] || "#607D8B";
}

export function getError(code) {
  return errMessages[code] || "";
}

export {WS}
