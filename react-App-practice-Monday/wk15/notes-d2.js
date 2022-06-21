//store

import { createStore } from "redux"


// getState  returns the store's current state

// dispatchEvent(action)  passes action into the store's reducer

// subscribe - registers a callback to be triggered whenever the store updates. returns a unc, unsubscribes the cb func from the store.


//set up the react/redux store

//  import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// const rootReducer = combineReducers({})   // need to have at least 1 reducer in order to set up and use createStore

// let enhancer

//compose turns many into one.

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore


//fruitReducer
// const initialState = [{},{}]
// const fruitReducer = (state = initialstate, action) => {
//   return state
// }
// export default fruitReducer
