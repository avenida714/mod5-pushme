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
