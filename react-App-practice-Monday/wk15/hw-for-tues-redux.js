//some notes let's go redux

//for projects with simpler global state, context is easier than redux.
//if it's more complicated, use redux.
//for projects with more sophisticated global state requirements, Redux remains a popular option. Redux offers greater flexibility with support for middleware and richer developer tools in the form of the Redux DevTools.


//STATE  ALL THE INFO STORED BY THAT PROGRAM AT A PART. POINT IN TIME. GNERALLY USED TO REFER TO THE DATA STORED BY THE PROGRAM AT A PARTIC. INSTANCE IN TIME.  JOB OF REDUX IS TO STORE THE STATE OF YOUR APP, MAKE IT AVAILABLE TO ENTIRE APP.

// STORE    the redux store is a single POO with a few methods, including getState, dispatch(action), and subscribe(listener)
  // any state you want redux to handle is held in the store

//ACTIONS  simple POJO with a type property.  can update the store. they can be dispatched -- sent tot eh store. redux apps use functions called action creators that return actions. these take arguments which allow them to customize the data contained in the actions they generate.

// PURE funcs    pure if it's behavior depends only its arguments and it has no side effects.   CAN'T depend on the value of any varaibles that aren't passed to it as args. can't alter the state of the program or any variable existing outside itself. takes args and returns a value.

//REDUCERS a reducer is a func that is called each time an action is dispatched. The reducer receives an action and the current state as args and returns updated state.
// redux reducers must be pure funcs of the dispatched action and the current state. behavior is very predictable and allows their effects to potentially be reversed.

// MIDDLEWARE  optional component of redux.  allows custom responses to dispatched actions. actions pass through each middleware that has been added to the state. middle chooses to pass it down the chain. large ecosystem of existing middleware. example loger that records each action before passing to the reducer. most common middleware dispatches async reqs to a server.

//TIME TRAVELLING DEV TOOLS    - can look back through the history of the state and toggle past actions on and off to see a live recalc of the state. this ability to revert to a previous state is what is meant by time travel.

//THUNKS    traditional approach to middleware parallels the format of reducers. THUNKS are an alternate approach. refers to a func whose primary purpose is simply to call another func.  in redux, a thunk aciton creator returns a func (not an obj). used most commonly to make async API reqs.

//*******************************STORE *******************************/


//STORE API --  an obj that holds the app state, wrapped in a minimalist API.
//3 methods:
//1 getState - returns the store's current state
//2 dispatch(action) - passes action into the store's reducer telling it what info to update.
//3 subscribe(callback) - registers a callback to trigger whenever the store updates. returns a func, when infoked, unsubscribes the callback func form the store.


//create a store
import {createStore} from 'redux';

const store = createStore(reducer, preloadedState, enhancer);

//    reducer (required) - A reducing function that receives the store's current state and incoming action, determines how to update the store's state, and returns the next state (more on this in a moment).
// preloadedState (optional) - An object representing any application state that existed before the store was created.
// enhancer (optional) - A function that adds extra functionality to the store.


//update the store
store.dispatch(action);
//action = POJO with type key indicating which action to be performed.   payload is optional, keys contain any new info
const addOrange = {
  type: 'ADD_FRUIT',  // this is the type
  fruit: 'orange',  // this is the payload
};


//REDUCER EXAMPLE
const reducer = (state = {}, aciton) => {
  switch (action.type) {
    case 'ACTION_TYPE_ONE':
      return {type: 1};
    case 'ACTION_TYPE_TWO':
      return {type: 2};
    case 'ACTION_TYPE_RESET':
      return {};
    default:
      return state;
  }
};
