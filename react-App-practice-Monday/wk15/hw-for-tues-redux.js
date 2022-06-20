//some notes let's go redux

//for projects with simpler global state, context is easier than redux.
//if it's more complicated, use redux.
//for projects with more sophisticated global state requirements, Redux remains a popular option. Redux offers greater flexibility with support for middleware and richer developer tools in the form of the Redux DevTools.


//STATE  ALL THE INFO STORED BY THAT PROGRAM AT A PART. POINT IN TIME. GNERALLY USED TO REFER TO THE DATA STORED BY THE PROGRAM AT A PARTIC. INSTANCE IN TIME.  JOB OF REDUX IS TO STORE THE STATE OF YOUR APP, MAKE IT AVAILABLE TO ENTIRE APP.

// STORE    the redux store is a single POO with a few methods, including getState, dispatch(action), and subscribe(listener)
  // any state you want redux to handle is held in the store

//ACTIONS  simple POJO with a type property.  can update the store. they can be dispatched -- sent tot eh store. redux apps use functions called action creators that return actions. these take arguments which allow them to customize the data contained in the actions they generate.
