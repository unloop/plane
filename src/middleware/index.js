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

// const middleware = store => next => action => {
//   if (!action.promise) {
//     return next(action)
//   }
//
//   function makeAction(ready, data) {
//     let newAction = Object.assign({}, action, { ready }, data)
//     delete newAction.promise
//     return newAction
//   }
//
//   next(makeAction(false))
//   return action.promise.then(
//     result => next(makeAction(true, { result })),
//     error => next(makeAction(true, { error }))
//   )
// }
//
//
// export default middleware;