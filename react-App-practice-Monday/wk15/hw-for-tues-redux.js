//some notes let's go redux

//for projects with simpler global state, context is easier than redux.
//if it's more complicated, use redux.
//for projects with more sophisticated global state requirements, Redux remains a popular option. Redux offers greater flexibility with support for middleware and richer developer tools in the form of the Redux DevTools.


//STATE  ALL THE INFO STORED BY THAT PROGRAM AT A PART. POINT IN TIME. GNERALLY USED TO REFER TO THE DATA STORED BY THE PROGRAM AT A PARTIC. INSTANCE IN TIME.  JOB OF REDUX IS TO STORE THE STATE OF YOUR APP, MAKE IT AVAILABLE TO ENTIRE APP.

// STORE    the redux store is a single POJO with a few methods, including getState, dispatch(action), and subscribe(listener)
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


//state in redux is immutable, so state represented by an ar or obj must be updated with a NEW ARRAY or OBJ, not a mutated version
//do this with the spread operator ...
const obj = { hello: "world" };
const newObj = { ...obj }; // { hello: "world" }

const arr = [0, 1, 2, 3];
const newArr = [ ...arr ]; // [0, 1, 2, 3]

//overwrite a key and make new obj like this:
const obj2 = {
  a: "hello",
  b: "world"
};
const newObj2 = {
  ...obj,
  b: "WORLD!!"
}; // { a: "hello", b: "WORLD!!" }



//subscribing to store
//define a callback display and subscribe it to the store:

const display = () => {
  console.log(store.getState())
}

const unsubscribeDisplay = store.subscribe(display);

store.dispatch(adOrange); // ['orange', 'orange']

//display will no longer be invoked after store.dispatch()
unsubscribeDisplay();

store.dispatch(addOrange); //no output

//the store processed the dispatched aciton and then called all of its subs in response. The only sub is your display cb which logs the current state when called.


//simple example of creating a store

import { createStore } from 'redux';

const store1 = createStore(reducer, preloadedState, enhancer)  //last two are optional, reducer is NOT OPTIONAL

//get current state with getState
const currentState = store1.getState()

//upate state with dispatch
const stateBeforeAction = store.getState();

store.dispatch({
  type: 'ACTION_TYPE',
  payload: 'whatever is needed for the new state'
});

const stateAfterAction = store1.getState()

//any funcs passed into the sub method on the store will be called iwth the new state
store.subscribe(() => console.log(store.getState()));

const stateBeforeAction1 = store1.getState();

store1.dispatch({
  type: 'ACTION_TYPE',
  payload: 'whatever is needed for the new state'
});
//new state will be logged
const stateAfterAction1 = store.getState()

//how to use the createStore method to create a store instance, the store.dispatch method to dispatch an action to trigger a state update, the store.subscribe method to listen for state updates, and store.getState method to get the current state.


//*******************************ACTIONS *******************************/

//ACTION CREATORS
const addFruit = (fruit) => {
  return {   // can also be implicit return because arrow; but this is more difficult to debug
    type: 'ADD_FRUIT',
    fruit,
  };
};

//add fruit with a fruit payload and dispatch at same time
store.dispatch(addFruit('apple'))

//same but longer
const appleAction = addFruit('apple')
store.dispatch(appleAction)

//use a constant to avoid typos  ducks naming is all caps?
const ADD_FRUIT = 'groceryApp/fruit/ADD_FRUIT';

const addFruit1 = (fruit) => {
  return {
    type: ADD_FRUIT,
    fruit,
  }
};

//remember actions do not update the state directly. they are triggers. reducers update the state based on action. actions define what kind of change the state should undergo. reducers deifne how the state is changed based on the type action.
//actions and reducers work together to update teh state.


//*******************************REDUCERS *******************************/

//REDUCERS    use a switch case to deal with multiple action types

const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [...state, action.fruit]
    case 'ADD_FRUITs':
      return [...state, action.fruits]
    case 'SELL_FRUIT':
    // find index of the first instance of action.fruit
    const index = state.indexOf(action.fruit);
    if(index !== -1) {  //remove first instance of action.fruit using the index and return a new arr
      const newState = [...state];
      newState.splice(index, 1);
      return newState;
    }
    return state; // if aciton.fruit is not in state, return previous state
    case 'SELL_OUT':
      return [];
    default:
      return state;
  }
};

// use the ... to make a new array, and splice it mutates it.  don't mutate the original array.

//best practices, use Object.assign to create a shallow dup of the previous state

const goodReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      const nextState = Object.assign({}, state); //create shallow dup
      nextState.count++;
      return nextState;
    default:
      return state;
  }
}

//use mult reducers as the app gets bigger/more complicated.  each one manages a slice o state

//Imagine that your fruits business is extremely successful and it grows so much that you need multiple farmers helping you to keep your stand stocked with fruit. Your application's state will need to grow to store not only an array of fruit but also a farmers object that keeps track of your farmers.
// Here's a sample state tree of your updated application:
// {
//   fruit: [
//     'APPLE',
//     'APPLE',
//     'ORANGE',
//     'GRAPEFRUIT',
//     'WATERMELON',
//   ],
//   farmers: {
//     1: {
//       id: 1,
//       name: 'John Smith',
//       paid: false,
//     },
//     2: {
//       id: 2,
//       name: 'Sally Jones',
//       paid: false,
//     },
//   }
// }

// fruitReducer - handles actions updating the fruits slice of state
// farmersReducer - handles actions updating the new farmers slice of state




//*******************************SETTING UP REDUX WITH REACT *******************************/


/**In general, the steps to integrate Redux into an existing React application are:

    Set up Redux
        Install the redux and react-redux npm package
        Define your actions
        Define your reducer(s)
        Create your store
        Wrap the React application with the Redux provider and the created store
    Update components
        Call the useSelector hook from react-redux package to retrieve parts of the Redux store state
        Call the useDispatch hook from react-redux package to dispatch actions to the store */

//use provider to give access to the connected redux store, very much like settin up a context

import {Provider} from 'react-redux';
// import configureStore form './store';

const storeE = configureStore()

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

//all components can access the store context when it is wrapped like above

//USE SELECTOR REACT/REDUX HOOK

//accepts a func as an arg, accept the current or updated state of the redux store.  return value is what is returned from useSelector

import { useSelector } from 'react-redux';

function FruitsList() {
  const fruits = useSelector((state) => state.fruitState);

  return (
    <ul>
      {fruits.map((fruit) => (
      <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  )
}

//selector func is defined then used inside of a func component

export const getFruits = (state) => {
  return state.fruitState;
}

import { getFruits} from '../store/fruitReducer';

function FruitsList() {
  const fruits = useSelector(getFruits);

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  )
}



//useDispatch

// import {useDispatch} from 'react-redux';
// import { addFruit } from '../store/fruitReducer';

// function addmelonButon() {
//   const dispatch = useDispatch();

//   return (
//     <button onClick-
//   )
// }
